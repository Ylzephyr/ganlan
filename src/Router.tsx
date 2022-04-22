import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import IndexPage from './Pages/IndexPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ManufactruesPage from './Pages/ManufactruesPage';
import CommonLayout from './Pages/CommonLayout';


export default function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<CommonLayout />}>
                    <Route index element={<IndexPage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='manufactrues' element={<ManufactruesPage />} />
                    <Route path='contact' element={<ContactPage />} />
                </Route>

                <Route path="*" element={<div>404 no found</div>}></Route>

                
            </Routes>

        </BrowserRouter>
    )
}