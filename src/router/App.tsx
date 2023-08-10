import { Container, ProtectedRoutes } from "@/common";
import { useAppContext } from "@/context";
import { LoginPage } from "@/features";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const App = () => {

 const { profile } =  useAppContext();

  const isAlowed = profile !== null ? true : false;


  return (
    <BrowserRouter>
        <Container>
            <Routes>
                <Route path="/auth/login" element={<LoginPage/>} />

                <Route path="/" element={<ProtectedRoutes isAllowed={isAlowed}/>}>

                </Route>
                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>



        </Container>
    </BrowserRouter>
  )
}
