import { Container, ProtectedRoutes } from "@/common";
import { LoginPage, Students } from "@/features";
import { useAuthStore } from "@/store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const App = () => {

  const isAuthenticated = useAuthStore((state)=>state.isAuth);
  
  return (
    <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/auth/login" element={<LoginPage/>} />

            <Route path="/" element={<ProtectedRoutes isAllowed={isAuthenticated}/>}>
              <Route index element={<Students/>} />
            </Route>

            <Route path="/*" element={<Navigate to="/"/>}/>
          </Routes>
        </Container>
    </BrowserRouter>
  )
}
