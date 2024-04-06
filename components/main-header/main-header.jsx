"use client";
import React from "react";
import logoImage from "@/assets/logo.png";
import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
const MainHeader = () => {
  const pathName = usePathname();
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image
          priority
          width="200"
          height="100"
          src={logoImage?.src}
          alt="Food-logo"
        />
        Next Level food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              className={pathName?.startsWith("/meals") ? classes.active : ""}
              href="/meals"
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName?.startsWith("/community") ? classes.active : ""
              }
              href="/community"
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
