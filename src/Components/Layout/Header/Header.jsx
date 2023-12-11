import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "./Header.module.scss";
import { Grid, Stack, Button } from "@mui/material";
import Link from "next/link";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import MobileDrawer from "../../Drawer/MobileDrawer";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useRouter } from "next/router";
import Image from "next/image";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const scrollPosition = useScrollPosition();
  const router = useRouter();
  // mint page
  const mintPage = router.pathname === "/mint";

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            background: scrollPosition > 10 ? "#0000007a" : "transparent",
            padding: scrollPosition > 10 ? "15px 0 10px 0" : "50px 0 10px 0",
          }}
          className={styles.header_wrapper}
        >
          <Container>
            <>
              <Grid container spacing={2} className={styles._content}>
                <Grid
                  item
                  md={8}
                  sm={8}
                  xs={12}
                  className={styles._left_content}
                >
                  <Stack
                    direction="row"
                    spacing={3}
                    alignItems="center"
                    style={{ width: "100%", height: "100%" }}
                  >
                    {mintPage ? (
                      <li>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                    ) : (
                      <>
                        {" "}
                        <li>
                          <Link href="#home">
                            <a>Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#about">
                            <a>About</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#roadmap">
                            <a>Milestones</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#team">
                            <a>Team</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#faq">
                            <a>FAQ</a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.quitbitchingcoalition.com/"
                            passHref
                          >
                            <a target="_blank" rel="noopener noreferrer">
                              Apparel
                            </a>
                          </Link>
                        </li>
                      </>
                    )}
                  </Stack>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={12}
                  className={styles._right_content}
                >
                  <Stack
                    direction="row"
                    spacing={4}
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    <div>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Link
                          href="https://twitter.com/QuitBitchingCo"
                          passHref
                        >
                          <a target="_blank" rel="noopener noreferrer">
                            <BsTwitter />
                          </a>
                        </Link>
                        <Link
                          href="https://www.instagram.com/quitbitchingcoalition/?hl=en"
                          passHref
                        >
                          <a target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                          </a>
                        </Link>
                        <Link
                          href="https://discord.com/invite/TNQwNjn2"
                          passHref
                        >
                          <a target="_blank" rel="noopener noreferrer">
                            <FaDiscord />
                          </a>
                        </Link>
                      </Stack>
                    </div>
                    <div>
                      {
                        mintPage ? (
                          <Button
                            variant="contained"
                            color="inherit"
                            className={styles.metamask}
                          >
                            <Image
                              src="/images/MetaMask_Fox.png"
                              alt="metamask"
                              width={40}
                              height={35}
                              objectFit="contain"
                              style={{ marginRight: "8px" }}
                            />
                            Connect Wallet
                          </Button>
                        ) : null
                        // <Link href="/mint" passHref>
                        //   <a style={{ textDecoration: "none" }}>
                        //     <Button variant="contained" color="inherit">
                        //       Mint now
                        //     </Button>
                        //   </a>
                        // </Link>
                      }
                    </div>
                  </Stack>
                </Grid>
                <Grid item xs={12} className={styles._mobile_content}>
                  <MobileDrawer />
                </Grid>
              </Grid>
            </>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Box>{props.children}</Box>
    </React.Fragment>
  );
}
