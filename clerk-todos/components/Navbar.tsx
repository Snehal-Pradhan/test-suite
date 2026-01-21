import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-zinc-100 italic tracking-tighter">
              clerk-todos
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-zinc-950 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
