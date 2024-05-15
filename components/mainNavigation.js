import Link from "next/link";
import Image from "next/image";
import loogo from "@/assets/logo.png";
import classes from "./mainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={loogo} alt="A plate of food logo." priority />
        <p>Next Level Food</p>
      </Link>
      <nav>
        <ul className={classes.list}>
          <li className={classes.li}>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li className={classes.li}>
            <Link href="/community">Foodies Communities</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
