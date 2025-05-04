function JokeForm({ jokeType, setJokeType, setJokeData }) {
  function handleJokeType(e) {
    setJokeType((pre) => ({ ...pre, type: e.target.value }));
    setJokeData({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setJokeType((pre) => ({ ...pre, type: e.target[0].value }));
    setJokeData({});
  }
  return (
    <form className="mb-2 text-center" onSubmit={handleSubmit}>
      <div className="mb-2 space-x-5">
        <label htmlFor="category">Please select joke type:</label>
        <select
          name="category"
          id="category"
          value={jokeType.type}
          onChange={handleJokeType}
        >
          <option value="">---Select Type---</option>
          <option value="general">General</option>
          <option value="programming">Programming</option>
          <option value="knock-knock">Knock-knock</option>
        </select>
      </div>
      <button
        type="submit"
        className={`cursor-pointer rounded-sm bg-[#ffc078] px-3 py-2 font-semibold`}
      >
        Get new Joke
      </button>
    </form>
  );
}

export default JokeForm;
