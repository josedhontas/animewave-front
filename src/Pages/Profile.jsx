import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Typography, Container, Box, Paper, Divider, Grid } from '@mui/material';
import AnimeTable from '../Components/AnimeTable';
import axios from 'axios';
import AnimeDialog from '../Components/AnimeDialog';

export default function Profile({ animeData }) {
  const { id, titulo, descricao, urlImagem, ano, numeroEpisodios } = animeData;
  const [episodios, setEpisodios] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');


  const handleDialogOpen = (link, titulo) => {
    console.log(link)
    setSelectedLink(link);
    setSelectedTitle(titulo)
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };


  useEffect(() => {
    getEpisodios();
  }, []);

  const getEpisodios = () => {
    axios
      .get(`https://movie-wave-vj27.onrender.com/animes/${id}`)
      .then((res) => setEpisodios(res.data.episodios))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ backgroundColor: '#222222' }}>
    <Navbar hideSearch />
      <Container maxWidth="md">
      <Paper elevation={3} sx={{ backgroundColor: '#0f0f0f' }}>
          <Box display='flex' flexDirection="column" alignItems="center" p={5}>
            <Typography variant="h5" color ="#F5F5F5">
              {titulo}
            </Typography>
            <Box display="flex" width="100%">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box component="img" src={urlImagem} width="100%" height="auto" paddingRight={4} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" color ="#F5F5F5">
                    {descricao}
                  </Typography>
                  <Typography variant="h6" color ="#F5F5F5">
                    Ano: {ano}
                  </Typography>
                  <Typography variant="h6" color ="#F5F5F5">
                    Episódios: {numeroEpisodios}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box width="100%">
              <Grid item xs={12} md={6}>
                <Divider sx={{ color: '#F5F5F5' }}>Episódios</Divider>
                <AnimeTable episodiosData={episodios} onRowClick={handleDialogOpen} />
                {dialogOpen && (
                  <AnimeDialog linkepisodio={selectedLink} titulo={selectedTitle} onClose={handleDialogClose} />
                )}

              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
