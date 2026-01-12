import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-800 h-screen">
      <h1 className="text-2xl bg-green-900 p-10">This is a Todo App</h1>
      <Link href="/sign-in">
        <button type="button" className="bg-green-800 p-5 rounded  m-5">
          sign-in
        </button>
      </Link>
      <Link href="/sign-up">
        <button type="button" className="bg-green-800 p-5 rounded  m-5">
          sign-up
        </button>
      </Link>
    </div>
  );
}
