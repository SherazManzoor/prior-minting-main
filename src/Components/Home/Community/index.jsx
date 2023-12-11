import Image from "next/image";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { SiDiscord } from "react-icons/si";

import styles from "./Community.module.scss";
import Link from "next/link";

const Community = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Box className={styles.box}>
          {/* <Image
            src="/images/lineup-r-xxs.png"
            height={100}
            width={250}
            alt="community"
          /> */}

          <Link href="https://discord.com/invite/TNQwNjn2" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="inherit"
                className={styles.btn}
              >
                <SiDiscord
                  style={{ fontSize: "1.5rem", marginRight: "0.6rem" }}
                />{" "}
                Join the Discord
              </Button>
            </a>
          </Link>
        </Box>
      </Container>
    </section>
  );
};

export default Community;
