import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { EyeIcon, Pencil, Trash2, Newspaper, Grid } from 'lucide-react';
import ReactPaginate from 'react-paginate';

import { fetchNews, deleteNews } from '../../redux/actions';
import ConfirmDialog from '../components/common/ConfirmDialog';
import DashboardCard from '../components/common/DashboardCard';
import StatCard from '../components/common/StatCard';
import SkeletonCard from '../components/SkeletonCard';
import SearchFilterBar from '../components/common/SearchFilterBar';

const NewsDashboard = () => {
  const dispatch = useDispatch();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const newsPerPage = 9;

  // Search & Filter (by tags)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);

  const { data: news, pending, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  // Normalize tags
  const getNewsTags = (tags) => {
    if (!tags) return [];
    const parseStringList = (val) => {
      if (typeof val !== 'string') return [String(val)];
      let s = val.trim();
      if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
        s = s.slice(1, -1).trim();
      }
      if (s.startsWith('[') && s.endsWith(']')) {
        try {
          const parsed = JSON.parse(s);
          if (Array.isArray(parsed)) return parsed.map((x) => String(x).trim());
        } catch {}
      }
      if (s.includes(',')) return s.split(',').map((x) => x.trim()).filter(Boolean);
      return [s];
    };
    if (Array.isArray(tags)) return tags.flatMap(parseStringList).filter(Boolean);
    if (typeof tags === 'string') return parseStringList(tags).filter(Boolean);
    return [];
  };

  const stats = useMemo(() => {
    if (!news) return { totalNews: 0, totalCategories: 0, categoriesMap: {} };
    const totalNews = news.length;
    const categoriesMap = {};
    news.forEach((n) => {
      const c = n.category;
      if (c) categoriesMap[c] = (categoriesMap[c] || 0) + 1;
    });
    return { totalNews, totalCategories: Object.keys(categoriesMap).length, categoriesMap };
  }, [news]);

  const allTags = useMemo(() => {
    const set = new Set();
    (news || []).forEach((n) => {
      getNewsTags(n.tags).forEach((t) => set.add(t));
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [news]);

  const filteredNews = useMemo(() => {
    if (!news) return [];
    const q = searchQuery.trim().toLowerCase();
    return news.filter((n) => {
      const tags = getNewsTags(n.tags);
      const matchesTag = selectedTag ? tags.some((t) => t === selectedTag) : true;
      if (!matchesTag) return false;
      if (!q) return true;
      const title = String(n?.title || '').toLowerCase();
      const desc = String(n?.description || '').replace(/<[^>]*>/g, '').toLowerCase();
      return title.includes(q) || desc.includes(q);
    });
  }, [news, searchQuery, selectedTag]);

  const paginatedNews = useMemo(() => {
    const startIndex = currentPage * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    return filteredNews.slice(startIndex, endIndex);
  }, [filteredNews, currentPage]);

  const pageCount = filteredNews.length ? Math.ceil(filteredNews.length / newsPerPage) : 0;

  const handlePageClick = (event) => setCurrentPage(event.selected);

  useEffect(() => {
    setCurrentPage(0);
  }, [searchQuery, selectedTag]);

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = async () => {
    await dispatch(deleteNews(selectedId));
    setConfirmOpen(false);
    setSelectedId(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6 text-rugero-gray1">
        <h1 className="text-2xl font-bold">News</h1>
        <Link to="/admin/news/create" className="bg-rugero-primary text-white px-4 py-2 rounded hover:bg-rugero-green3 transition duration-300">
          + Post News
        </Link>
      </div>

      {error && <p className="text-red-500 h-full text-center">{error}</p>}

      {/* Stats cards */}
      {!pending && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <StatCard icon={<Newspaper />} bgColor="bg-purple-100" iconColor="text-purple-600" label="Total News" value={stats.totalNews} />
          <StatCard icon={<Grid />} bgColor="bg-green-100" iconColor="text-green-600" label="Categories" value={stats.totalCategories} />
        </div>
      )}

      {/* Search & Filter (by tags) */}
      {!pending && (
        <SearchFilterBar
          categories={allTags}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedTag}
          onCategorySelect={setSelectedTag}
        />
      )}

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pending
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : paginatedNews.length > 0
          ? paginatedNews.map((item) => (
              <DashboardCard
                key={item._id}
                item={item}
                onDelete={handleDeleteClick}
                confirmDialog={confirmOpen && selectedId === item._id ? (
                  <ConfirmDialog
                    message="Are you sure you want to delete this news?"
                    onConfirm={confirmDelete}
                    onCancel={() => setConfirmOpen(false)}
                  />
                ) : null}
                detailsPath="/admin/news"
                editPath="/admin/news"
                eyeIcon={<EyeIcon size={18} />}
                editIcon={<Pencil size={18} />}
                deleteIcon={<Trash2 size={18} />}
              />
            ))
          : !pending && <p className="col-span-full text-center text-gray-500">No news found</p>}
      </div>

      {/* Pagination controls */}
      {!pending && pageCount > 1 && (
        <div className="flex justify-center mt-12">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next ›"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="‹ Prev"
            forcePage={currentPage}
            containerClassName="flex items-center space-x-2"
            pageClassName="px-3 py-1 rounded bg-gray-200"
            pageLinkClassName="text-gray-700"
            previousClassName="px-3 py-1 rounded bg-gray-200"
            nextClassName="px-3 py-1 rounded bg-gray-200"
            activeClassName="bg-rugero-primary text-white"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      )}
    </div>
  );
};

export default NewsDashboard;
