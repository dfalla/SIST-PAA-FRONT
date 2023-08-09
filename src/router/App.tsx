import { Container, ProtectedRoutes } from "@/common";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
        <Container>
            <Routes>
                <Route path="/auth/login" element={<h1>LoginPage</h1>} />

            </Routes>

            <Route path="/" element={<ProtectedRoutes isAllowed={false}/>}>
                
            </Route>
        </Container>
    </BrowserRouter>
  )
}
