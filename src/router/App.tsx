import { Container, ProtectedRoutes } from "@/common";
import { ExportStudents, LoginPage, Payments, Schedules, AllStudents } from "@/features";
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
              <Route index element={<AllStudents/>} />
              <Route path="/students/all" element={<AllStudents/>} />
              <Route path="/students/export" element={<ExportStudents/>} />
              <Route path="/pays" element={<Payments/>} />
              <Route path="/schedules" element={<Schedules/>} />
            </Route>

            <Route path="/*" element={<Navigate to="/"/>}/>
          </Routes>
        </Container>
    </BrowserRouter>
  )
}
