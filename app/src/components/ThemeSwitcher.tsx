"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
    console.log('ThemeSwitcher mounted, theme:', theme, 'systemTheme:', systemTheme, 'currentTheme:', currentTheme);
  }, [theme, systemTheme, currentTheme]);

  if (!mounted) {
    return (
      <div className="hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md p-2 border border-neutral-200 dark:border-neutral-700">
        <div className="w-6 h-6 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        console.log('Theme button clicked! Current theme:', currentTheme);
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        console.log('Setting theme to:', newTheme);
        setTheme(newTheme);
      }}
      className="hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full p-1 border border-neutral-200 dark:border-neutral-700 transition-colors "
      title={currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait">
        {currentTheme === "dark" ? (
          <motion.svg
            key="sun"
            layoutId="theme-icon"
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brightness-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M12 5l0 .01" />
            <path d="M17 7l0 .01" />
            <path d="M19 12l0 .01" />
            <path d="M17 17l0 .01" />
            <path d="M12 19l0 .01" />
            <path d="M7 17l0 .01" />
            <path d="M5 12l0 .01" />
            <path d="M7 7l0 .01" />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            layoutId="theme-icon"
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
            <path d="M19 11h2m-1 -1v2" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeSwitcher;
