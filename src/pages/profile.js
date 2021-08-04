import { useParams, useHistory } from "react-router-dom";

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

export default function Profile() {
  const history = useHistory();

  const pictures = [
    "https://pbs.twimg.com/profile_images/1365771430932185095/zhQD8o7Q_400x400.jpg",
    "https://i.pinimg.com/736x/9e/77/5e/9e775ed46d1bab1fb7e874b1fad08be2.jpg",
    "https://static.wikia.nocookie.net/unordinary6344/images/b/bc/Arlo4.png",
    "https://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png",
    "https://i.pinimg.com/originals/98/19/a2/9819a2f68bf442a2f7010753ab635e23.jpg",
  ];

  const randImg = () => {
    const picNum = Math.floor(Math.random() * pictures.length);
    return pictures[picNum];
  };

  const goToProject = () => {
    history.push("https://github.com/saketh-n/build");
  };

  const { username } = useParams();
  //TODO: Return something else if user authenticated
  return (
    <div style={divStyle}>
      <div className="pt-16"></div>
      <div className="bg-blue-200 px-4 pb-4 pt-16 mx-auto rounded-md bg-opacity-40 bg-clip-padding w-4/5 lg:w-1/2 md:w-2/3 sm:w-3/4">
        <div className="flex flex-row justify-center">
          <div>
            <h1 className="text-white font-sans text-6xl text-center px-8">
              {username}
            </h1>
            <h1 className="text-white font-sans text-4xl text-center">
              🔥 {100 /*TODO: Scrapes from database*/}
            </h1>
          </div>
          <img
            src={randImg() /*TODO: Gets the image from the database */}
            alt="Ijin"
            className="w-32 h-32 rounded-md"
          />
        </div>
        <div className="mt-8 bg-gray-400 rounded-lg lg:mx-16">
          <h1 className="text-white font-sans text-xl text-center py-4">
            Main Project: {"DubsTech Build" /*TODO: Scrapes from database*/}
          </h1>
          <h1 className="text-white font-sans text-xl px-8">
            Desc: {"" /*TODO: Scrapes from database*/} A Platform that
            incentivizes people to make something every day. Includes an
            optional competitive element for those with such an inclination.
          </h1>
          <button
            onClick={goToProject}
            className="my-4 mx-8 bg-green-300 py-2 rounded-md font-sans px-16 text-gray-700 hover:text-gray-200 hover:shadow-lg focus:outline-none focus:shadow-none"
          >
            Link
          </button>
        </div>
        <h1 className="text-white text-center font-sans text-xl px-8 mt-8 mb-24">
          🥇 x n 🥈 x m 🥉 x k
        </h1>
      </div>
    </div>
  );
}
