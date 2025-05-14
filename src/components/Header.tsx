
import React from 'react';
import { FlameKindling } from 'lucide-react'; // Example icon

const Header = () => {
  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center space-x-2">
          <FlameKindling className="h-8 w-8 text-primary" />
          <span className="font-poppins text-2xl font-bold text-charcoal-gray">
            TikiWash
          </span>
        </a>
        <nav>
          <a
            href="#kickstarter-link" // Placeholder, user to provide actual Kickstarter link
            className="bg-secondary hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-150 ease-in-out font-poppins"
            target="_blank"
            rel="noopener noreferrer"
          >
            Back on Kickstarter
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
