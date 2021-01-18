import Head from "next/head";
import SnippetForm from "../components/SnippetForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create New Snippet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="max-w-lg mx-auto pt-2 pb-4">
        <h1 className="text-red-100 text-2xl mb-4">New Snippet</h1>
        <SnippetForm />
      </main>
      <Footer />
    </div>
  );
}
