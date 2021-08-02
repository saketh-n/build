import { Link } from "react-router-dom";

export default function Header(props) {
  const { pageName, mode } = props;
  const linkStyle = (linkName) => {
    const sharedStyle = "font-sans mr-8";
    if (mode === "dark") {
      if (pageName === linkName) {
        return "text-gray-700 " + sharedStyle;
      }
      return "text-gray-400 " + sharedStyle + " hover:text-gray-700";
    } else if (mode === "light") {
      if (pageName === linkName) {
        return "text-white " + sharedStyle;
      }
      return "text-gray-200 " + sharedStyle + " hover:text-white";
    }
  };
  return (
    <header className="pt-8 flex justify-center flex-row w-88 pl-8">
      <Link to="/" className={linkStyle("Home")}>
        Home
      </Link>
      <Link to="/how-it-works" className={linkStyle("How It Works")}>
        How It Works
      </Link>
    </header>
  );
}
