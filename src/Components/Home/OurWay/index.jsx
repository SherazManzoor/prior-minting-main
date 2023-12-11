import Image from "next/image";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import styles from "./OurWay.module.scss";
import Link from "next/link";

const OurWay = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            flexWrap: "wrap-reverse",
            width: { xs: "100%", md: "100%" },
            margin: "0 auto",
          }}
        >
          <div className={styles.left}>
            <Image
              src="/images/Path 132.png"
              height={50}
              width={250}
              alt="Our Way"
            />

            <div>
              <p className={styles.article}>
                When we started in 2015, we focused on offering one
                service in the best way possible. Now, we are diversifying and
                selecting other areas to operate in. Our artworks, utilities,
                and charities represent the brand and its message.
              </p>
              <p className={styles.article}>
                We would remain dedicated to promoting and building a community
                in the NFT space just as we have done since 2015. A portion of
                proceeds from NFT sales would be donated to an organization
                named “Heart of a Hero” which assists children with cancer.
              </p>
              <p className={styles.article}>
                We are inspired to take this step as it allows us and the entire
                community to appreciate strength through art while motivating
                others with charities and utilities.
              </p>

              <p className={styles.linkContainer}>
                Read more about this heroic organization
                <Link href="https://www.heartofahero.org" passHref>
                  <a
                    // href="www.heartofahero.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    here.
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src="/images/HOHVectorWEB.png"
              height={250}
              width={250}
              alt="Our logo"
            />
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default OurWay;
