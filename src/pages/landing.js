import Header from "../components/header";
import { useHistory } from "react-router-dom";

const bgImg =
  "https://images.unsplash.com/photo-1439590379928-2969603c790d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80";
const divStyle = {
  background: `url(${bgImg}) rgba(0, 0, 0, 0.65)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  backgroundBlendMode: "multiply",
};

export default function Landing() {
  const history = useHistory();

  const handleLogin = () => {};

  const handleSignUp = () => {
    history.push("/sign-up");
  };

  return (
    <div style={divStyle}>
      <Header pageName={"Home"} mode={"light"} />
      <div className="pt-64">
        <h1 className="text-white font-sans text-6xl text-center">Build</h1>
        <h1 className="text-white font-sans text-lg text-center pt-8">
          Make something every day.
        </h1>
        <div className="flex justify-center">
          <button
            className="mt-8 text-gray-700 font-sans text-lg bg-blue-300 rounded-full py-3 px-6 hover:text-gray-200 hover:shadow-lg focus:outline-none focus:shadow-none"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button
            className="ml-8 mt-8 text-gray-700 font-sans text-lg bg-green-300 rounded-full py-3 px-8 hover:text-gray-200 hover:shadow-lg focus:outline-none focus:shadow-none"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
