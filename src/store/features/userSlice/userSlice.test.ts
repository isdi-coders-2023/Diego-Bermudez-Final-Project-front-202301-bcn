import UserStructure from "../../../types";
import { logInUserActionCreator, userReducer } from "./userSlice";

describe("Given an userReducer", () => {
  const mockedInitialUserState: UserStructure = {
    username: "di3boss",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    email: "di3boss@gmail.com",
    isLogged: false,
  };

  const mockedLoggedUser: UserStructure = {
    username: "di3boss",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    email: "di3boss@gmail.com",
    isLogged: true,
  };

  describe("When it receives an user not logged in and the action to login", () => {
    test("Then it should return the user with the isLogged property as 'true'", () => {
      const loginUserAction = logInUserActionCreator(mockedInitialUserState);
      const loggedUser = userReducer(mockedInitialUserState, loginUserAction);

      expect(loggedUser).toStrictEqual(mockedLoggedUser);
    });
  });
});
