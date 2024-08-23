"use client";
import React, { useEffect, useRef, useState } from "react";
import useSearchStore from "./Zustand";
import SearchIcon from "../icons/SearchIcon";
import ClearIcon from "../icons/ClearIcon";
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
    setSearchQuery("")
    setIsModalOpen(false)
  }
  return (
    <>
      <SearchIcon setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div
            ref={modalRef}
            className="absolute top-0 w-[90vw] sm:w-[50vw] h-[80vh] bg-gray-300 dark:bg-gray-700 p-3 sm:p-6 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="w-full mb-4">
              <div className="relative p-2">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type something..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:text-2xl text-xl pl-4 pr-16 sm:py-2 py-2 dark:border-gray-700 bg-gray-400 dark:bg-gray-900 text-gray-900 dark:text-gray-400 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none"
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
            <div className="overflow-y-auto h-[calc(100%-3rem)]">
              <div className="h-full rounded-md p-2">
                {/* Content goes here */}
                <ul>
                  {searchQuery !== "" ?
                    filteredPosts.map((post: any) => {
                      return (
                        <Link onClick={handleSearch} href={`/blog/${post.slug.current}`} key={post.slug}>
                          <h1
                            className={` text-slate-700 dark:text-slate-100 text-lg sm:text-xl font-bold pt-3 sm:pt-6 pb-2`}
                          >
                            {post.title}
                          </h1>
                          <ul className="text-blue-600 flex gap-3 text-sm">
                            {post.tags.map((tag: any, index: any) => (
                              <li key={index}>{tag}</li>
                            ))}
                          </ul>
                        </Link>
                      );
                    }) : (<h1 className="text-center pt-6">Nothing yet  :(</h1>)}
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
