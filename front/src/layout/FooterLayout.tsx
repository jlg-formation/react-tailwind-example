import { Link } from "react-router-dom";

function FooterLayout() {
  return (
    <footer className="flex h-12 bg-gray-100 px-2 items-center justify-center">
      <Link to="/legal" className=" items-center gap-2 flex hover:underline">
        Mentions Légales
      </Link>
    </footer>
  );
}

export default FooterLayout;
