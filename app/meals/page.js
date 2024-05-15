import Link from "next/link";

function meals() {
  return (
    <main>
      <h1>This is meals Page</h1>

      <p>
        <Link href="meals/item-1">Food 1</Link>
      </p>
      <p>
        <Link href="meals/item-2">Food 2</Link>
      </p>
      <p>
        <Link href="meals/item-3">Food 3</Link>
      </p>
    </main>
  );
}

export default meals;
