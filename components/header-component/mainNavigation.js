"use client";

import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import loogo from "@/assets/logo.png";
import classes from "./mainNavigation.module.css";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
  const path = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={loogo} alt="A plate of food logo." priority />
          <p>Next Level Food</p>
        </Link>
        <nav>
          <ul className={classes.list}>
            <li className={classes.li}>
              <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
              >
                Browse Meals
              </Link>
            </li>
            <li className={classes.li}>
              <Link
                href="/community"
                className={
                  path.startsWith("/community") ? classes.active : undefined
                }
              >
                Foodies Communities
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
