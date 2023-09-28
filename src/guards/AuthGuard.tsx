import { PATH } from "constant";
import { useAuth } from "hooks";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthGuard = (props: any) => {
  const { accessToken } = useAuth();
  if (!accessToken) {
    return <Navigate to={PATH.login} />;
  }
  return <>{props.children}</>;
};
