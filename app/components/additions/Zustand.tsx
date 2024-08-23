import { create } from "zustand";
import sanityQuery from "@/app/api/sanityQuery";

const useSearchStore = create((set) => ({
  searchQuery: "", // Initial search query
  filteredPosts: [], // Initial list of filtered posts
  setSearchQuery: (query: any) => set({ searchQuery: query }), // Action to update search query
  setFilteredPosts: (posts: any) => set({ filteredPosts: posts }), // Action to update filtered posts
}));
export default useSearchStore