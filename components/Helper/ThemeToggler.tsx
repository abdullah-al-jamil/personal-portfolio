"use client";
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react'

const ThemeToggler = () => {
  const [mounted, setMounted] = React.useState(false);

  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const mountCehck = () => {
      setMounted(true);
    }
    mountCehck();
  }, []);

  if (!mounted) {
    return null;
  } 

  const currentTheme = theme === 'system' ? systemTheme : theme;


  return <button className='p-2 transition w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700' onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
    {currentTheme === 'dark' ? '🌞' : '🌜'}
  </button>
}

export default ThemeToggler