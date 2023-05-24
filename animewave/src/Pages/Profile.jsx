import React from 'react'
import Navbar from '../Components/Navbar'
import { Typography, Container, Box, Paper } from '@mui/material'
import AnimeTable from '../Components/AnimeTable'

export default function Profile({ animeData }) {
    const { titulo, descricao, urlImagem } = animeData
    console.log(animeData)
    return (
        <>
            <Navbar hideSearch />

            <Container maxWidth="md">
                <Paper elevation={3}>
                    <Box display ='flex' flexDirection="column" justifyContent="center">
                    <Typography variant="h5">
                        {titulo}
                    </Typography>
                    <Box component="img" src={urlImagem} width="50%" />
                    <AnimeTable></AnimeTable>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};
