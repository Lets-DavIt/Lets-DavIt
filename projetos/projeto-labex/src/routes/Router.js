import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import HomePage from "../pages/HomePage/HomePage.js";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage.js";
import LoginPage from "../pages/LoginPage/LoginPage";
import TripDetailPage from "../pages/TripDetailsPage/TripDetailsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export const Router = () => {

    return (
        <div>
            <BrowserRouter>

                <Routes>

                    <Route index element={ < HomePage /> } />
                    <Route path="login" element={ < LoginPage /> } />
                    <Route path="adminHome" element={ < AdminHomePage  /> } />
                    <Route path="application" element={ < ApplicationFormPage  /> } />
                    <Route path="createTrip" element={ < CreateTripPage  /> }/>
                    <Route path="listTrips" element={ < ListTripsPage  /> }/>
                    <Route path="tripDetail" element={ < TripDetailPage  /> }/>

                </Routes>

            </BrowserRouter>
        </div>
    )
}