// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="  text-black-custom shadow-md">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="logo text-3xl font-bold">
          <Link href="/" className="hover:text-black-custom">
            TA
          </Link>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="/" className="hover:text-black-custom">
                Home
              </Link>
            </li>
            <li>
              <Link href="/biography" className="hover:text-black-custom">
                Biography
              </Link>
            </li>
            <li>
              <Link href="/media" className="hover:text-black-custom">
                Media
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black-custom">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
