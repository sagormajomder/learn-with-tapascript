function GeneratedJoke({ jokeData }) {
  // console.log(jokeData);
  if (typeof jokeData === "string") {
    return (
      <div className="rounded-md bg-red-300 p-6 text-red-900">{jokeData}</div>
    );
  }
  const { type, setup, punchline } = jokeData;
  let fullSetup = setup;
  if (type === "knock-knock") {
    fullSetup = setup
      .split("\n")
      .map((st) => <p key={crypto.randomUUID()}>{st}</p>);
  }
  return (
    <div className="space-y-2">
      <p className="text-center">
        Selected Joke Type: <strong>{type.toUpperCase()}</strong>
      </p>
      <div className="rounded-md bg-green-300 p-6 text-green-900">
        <div>{fullSetup}</div>
        <p className="text-lg font-bold">{punchline}</p>
      </div>
    </div>
  );
}

export default GeneratedJoke;
