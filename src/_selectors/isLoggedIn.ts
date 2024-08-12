import { selector, useRecoilValue } from "recoil";
import { authAtom } from "src/_state";

const isLoggedInSelector = selector({
  key: "isLoggedIn",
  get: ({ get }) => {
    const auth = get(authAtom);
    return !!auth?.token;
  },
});

export { isLoggedInSelector };
