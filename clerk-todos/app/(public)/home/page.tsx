import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-100 selection:text-zinc-950">
      <Navbar />
      <main className="pt-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 bg-linear-to-b from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            Welcome to clerk-todos
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            The minimalist todo app for power users. Built from scratch to master Clerk webhooks.
          </p>
        </div>
      </main>
    </div>
  );
}
