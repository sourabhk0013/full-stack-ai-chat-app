"use client";

import React, { useState, useEffect, createContext, useContext } from "react";

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) {
      setDarkMode(saved === "true");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <html lang="en">
        <head>
          <title>AI Chat App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
