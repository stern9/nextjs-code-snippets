import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 max-w py-2">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Link href="/">
          <img
            className="h-12 w-auto cursor-pointer"
            src="http://by.prodigious.com/lbiqa/assets/images/prodigious-logo.png"
            alt="Prodigious"
          />
        </Link>
      </div>
    </nav>
  );
}
