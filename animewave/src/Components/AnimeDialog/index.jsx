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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
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

export default function AnimeDialog({ linkepisodio, onClose }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose(); // Chama a função onClose fornecida como prop
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          AnimeWave
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <video controls>
            <source src="https://c-an-ca1.betterstream.cc:2223/hls-playback/a36ed4227720a477b9b763ba35e0225948ff459da3fea48138bc95350498f3d4f1834408ed8063d221a0fc1747f7ab3bfee4a565b6701b595f3e1bde3f96c19443bb84a2feda9ae258fc89224946eea1373234bc90f6ecb0c86c6c2226e9a157db57c2a645c2481338a343640f97a38f743766bb6529c58c195abe3cb042ba9ab6eac725ca3b60909f64703b6051cd6390d3c09440b0c077d1d696c3403677045fc154c34a992c6da0dbc347920cc8e7/index-f1-v1-a1.m3u8" type="application/x-mpegURL" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Próximo(ainda nao funciona)
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
