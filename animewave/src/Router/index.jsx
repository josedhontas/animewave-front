import React, { useState } from 'react';  
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import AnimeDialog from '../Components/AnimeDialog';

export default function Router() {
    const [animeData, setAnimeData] = useState();
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home setAnimeData={setAnimeData}/>} />
                <Route path='/profile' element={<Profile animeData={animeData}/>} />

            </Routes>
        </BrowserRouter>
    )
}
