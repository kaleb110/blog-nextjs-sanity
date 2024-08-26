"use client";
import React, { useEffect, useRef, useState } from "react";
import useSearchStore from "./additions/Zustand";
import SearchIcon from "./icons/SearchIcon";
import ClearIcon from "./icons/ClearIcon";
import Link from "next/link";

const Search = ({ posts }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchQuery, setSearchQuery, setFilteredPosts, filteredPosts }: any =
    useSearchStore();

  useEffect(() => {
    const newPosts = posts.filter((item: any) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(newPosts);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  const handleSearch = () => {
    setSearchQuery("");
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchIcon setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 transition-opacity duration-300 ease-out opacity-100">
          <div
            ref={modalRef}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90vw] sm:w-[50vw] h-[80vh] bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg overflow-hidden animate-slideIn"
          >
            <div className="w-full mb-4">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type something..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:text-2xl text-xl pl-4 pr-16 sm:py-2 py-2 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none "
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-3 flex items-center pr-3"
                  >
                    <ClearIcon />
                  </button>
                )}
              </div>
            </div>
            <div className="overflow-y-auto h-full px-2">
              <div className="h-full rounded-md p-2">
                {/* Content goes here */}
                <ul>
                  {searchQuery !== "" ? (
                    filteredPosts.map((post: any) => (
                      <Link
                        onClick={handleSearch}
                        href={`/blog/${post.slug.current}`}
                        key={post.slug}
                        className="block py-4 px-4 mb-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:dark:bg-gray-600 rounded-sm transition-all duration-200"
                      >
                        <h1
                          className={`text-gray-900 dark:text-gray-100 text-lg sm:text-xl font-bold`}
                        >
                          {post.title}
                        </h1>
                        <ul className="text-blue-600 dark:text-blue-400 flex gap-3 text-sm mt-2">
                          {post.tags.map((tag: any, index: any) => (
                            <li key={index}>#{tag}</li>
                          ))}
                        </ul>
                      </Link>
                    ))
                  ) : (
                    <h1 className="text-center pt-6 text-gray-600 dark:text-gray-400">
                      Nothing Here :(
                    </h1>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
