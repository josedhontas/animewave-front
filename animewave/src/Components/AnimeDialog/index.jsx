import React, { useRef, useEffect } from 'react';
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

export default function AnimeDialog({ linkepisodio = "https://tc-1.boocdn.net/_v6/a36ed4227720a477b9b763ba35e0225948ff459da3fea48138bc95350498f3d4f1834408ed8063d221a0fc1747f7ab3bf2fc613dcc5dcbedc116815be3c76181768733ef68abea714f2d01065e813088f69259fe1d7a84c4cf362a5933a34bf0f7b01d4b5611dc8cad5f6a3fd3c1cf9971c3ee258e1c6b0c1a6a9dfab9edf106/index-f1-v1-a1.m3u8", onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.src = linkepisodio;
      video.load();
    }
  }, [linkepisodio]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          AnimeWave
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div>
            <video ref={videoRef} className="video-js vjs-default-skin" controls playsInline />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Próximo (ainda não funciona)
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
