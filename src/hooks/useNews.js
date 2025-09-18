import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { backendUrl } from '../config';

const fetchNews = async () => {
  const res = await axios.get(`${backendUrl}/news`);
  return res.data?.news || [];
};

const fetchNewsById = async (id) => {
  const res = await axios.get(`${backendUrl}/news/${id}`);
  return res.data?.news ?? res.data;
};

export function useNews(options = {}) {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
    staleTime: 5 * 60 * 1000,
    ...options,
  });
}

export function useNewsItem(id, options = {}) {
  const queryClient = useQueryClient();
  const list = queryClient.getQueryData(['news']) || [];
  const cached = list.find((n) => n._id === id);

  return useQuery({
    queryKey: ['news', id],
    queryFn: () => fetchNewsById(id),
    enabled: Boolean(id) && !cached,
    initialData: cached,
    staleTime: 5 * 60 * 1000,
    ...options,
  });
}
