import React, { useState } from 'react'

const Navbar = ({ setCategory }) => {
    const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Nation", category: "nation" },
    { label: "Business", category: "business" },
    { label: "Technology", category: "technology" },
    { label: "Entertainment", category: "entertainment" },
    { label: "Sports", category: "sports" },
    { label: "Health", category: "health" },
    { label: "Science", category: "science" }
];

  const handleClick = (category) => {
    setCategory(category);
    setIsOpen(false); // close menu on item click
  };
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="md:text-xl text-sm rounded-xl text-black p-2 font-bold bg-white">News App</h1>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <li key={item.category}>
              <div className="hover:text-gray-300 cursor-pointer" onClick={() => handleClick(item.category)}>
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu (visible only when isOpen === true) */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2">
          {navItems.map(item => (
            <li key={item.category}>
              <div className="block px-4 py-2 text-white hover:bg-gray-700 cursor-pointer" onClick={() => handleClick(item.category)}>
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
