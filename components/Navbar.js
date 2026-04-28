import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-8 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold text-blue-900">De Standaard <span className="font-light text-gray-400">| Analyse</span></Link>
        <div className="space-x-6 font-medium text-gray-600">
          <Link href="/artikel1" className="hover:text-blue-600">AI-Slop</Link>
          <Link href="/artikel2" className="hover:text-blue-600">Vibecoding</Link>
          <Link href="/artikel3" className="hover:text-blue-600">Amodei</Link>
        </div>
      </div>
    </nav>
  );
}