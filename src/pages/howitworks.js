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

export default function How() {
  const history = useHistory();
  return (
    <div style={divStyle}>
      <Header pageName={"How It Works"} mode={"light"} />
      <div className="mt-32 ml-12 mr-16 flex flex-row justify-between ">
        <div className="bg-blue-200 p-4 mx-8 rounded-md bg-opacity-40 bg-clip-padding">
          <h1 className="text-gray-200 text-3xl text-center my-8 pt-16">
            Build Habits.
          </h1>
          <h1 className="text-gray-200 text-6xl text-center my-16">👑</h1>
          <h1 className="text-xl text-gray-100 text-justify my-8 px-12 pb-16">
            Get motivated to make something every day with a simple streak
            system tracking how many consecutive days you've worked on
            something.
          </h1>
        </div>
        <div className="bg-blue-200 p-4 mx-8 rounded-md bg-opacity-40 bg-clip-padding">
          <h1 className="text-gray-200 text-3xl text-center my-8 pt-16">
            Compete
          </h1>
          <h1 className="text-gray-200 text-6xl text-center my-16">⚔️</h1>
          <h1 className="text-xl text-gray-100 text-justify my-8 px-12 pb-16">
            Test and further hone your technical and creative skills with weekly
            contests where contestants can vote on and give feedback to
            submitted projects.
          </h1>
        </div>
      </div>
    </div>
  );
}
