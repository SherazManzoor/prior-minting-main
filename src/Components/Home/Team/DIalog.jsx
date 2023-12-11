import * as React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import styles from "./Dialog.module.scss";
import Link from "next/link";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  backdropFilter: "blur(8px)",

  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    background:
      "transparent linear-gradient(180deg, #262626 0%, #404040 100%) 0% 0% no-repeat padding-box",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        background: "#262626",
      }}
      {...other}
    >
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
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
};

const TeamDialog = ({ open, setOpen, mate }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      />
      <DialogContent>
        <div className={styles.detailsCard}>
          <div className={styles.details__image}>
            <Image src={mate.imgUrl} alt={mate.name} width={150} height={150} />
          </div>
          <h2 className={styles.details__name}>{mate.name}</h2>
          <p className={styles.details__role}>{mate.position}</p>
          <div className={styles.social}>
            <Link href={mate.social} passHref>
              <a target="_blank" rel="noopener noreferrer">
                {mate.icon}
              </a>
            </Link>
          </div>
          <div className={styles.details__description}>
            <Typography variant="body1">{mate.details}</Typography>
          </div>
        </div>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default TeamDialog;
