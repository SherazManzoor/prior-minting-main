/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Container, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Slider } from "../../Slider/Slider";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={styles._wrapper}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6} sm={6} xs={12}>
            <div className={styles._content}>
              <Typography variant="h6" color="inherit" component="h6">
                About Us
              </Typography>
              <Typography variant="h5" color="inherit" component="h5">
                What is the Quit Bitching Coalition?
              </Typography>
              <Typography variant="subtitle1" color="inherit" component="p">
                We believe there are only two choices in life; to quit or to
                quit bitching. Hence, we are not just about fashion but
                embodying the lifestyle, the grit, the guts to never give up, to
                quit bitching and keep pushing.
              </Typography>

              <Typography variant="subtitle1" color="inherit" component="p">
                The Quit Bitching Coalition was founded in 2015 by
                Rosario Smirne. He works with a team of like-minded individuals
                who are self-motivated and passionate about fashion.
              </Typography>

              <Typography variant="subtitle1" color="inherit" component="p">
                Our brand stands as a motivation for mavericks. We do not just
                walk the talk, we epitomize it. Strength is a lifestyle and we
                are on a mission to spread that lifestyle. As a global brand, we
                currently have vibrant communities in 50 states across 15
                countries in the world.
              </Typography>

              {/* <>
                <Link href="/mint" passHref>
                  <a style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="inherit">
                      Mint now
                    </Button>
                  </a>
                </Link>
              </> */}
            </div>
          </Grid>
          <Grid item md={6} sm={6} xs={12} className={styles._right_side}>
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Slider
                slides={[
                  <div className="slide">
                    <Image
                      src="/images/slider1.png"
                      alt="image"
                      width={400}
                      height={400}
                      objectFit="contain"
                    />
                  </div>,
                  <div className="slide">
                    <Image
                      src="/images/slider2.png"
                      alt="image"
                      width={400}
                      height={400}
                      objectFit="contain"
                    />
                  </div>,
                  <div className="slide">
                    <Image
                      src="/images/slider3.png"
                      alt="image"
                      width={400}
                      height={400}
                      objectFit="contain"
                    />
                  </div>,
                ]}
              />
              {/* <Carousel slides={slides} autoplay={true} interval={3000} /> */}
              {/* <Carousel slides={slides} /> */}
              {/* <Carousel slides={slides} autoplay={true} interval={1000} /> */}
            </div>
            {/* <Image
              src="/images/slider.png"
              alt="image"
              width={500}
              height={300}
              objectFit="contain"
            /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
