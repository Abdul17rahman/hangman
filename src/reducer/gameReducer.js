const initialState = {
  score: 0,
  lives: 5,
  guess: "",
  guessed: "",
  // - Game level -- easy, medium, hard
  level: "easy",
  // - Game status -- ready, active, finished
  status: "active",
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state };
    case "setLevel":
      return { ...state, level: action.payload };
    default:
      throw new Error("Unkown Action Type.");
  }
}

export { initialState, reducer };
