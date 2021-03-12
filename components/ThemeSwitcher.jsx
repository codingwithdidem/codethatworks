import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted && (
        <div
          className="w-16 h-18 bg-purple-500 rounded-full p-1 border border-purple-400 cursor-pointer relative"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <div className="flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className={`h-5 w-5 text-gray-800 dark:text-gray-200 ${
                theme === 'light' && 'invisible'
              } ml-1`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className={`h-5 w-5 text-white dark:text-gray-200 ${
                theme === 'dark' && 'invisible'
              } `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>

          <div
            className={`bg-purple-800 w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
              theme === 'dark' && 'translate-x-7 '
            } z-10 absolute top-0.5 left-1.5`}
          />
        </div>
      )}
    </>
  );
};

export default ThemeSwitcher;
