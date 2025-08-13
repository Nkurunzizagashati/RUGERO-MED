import { useState } from 'react';

const NewsFilterBar = ({ categories, onFilter }) => {
	const [search, setSearch] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('All');

	const handleSearchChange = (e) => {
		const value = e.target.value;
		setSearch(value);
		onFilter({ search: value, category: selectedCategory });
	};

	const handleCategoryChange = (e) => {
		const value = e.target.value;
		setSelectedCategory(value);
		onFilter({ search, category: value });
	};

	return (
		<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
			<input
				type="text"
				placeholder="Search news..."
				className="border px-4 py-2 rounded-md w-full sm:w-1/2"
				value={search}
				onChange={handleSearchChange}
			/>
			<select
				className="border px-4 py-2 rounded-md"
				value={selectedCategory}
				onChange={handleCategoryChange}
			>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</div>
	);
};

export default NewsFilterBar;
