const initialState = {
  score: 0,
  lives: 5,
  guess: "answer",
  guessed: [],
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
    case "setGuessed":
      return { ...state, guessed: [...state.guessed, action.payload] };
    default:
      throw new Error("Unkown Action Type.");
  }
}

export { initialState, reducer };
