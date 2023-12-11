import { Container } from "@mui/material";
import React from "react";
import styles from "./Intro.module.scss";
const Intro = () => {
  return (
    <div className={styles._wrapper}>
      {/* video added  */}
      <Container>
        <video autoPlay loop muted playsInline className={styles._video}>
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>
      </Container>
    </div>
  );
};

export default Intro;
