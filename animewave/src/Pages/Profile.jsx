import React from 'react'
import Navbar from '../Components/Navbar'
import { Typography, Container, Box, Paper, Divider } from '@mui/material'
import AnimeTable from '../Components/AnimeTable'

export default function Profile({ animeData }) {
    const { titulo, descricao, urlImagem } = animeData
    console.log(animeData)
    return (
        <>
            <Navbar hideSearch />

            <Container maxWidth="md">
                <Paper elevation={3}>
                    <Box display='flex' flexDirection="column" alignItems="center" p={5}>
                        <Typography variant="h5">
                            {titulo}
                        </Typography>
                        <Box display="flex" width="100%">
                        <Box component="img" src={urlImagem} width="50%" height="100%" paddingRight={4} />
                            <Typography variant="h6">
                            {descricao}
                        </Typography>                        </Box>
                        <Box width="100%">
                            <Divider>Episódios</Divider>
                            <AnimeTable></AnimeTable>

                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};
