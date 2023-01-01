import React, { Fragment } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminNavbar from './components/headers/AdminNavbar'
import { isAuthenticated } from './helpers/authentification'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Home from './pages/Home'
import Profil from './pages/Profil'

const Router = () => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated() ? (
            <Fragment>
                <AdminNavbar />
                {children}
            </Fragment>
        ) : <Navigate to="/login" />
    }

    const PublicRoute = ({ children }) => {
        return isAuthenticated() ? <Navigate to="/dashboard" /> : children
    }

    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='login' element={<PublicRoute> <Login /> </PublicRoute>} />
            <Route path='dashboard' element={<PrivateRoute> <Dashboard /> </PrivateRoute>}>
                <Route path='' element={<Profil/>}/>
                <Route path='profil' element={<Profil/>}/>
            </Route>
        </Routes>
    )
}

export default Router