import { useRecoilState } from "recoil";

import { useFetchWrapper } from "src/_helpers";
import { authAtom } from "src/_state";

export { useUserActions };

function useUserActions() {
  const fetchWrapper = useFetchWrapper();
  const [auth, setAuth] = useRecoilState(authAtom);

  return {
    logout,
    updateAuth,
    isUserExists,
    isLoggedIN,
    whitelistUser,
  };

  function isLoggedIN() {
    return !!auth?.token;
  }

  function updateAuth(value: any) {
    setAuth((currentValue) => {
      return {
        ...currentValue,
        ...value,
      };
    });
  }

  function whitelistUser(data: any) {
    return fetchWrapper.post("whitelist", data);
  }

  function isUserExists(wallet: string) {
    return fetchWrapper.get(`user?userWallet=${wallet}`);
  }

  function logout() {
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem("user");
    setAuth(null);
    // history.push("/account/login");
  }
}
