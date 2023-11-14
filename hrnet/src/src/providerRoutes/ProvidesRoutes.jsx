import Home from "../pages/Home";
import ListEmploye from "../pages/ListEmploye";
import { Routes, Route } from "react-router-dom";

function ProviderRoutes() {
    return(
        <Routes>
            <Route path="/employes" element = {<ListEmploye/>}/>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Not Found</h1>} />

        </Routes>
    );
}

export default ProviderRoutes;