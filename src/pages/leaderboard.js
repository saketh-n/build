import { getUserPic } from "../utils/userUtils";

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

export default function Leaderboard() {
  const getLeaderboard = () => {
    // TODO: some function to get number of users participating
    const users = 8;
    let rows = [];
    for (let i = 0; i < users; i++) {
      rows.push(getRow(i));
    }
    return rows;
  };

  const getRow = (i) => {
    // TODO: Find a better way
    const username = `user${i}`;
    return (
      <div
        className="flex flex-row justify-between px-16 text-gray-200 text-2xl pb-8"
        id={i}
      >
        <h1>{i}</h1>
        <div className="flex flex-row">
          <h1 className="px-2">user{i}</h1>
          <img
            src={
              getUserPic(username) /*TODO: Gets the image from the database */
            }
            alt="Profile Pic"
            className="w-8 h-8 rounded-md"
          />
        </div>
        <h1>project{i}</h1>
      </div>
    );
  };

  return (
    <div style={divStyle}>
      <div className="pt-16"></div>
      <div className="bg-blue-200 bg-opacity-40 bg-clip-padding w-4/5 mx-auto rounded-md pb-8">
        <h1 className="text-center text-white font-sans text-4xl py-8">
          Leaderboard
        </h1>
        <div className="flex flex-row justify-between px-16 text-gray-200 text-2xl pb-8">
          <div>
            <h1>Rank</h1>
          </div>
          <div>
            <h1>Name</h1>
          </div>
          <div>
            <h1>Project</h1>
          </div>
        </div>
        {getLeaderboard()}
      </div>
    </div>
  );
}
