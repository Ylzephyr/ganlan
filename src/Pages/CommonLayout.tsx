import React from 'react';

import HeadComponent from '../components/HeadComponent';
import NavComponent from '../components/NavComponent';
import FootComponent from '../components/FootComponent';
import { Outlet } from 'react-router-dom';

export default function CommonLayout() {
    return (
        <div>
            <HeadComponent />
            <NavComponent />
            <Outlet />
            <FootComponent />
        </div>
    )
}