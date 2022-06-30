import React from 'react';
import { BrowserRouter, Route, Routes ,HashRouter} from 'react-router-dom';

import IndexPage from './Pages/IndexPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ManufactruesPage from './Pages/ManufactruesPage';
import CommonLayout from './Pages/CommonLayout';
import SearchPage from './Pages/SearchPage';


export default function AppRouter() {
    return (
        <HashRouter>

            <Routes>
                <Route path="/" element={<CommonLayout />}>
                    <Route index element={<IndexPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>

                <Route path="*" element={<div>404 no found</div>}></Route>

            </Routes>

        </HashRouter>
    )
}