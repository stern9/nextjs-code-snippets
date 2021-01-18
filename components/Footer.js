const Footer = () => {
  const url = "https://github.com/stern9/nextjs-code-snippets";

  return (
    <footer className="bg-gray-900 p-4 text-center">
      <hr className="border-b m-2" />
      <div className="text-center">
        <p className="text-white">
          Made for the Digitas Studio Team by{" "}
          <a href={url} target="blank">
            &copy; stern9 😎
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
