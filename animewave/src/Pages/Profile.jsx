import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Typography, Container, Box, Paper, Divider, Grid } from '@mui/material';
import AnimeTable from '../Components/AnimeTable';
import axios from 'axios';

export default function Profile({ animeData }) {
  const { id, titulo, descricao, urlImagem } = animeData;
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    getEpisodios();
  }, []);

  const getEpisodios = () => {
    axios
      .get(`https://apu.animewave.ninja/animes/${id}`)
      .then((res) => setEpisodios(res.data.episodios))
      .catch((err) => console.log(err));
  };

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
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box component="img" src={urlImagem} width="100%" height="auto" paddingRight={4} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">
                    {descricao}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box width="100%">
              <Divider>Episódios</Divider>
              <AnimeTable episodiosData={episodios}></AnimeTable>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
