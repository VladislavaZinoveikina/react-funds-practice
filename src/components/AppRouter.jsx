import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../router";
import { publicRoutes, privateRoutes } from "../router";

const AppRouter = () => {
    const isAuth = false;

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                    />
                )}
                <Route path='/*' element={<Navigate to="/posts" replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                    />
                )}
                <Route path='/*' element={<Navigate to="/login" replace />} />
            </Routes>
    );
};

export default AppRouter;