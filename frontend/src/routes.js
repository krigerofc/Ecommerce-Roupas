import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Teste from "./pages/Teste";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/teste" element={<Teste/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;