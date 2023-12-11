import React from "react";
import styles from "./Timeline.module.scss";
import Typography from "@mui/material/Typography";
import { Box, Container, Paper } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { makeStyles } from "@mui/styles";
import {
  TimelineOppositeContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  Timeline,
} from "@mui/lab";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "0px 20px",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

const TimelineSection = () => {
  const classes = useStyles();
  return (
    <div className={styles._wrapper}>
      <div className={styles._title}>
        <Typography variant="h6" color="inherit">
          Milestones
        </Typography>
      </div>

      <Container>
        <Box sx={{ mt: 3 }}>
          <Timeline align="left">
            <TimelineItem className={styles.timeline_wrapper}>
              <Box
                style={{
                  width: "300px",
                }}
              >
                <TimelineOppositeContent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/images/timeline2.png"
                    alt="image"
                    width={150}
                    height={150}
                    objectFit="contain"
                  />
                </TimelineOppositeContent>
              </Box>

              <TimelineSeparator
                // style={{ backgroundColor: "red" }}
                className={styles._timeLine_separator}
              >
                <TimelineDot className={styles._timeLine_dot}>
                  <CheckIcon className={styles._timeLine_icon} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ padding: "0 16px" }}>
                <Paper className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    className={styles._timeLine_title}
                  >
                    Mint opened on: 27th October 2022.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className={styles.timeline_wrapper}>
              <Box
                style={{
                  width: "300px",
                }}
              >
                <TimelineOppositeContent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/images/two.png"
                    alt="image"
                    width={150}
                    height={150}
                    objectFit="contain"
                  />
                </TimelineOppositeContent>
              </Box>

              <TimelineSeparator
                // style={{ backgroundColor: "red" }}
                className={styles._timeLine_separator2}
              >
                <TimelineDot className={styles._timeLine_dot}>
                  {/* <CheckIcon className={styles._timeLine_icon} /> */}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ padding: "0 16px" }}>
                <Paper className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    className={styles._timeLine_title}
                  >
                    Currently donated $7k to Heat of a Hero. Our target is $25k.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem className={styles.timeline_wrapper}>
              <Box
                style={{
                  width: "300px",
                }}
              >
                <TimelineOppositeContent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/images/three.png"
                    alt="image"
                    width={150}
                    height={150}
                    objectFit="contain"
                  />
                </TimelineOppositeContent>
              </Box>

              <TimelineSeparator className={styles._timeLine_separator2}>
                <TimelineDot className={styles._timeLine_dot}>
                  {/* <CheckIcon className={styles._timeLine_icon} /> */}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ padding: "0 16px" }}>
                <Paper className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    className={styles._timeLine_title}
                  >
                    Monetise the Kid Maverick & Friends YouTube channel.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem className={styles.timeline_wrapper}>
              <Box
                style={{
                  width: "300px",
                }}
              >
                <TimelineOppositeContent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/images/four.png"
                    alt="image"
                    width={150}
                    height={150}
                    objectFit="contain"
                  />
                </TimelineOppositeContent>
              </Box>

              <TimelineSeparator className={styles._timeLine_separator2}>
                <TimelineDot className={styles._timeLine_dot}>
                  {/* <CheckIcon className={styles._timeLine_icon} /> */}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ padding: "0 16px" }}>
                <Paper className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    className={styles._timeLine_title}
                  >
                    Once the channel is monetised, revenue share will be
                    distributed to all holders on a monthly basis. More
                    information will be released on this once we have minted out
                    the collection.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem className={styles.timeline_wrapper}>
              <Box
                style={{
                  width: "300px",
                }}
              >
                <TimelineOppositeContent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/images/five.png"
                    alt="image"
                    width={150}
                    height={150}
                    objectFit="contain"
                  />
                </TimelineOppositeContent>
              </Box>

              <TimelineSeparator className={styles._timeLine_separator2}>
                <TimelineDot className={styles._timeLine_dot}>
                  {/* <CheckIcon className={styles._timeLine_icon} /> */}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ padding: "0 16px" }}>
                <Paper className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    className={styles._timeLine_title}
                  >
                    Rebrand QBC clothing line - QBC 2.0, a portion of the
                    revenue will also be distributed to holders. More info once
                    minted out.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            {/* <TimelineItem className={styles.timeline_wrapper}>
              <Box
                style={{
                  width: "300px",
                }}
              >
                <TimelineOppositeContent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/images/six.png"
                    alt="image"
                    width={150}
                    height={150}
                    objectFit="contain"
                  />
                </TimelineOppositeContent>
              </Box>

              <TimelineSeparator className={styles._timeLine_separator2}>
                <TimelineDot className={styles._timeLine_dot}>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ padding: "0 16px" }}>
                <Paper className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    className={styles._timeLine_title}
                  >
                    The Mavericks assemble and start their journey into the
                    Metaverse…
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem> */}
          </Timeline>
        </Box>
      </Container>
    </div>
  );
};

export default TimelineSection;
