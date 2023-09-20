"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  // console.log(theme);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "light"
          ? { backgroundColor: "black" }
          : { backgroundColor: "white" }
      }
    >
      <Image src="/sun.png" alt="sun" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { right: 1, background: "#000" }
            : { left: 1, background: "#fff" }
        }
      ></div>
      <Image src="/moon.png" alt="moon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
