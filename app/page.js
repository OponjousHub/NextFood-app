import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <div>
        <p>
          <Link href="/community">this is comunity</Link>
        </p>
        <p>
          <Link href="/meals/shear">this is Shear</Link>
        </p>
        <p>
          <Link href="/meals">Meals </Link>
        </p>
      </div>
    </main>
  );
}
