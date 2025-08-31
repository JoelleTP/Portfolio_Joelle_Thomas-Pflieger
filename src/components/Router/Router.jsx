import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../Layout/Layout.jsx'
import Accueil from '../../pages/Accueil.jsx'
import Services from '../../pages/Services.jsx'
import ErrorPage from '../../pages/ErrorPage.jsx'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router