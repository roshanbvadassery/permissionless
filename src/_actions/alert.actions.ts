import { useSetRecoilState, useResetRecoilState } from "recoil";

import { alertAtom } from "src/_state";

export { useAlertActions };

function useAlertActions() {
  const setAlert: any = useSetRecoilState(alertAtom);
  const resetAlert = useResetRecoilState(alertAtom);

  return {
    success: (message: any) => setAlert({ type: "alert-success", message }),
    error: (message: any) => setAlert({ type: "alert-danger", message }),
    clear: resetAlert,
  };
}
