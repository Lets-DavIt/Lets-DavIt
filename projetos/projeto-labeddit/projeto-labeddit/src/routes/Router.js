import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "../pages/Error/Error";
import Feed from "../pages/Feed/Feed";
import Login from "../pages/Login/Login";
import Post from "../pages/Post/Post";
import Register from "../pages/Register/Register";

const Router = ({ button, setButton, rightButtonText, setRightButtonText }) => {

    return (
        <div>
            <BrowserRouter>

                <Routes>

                    <Route index element={ < Login rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} /> } />
                    <Route path="feed/:id/:index" element={ 
                        < Feed
                            button={button} 
                            setButton={setButton} 
                            rightButtonText={rightButtonText} 
                            setRightButtonText={setRightButtonText} 
                        /> } 
                    />
                    <Route path="post" element={ 
                        < Post  
                            rightButtonText={rightButtonText} 
                            setRightButtonText={setRightButtonText} 
                        /> } 
                    />
                    <Route path="register" element={ < Register rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} /> } />
                    <Route path="*" element={ < Error /> } />

                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Router;