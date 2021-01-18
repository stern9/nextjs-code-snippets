import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-red-600 w-full min-h-screen">
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
