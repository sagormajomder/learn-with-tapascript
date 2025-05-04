import { useEffect, useState } from "react";
import GeneratedJoke from "./components/GeneratedJoke";
import Header from "./components/Header";
import JokeForm from "./components/JokeForm";

function App() {
  const [jokeType, setJokeType] = useState({ type: "general" });
  const [jokeData, setJokeData] = useState({});

  useEffect(
    function () {
      async function getJoke(type) {
        try {
          const res = await fetch(
            `https://official-joke-api.appspot.com/jokes/${type}/random`,
          );
          // console.log(res);

          if (!res.ok) throw new Error(`Failed to fetch joke`);
          const joke = await res.json();
          // console.log(joke);

          if (joke.length === 0)
            throw new Error(
              `Jokes are lost their way! Please help to find their way by trying again; ${res.status}`,
            );
          setJokeData(joke[0]);
        } catch (error) {
          setJokeData(error.message);
        }
      }

      getJoke(jokeType.type);
    },
    [jokeType],
  );

  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-3 px-6 pb-6">
        <JokeForm
          jokeType={jokeType}
          setJokeType={setJokeType}
          setJokeData={setJokeData}
        />
        {Object.keys(jokeData).length !== 0 || typeof jokeData === "string" ? (
          <GeneratedJoke jokeData={jokeData} />
        ) : (
          <p>Loading....</p>
        )}
      </main>
    </>
  );
}

export default App;
