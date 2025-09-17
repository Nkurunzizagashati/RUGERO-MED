import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FilterBar = ({ categories, onFilter }) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  // Call filter with current state
  const handleFilterChange = (newSearch = search, newCategory = category) => {
    onFilter({ search: newSearch, category: newCategory });
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 mb-8 w-full">
      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => {
          const val = e.target.value;
          setSearch(val);
          handleFilterChange(val, category);
        }}
        className="w-full md:w-64 text-rugero-muted placeholder:text-rugero-muted/70"
      />

      {/* Category Dropdown */}
      <Select
        value={category}
        onValueChange={(val) => {
          setCategory(val);
          handleFilterChange(search, val);
        }}
      >
        <SelectTrigger className="w-full md:w-48 text-rugero-muted">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterBar;
