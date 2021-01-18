import Link from "next/link";

export default function Intro() {
  return (
    <div className="text-center">
      <div className="my-12 mx-auto">
        <h1 className="text-red-100 text-2xl">Common code snippets used</h1>
        <p className="text-red-200">
          Document and browse snippets used every day by developers in Digitas
          Studio.
        </p>
        <Link href="/new">
          <a className="mt-3 inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Create a Snippet!
          </a>
        </Link>
      </div>
    </div>
  );
}
