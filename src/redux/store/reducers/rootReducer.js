const initState = {
  users: [
    { id: 1, name: "diep" },
    { id: 2, name: "tuan" },
  ],
};
const rootReducer = (state = initState, action) => {
  //   switch (action.type) {
  //     case "DELETE_USER":
  //       const userDelete = action.payload;
  //       let users = state.users;
  //       users = users.filter((user) => user.id != userDelete.id);
  //       return { ...state, users };
  //     case "CREATE_USER":
  //       let newUser = action.payload;

  //       return { ...state, users: [...state.users, newUser] };

  //     default:
  //       return state;
  //   }

  return state;
};

export default rootReducer;
