'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='flex items-center text-2xl'>
      <button onClick={handleThemeToggle}>
        {theme === 'light' ? <RiMoonFill /> : <RiSunFill />}
      </button>
    </div>
  );
}
