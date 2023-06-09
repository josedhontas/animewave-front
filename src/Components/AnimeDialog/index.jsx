import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import nevergonna from './nevergonna.mp4';
import Grid from '@mui/material/Grid';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#222222', // 
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    color: '#ffffff', // Altere para a cor desejada do texto (branco)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AnimeDialog({ linkepisodio, titulo, onClose }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose(); // Chama a função onClose fornecida como prop
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  linkepisodio = nevergonna
  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} color="#F5F5F5">
          {titulo}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <video controls autoPlay style={{ width: '100%', height: '100%' }}>
                <source src={linkepisodio} type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              color: 'white', // Altere para a cor desejada do texto

            }}
          >
            Próximo
          </Button>

        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
