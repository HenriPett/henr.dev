import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios"
import styled from "styled-components";

function DarkMode() {
  const [mode, setMode] = React.useState("light");

  React.useEffect(() => {
    const theme = window.localStorage.getItem("__theme__");
    if (theme) {
      setMode(() => theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      setMode((m) => (m === "light" ? "dark" : "light"));
      window.localStorage.setItem("__theme__", mode);
    }
  }, []);

  const onClick = () => {
    setMode((m) => {
      const newTheme = m === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark");
      window.localStorage.setItem("__theme__", newTheme);

      return newTheme;
    });
  };

  return (
    <button
      type="button"
      aria-label="Theme toggle"
      className="theme-toggle"
      onClick={onClick}
    ></button>
  );
}

// const GetPhrase = () => {
//   const [text, setText] = useState()
//   const [author, setAuthor] = useState()

//   const generate_random_num = () => {
//     return Math.floor(Math.random() * 1643)
//   }

//   useEffect(() => {
//     const number = generate_random_num()
//     axios.get("https://type.fit/api/quotes")
//     .then(response => {
//       setText(response.data[number].text)
//       setAuthor(response.data[number].author)
//     })
//   }, [])

//   return (
//     <div className="contentWrapper">
//       "{text}" {author}
//     </div>
//   )
// }

const Header = () => (
  <header>
    <small />
    <DarkMode />
  </header>
);

export default Header;
