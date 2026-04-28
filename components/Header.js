import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <nav className="max-w-5xl mx-auto flex justify-between">
        <h1 className="font-bold">Nieuws UX Project</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/artikel1">Artikel 1</Link>
          <Link href="/artikel2">Artikel 2</Link>
          <Link href="/artikel3">Artikel 3</Link>
        </div>
      </nav>
    </header>
  );
}