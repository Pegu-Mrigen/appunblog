import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";
import Image from "next/image";


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const MenuCategories = async() => {

  const data = await getData();
  console.log(data);
  return (
    <div className={styles.categoryList}>
      
        {/* <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          Style
        </Link>
        
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travel}`}
        >
          travel
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}
        >
          food
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture}`}
        >
          culture
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion}`}
        >
          fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.coding}`}
        >
          coding
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          style
        </Link> */}

{data?.map((item) => (
          <Link
            href={`/blog?cat=${[item.slug]}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            
            {item.title}
          </Link>
        ))}
      </div>
    
  );
};

export default MenuCategories;
