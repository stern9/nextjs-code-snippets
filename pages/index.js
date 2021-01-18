import Head from "next/head";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Snippet from "../components/Snippet";
import useSWR from "swr";
import Footer from "../components/Footer";

export default function Home() {
  const { data: snippets, mutate } = useSWR("/api/snippets");

  return (
    <div>
      <Head>
        <title>Code Snippets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="max-w-2xl mx-auto px-8">
        <Intro />
        {snippets &&
          snippets.map((snippet) => (
            <Snippet
              key={snippet.id}
              snippet={snippet}
              snippetDeleted={mutate}
            />
          ))}
      </main>
      <Footer />
    </div>
  );
}
