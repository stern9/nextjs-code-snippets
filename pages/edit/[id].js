import Head from "next/head";
import { getSnippetById } from "../../utils/Fauna";
import SnippetForm from "../../components/SnippetForm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home({ snippet }) {
  return (
    <div>
      <Head>
        <title>Edit Snippet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="max-w-lg mx-auto pt-2 pb-4">
        <h1 className="text-red-100 text-2xl mb-4">Edit Snippet</h1>
        <SnippetForm snippet={snippet} />
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const id = context.params.id;
    const snippet = await getSnippetById(id);
    return {
      props: { snippet },
    };
  } catch (error) {
    console.error(error);
    context.res.statusCode = 302;
    context.res.setHeader("Location", `/`);
    return { props: {} };
  }
}
