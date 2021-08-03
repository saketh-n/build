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

export default function SignUp() {
  return (
    <div style={divStyle}>
      <div className="pt-48 flex justify-center">
        <div className="flex flex-col bg-blue-100 bg-opacity-40 bg-clip-padding py-24 px-32 rounded-lg">
          <h1 className="text-white font-sans text-6xl text-center pb-12">
            Sign Up
          </h1>
          <input
            placeholder="Create Username"
            className="rounded-md pr-24 pl-8 py-2 my-2 focus:outline-white font-sans"
          ></input>
          <input
            placeholder="Confirm Username"
            className="rounded-md pr-24 pl-8 py-2 mt-2 mb-6 focus:outline-white font-sans"
          ></input>
          <button className="my-2 bg-green-300 py-2 rounded-md font-sans hover:text-gray-200 hover:shadow-lg focus:outline-none focus:shadow-none">
            Sign Up with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
