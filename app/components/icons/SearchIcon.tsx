import React from 'react'

const SearchIcon = ({ setIsModalOpen }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 dark:text-gray-300 cursor-pointer"
      onClick={() => setIsModalOpen(true)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1115.75 7.5a7.5 7.5 0 011.5 9.15l4.35 4.35z"
      />
    </svg>
  );
};

export default SearchIcon