import Link from "next/link";

export default function ArticleCard({ title, description, link }) {
  return (
    <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4 text-gray-600">{description}</p>
      <Link href={link} className="text-blue-500 font-semibold">
        Lees artikel →
      </Link>
    </div>
  );
}