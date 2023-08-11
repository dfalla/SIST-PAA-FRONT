import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from ".";
// import { Sidebar } from "./";
type JSXComponent = () => JSX.Element;
interface Props {
  isAllowed: boolean;
  children?: ReactElement<JSXComponent>;
  redirectTo?: string;
}

export const ProtectedRoutes = ({
  isAllowed,
  children,
  redirectTo = "/auth/login",
}: Props) => {

  console.log("isAllowed desde App", isAllowed)

  
  if (isAllowed === false) return <Navigate to={redirectTo} />;
  
  return (
    <>
      <Navbar>
        {children ? children : <Outlet />}
      </Navbar>
    </>
  )
};
