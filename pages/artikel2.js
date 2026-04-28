import Layout from '../components/Layout';

export default function Artikel2() {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto py-16 px-6">
        <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Coding</span>
        <h1 className="text-5xl font-serif font-bold mt-4 mb-8 leading-tight">
          Vibecoding: je eigen apps in minuten
        </h1>
        
        <div className="bg-emerald-50 p-6 rounded-lg mb-10 border-l-4 border-emerald-500">
          <p className="text-emerald-900 font-medium italic">
            "Letterlijk zonder een lijn code te schrijven, of zelfs maar te lezen."
          </p>
        </div>

        <div className="text-slate-800 leading-8 space-y-6">
          <p>
            Het woord van 2026 is 'vibecoding'. AI-modellen zoals Claude, Gemini en ChatGPT zijn inmiddels zo betrouwbaar dat je zonder voorkennis kunt programmeren.
          </p>
          <h2 className="text-2xl font-bold text-slate-900">Van Kladblok naar VS Code</h2>
          <p>
            Dominique Deckmyn legt uit hoe hij met tools als Codex en Vercel apps bouwt. Het gaat niet meer om de syntax, maar om de 'vibe' en de instructies die je geeft.
          </p>
        </div>
      </article>
    </Layout>
  );
}