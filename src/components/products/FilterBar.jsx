import { useState } from 'react';

const FilterBar = ({ categories, onFilter }) => {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('All');

	const handleFilter = () => {
		onFilter({ search, category });
	};

	return (
		<div className="flex flex-col md:flex-row gap-4 mb-6">
			<input
				type="text"
				placeholder="Search products..."
				className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<select
				className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4"
				value={category}
				onChange={(e) => setCategory(e.target.value)}
			>
				<option value="All">All Categories</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>

			<button
				className="bg-rugero-primary text-white px-6 py-2 rounded-lg hover:bg-rugero-accent"
				onClick={handleFilter}
			>
				Filter
			</button>
		</div>
	);
};

export default FilterBar;
