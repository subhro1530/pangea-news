// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          Your Logo
        </Link>
      </div>

      <div className="nav-links">
        <Link href="/">
          Home
        </Link>
        <Link href="/world">
          World
        </Link>
        <Link href="/politics">
          Politics
        </Link>
        <Link href="/business">
          Business
        </Link>
        <Link href="/technology">
          Technology
        </Link>
        <Link href="/sports">
          Sports
        </Link>
      </div>

      <div className="register-icons">
        <i className="fas fa-user-plus"></i>
        <i className="fas fa-sign-in-alt"></i>
      </div>
    </nav>
  );
};

export default Navbar;
