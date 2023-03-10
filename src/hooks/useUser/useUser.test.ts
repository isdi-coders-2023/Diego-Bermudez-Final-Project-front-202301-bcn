import { act, renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";
import Wrapper from "../../mocks/Wrapper";
import { logInUserActionCreator } from "../../store/features/userSlice/userSlice";
import { UserLoginCredentials, UserStateStructure } from "../../types";
import { CustomTokenPayload } from "./types";
import useUser from "./useUser";

const moduleName = "../../store/hooks";

const mockedToken = "Whoah!legendofdragoon";
let loggedStatus = false;

const mockedTokenPayload: CustomTokenPayload = {
  id: "isdi",
  email: "di3boss@gmail.com",
  username: "di3boss",
};

const mockedUserCredentials: UserLoginCredentials = {
  username: "di3boss",
  password: "123456789",
};

const mockedUser: UserStateStructure = {
  username: "di3boss",
  token: mockedToken,
  isLogged: loggedStatus,
};

const mockedDispatcher = jest.fn();

jest.mock(moduleName, () => ({
  ...jest.requireActual(moduleName),
  useAppDispatch: () => mockedDispatcher,
}));

jest.mock("jwt-decode", () => jest.fn());

describe("Give the useUser custom hook", () => {
  describe("When its 'logInUser' function is called with user 'di3boos' and password '123456789'", () => {
    test("Then it should dispatch the action of log in the user with that credentials", async () => {
      const {
        result: {
          current: { logInUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockedTokenPayload
      );

      await act(async () => logInUser(mockedUserCredentials));

      expect(mockedDispatcher).toHaveBeenCalledWith(
        logInUserActionCreator(mockedUser)
      );
    });
  });
});
