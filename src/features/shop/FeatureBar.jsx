import { SlidersHorizontal, LayoutGrid, List } from "lucide-react";

export default function FeatureBar({
  total = 32,
  showingFrom = 1,
  showingTo = 16,
  perPage = 16,
  onPerPageChange,
  onSortChange,
}) {
  return (
    <div className="w-full bg-[#f4f0ed] py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">


        <div className="flex items-center gap-6 text-sm text-gray-700">


          <button className="flex items-center gap-2 hover:text-black transition">
            <SlidersHorizontal size={18} />
            <span>Filter</span>
          </button>

          <div className="flex items-center gap-3">
            <LayoutGrid size={18} className="cursor-pointer hover:text-black" />
            <List size={18} className="cursor-pointer hover:text-black" />
          </div>


          <div className="h-5 w-px bg-gray-300" />

     
          <span>
            Showing {showingFrom}–{showingTo} of {total} results
          </span>
        </div>


        <div className="flex items-center gap-6 text-sm text-gray-700">

    
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select
              value={perPage}
              onChange={(e) => onPerPageChange?.(Number(e.target.value))}
              className="bg-white border px-3 py-1 rounded outline-none"
            >
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={24}>24</option>
              <option value={32}>32</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span>Sort by</span>
            <select
              onChange={(e) => onSortChange?.(e.target.value)}
              className="bg-white border px-3 py-1 rounded outline-none"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}