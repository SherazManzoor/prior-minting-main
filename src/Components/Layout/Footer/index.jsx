import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import styles from "./Footer.module.scss";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SiDiscord } from "react-icons/si";
import LeftSide from "./LeftSide";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            // width: { xs: "100%", sm: "90%" },
            margin: "0 auto",
          }}
        >
          <>
            <LeftSide />
          </>
          <>
            <RightSide />
          </>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;

const RightSide = () => {
  return (
    <div className={styles.footer__right}>
      <Link href="https://twitter.com/QuitBitchingCo" passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtnOne}
        >
          <TwitterIcon />
        </a>
      </Link>
      <Link
        href="https://www.instagram.com/quitbitchingcoalition/?hl=en"
        passHref
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtnTwo}
        >
          <InstagramIcon />
        </a>
      </Link>
      <Link href="https://discord.com/invite/TNQwNjn2" passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialBtnThree}
        >
          <SiDiscord
            style={{
              fontSize: "1.5rem",
            }}
          />
        </a>
      </Link>
    </div>
  );
};
