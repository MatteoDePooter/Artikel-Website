import Layout from '../components/Layout';

export default function Artikel1() {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto py-16 px-6">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Technologie</span>
        <h1 className="text-5xl font-serif font-bold mt-4 mb-8 leading-tight text-slate-900">
          Leidt AI-slop tot de dood van sociale media?
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 leading-relaxed border-b pb-8">
          Sociale media slibben angstwekkend snel dicht met video's van mensen die niet bestaan. Dominique Deckmyn onderzoekt of we hier in 2026 nog wel naar willen kijken.
        </p>

        <div className="prose prose-lg text-slate-800 leading-8">
          <p className="mb-6">
            De grootste technologische doorbraak van 2025 was de opkomst van videogeneratoren zoals Sora en Veo. Hierdoor kan iedereen nu in enkele seconden een realistisch uitziende video maken.
          </p>
          
          <blockquote className="border-l-4 border-blue-600 pl-6 my-10 italic text-2xl text-slate-700 font-serif">
            "Vanaf het moment dat ik de indruk krijg dat een video AI-gegenereerd is, klik ik 'm weg."
          </blockquote>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">De dood van het sociale aspect</h2>
          <p className="mb-6">
            Wat precies is de sociale dimensie van kijken naar een eindeloze stroom door een computer gegenereerde video's? In die zin zien we nu de dood van sociale media.
          </p>
        </div>
      </article>
    </Layout>
  );
}