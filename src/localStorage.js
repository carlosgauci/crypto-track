// Load state from local storage
export const loadState = () => {
  const storedState =
    typeof window !== "undefined" && localStorage.getItem("state");
  if (!storedState) {
    return undefined;
  }
  return JSON.parse(storedState);
};

// Save state to local storage
export const saveState = (state) => {
  const storedState = JSON.stringify(state);
  localStorage.setItem("state", storedState);
};
