import { Container, Typography } from "@mui/material";
import React from "react";
import styles from "./Heroarea.module.scss";

const Heroarea = () => {
  return (
    <div className={styles._wrapper}>
      <Container>
        <div className={styles._content}>
          <Typography variant="h6" color="inherit" component="h6">
            QUIT BITCHING COALITION NFT
          </Typography>
          <Typography variant="subtitle1" color="inherit" component="p">
            WHERE WEAKNESS DIES AND STRENGTHS RISE
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Heroarea;
