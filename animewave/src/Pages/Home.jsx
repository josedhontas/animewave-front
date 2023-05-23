import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import AnimeCard from '../Components/AnimeCard';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { Skeletons } from '../Components/Skeletons';

export default function Home() {

    const [animes, setAnimes] = useState([])
    useEffect(() => {
        getAnimes();

    }, [])
    const getAnimes = () => {
        axios
            .get("https://api.animewave.ninja/animes")
            .then((res) => setAnimes(res.data))
            .catch((err) => console.log(err))
    }

    const animeFilter = (titulo) => {
        var filteredAnimes = [];

        if (titulo === "") {
            getAnimes();
        }
        const lowercaseTitulo = titulo.toLowerCase(); // Converter para minúsculas

        for (var i in animes) {
            const lowercaseAnimeTitulo = animes[i].titulo.toLowerCase(); // Converter para minúsculas

            if (lowercaseAnimeTitulo.includes(lowercaseTitulo)) {
                filteredAnimes.push(animes[i]);
            }
        }

        setAnimes(filteredAnimes);
    };

    return (
        <div>
            <Navbar animeFilter={animeFilter} />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {animes.length === 0 ? <Skeletons /> :
                        animes.map((anime) => (
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <AnimeCard titulo={anime.titulo} descricao={anime.descricao} urlImagem={anime.urlImagem} />
                            </Grid>

                        ))
                    }

                </Grid>
            </Container>
        </div>
    )
}
