import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  const artikels = [
    { id: 1, title: "AI-Slop op Social Media", tag: "Media", color: "text-blue-600" },
    { id: 2, title: "De opkomst van Vibecoding", tag: "Tech", color: "text-emerald-600" },
    { id: 3, title: "Dario Amodei vs Hegseth", tag: "Politiek", color: "text-red-600" }
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-serif font-bold mb-12">Laatste Analyses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {artikels.map((art) => (
            <Link key={art.id} href={`/artikel${art.id}`} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md transition-all h-full flex flex-col">
                <span className={`${art.color} text-xs font-bold uppercase tracking-widest`}>{art.tag}</span>
                <h3 className="text-xl font-bold mt-4 group-hover:text-blue-600 transition-colors flex-grow">{art.title}</h3>
                <span className="mt-6 text-sm font-semibold text-gray-400 group-hover:text-gray-900">Lees meer &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}