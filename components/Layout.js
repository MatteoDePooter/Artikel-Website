import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        &copy; 2026 UX/UI Opdracht - Reactiviteit
      </footer>
    </div>
  );
}