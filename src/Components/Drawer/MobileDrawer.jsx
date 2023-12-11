import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";

export default function MobileDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const router = useRouter();
  // mint page
  const mintPage = router.pathname === "/mint";

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {mintPage ? (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={
                  <li>
                    <Link href="/">
                      <a style={{ textDecoration: "none", color: "#000" }}>
                        Home
                      </a>
                    </Link>
                  </li>
                }
              />
            </ListItemButton>
          </ListItem>
        ) : (
          <>
            {" "}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={
                    <li>
                      <Link href="#home">
                        <a style={{ textDecoration: "none", color: "#000" }}>
                          Home
                        </a>
                      </Link>
                    </li>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={
                    <li>
                      <Link href="#about">
                        <a style={{ textDecoration: "none", color: "#000" }}>
                          About
                        </a>
                      </Link>
                    </li>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={
                    <li>
                      <Link href="#team">
                        <a style={{ textDecoration: "none", color: "#000" }}>
                          Team
                        </a>
                      </Link>
                    </li>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={
                    <li>
                      <Link href="#roadmap">
                        <a style={{ textDecoration: "none", color: "#000" }}>
                          Milestones
                        </a>
                      </Link>
                    </li>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={
                    <li>
                      <Link href="#faq">
                        <a style={{ textDecoration: "none", color: "#000" }}>
                          FAQ
                        </a>
                      </Link>
                    </li>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={
                    <li>
                      <Link
                        href="https://www.quitbitchingcoalition.com/"
                        passHref
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          Apparel
                        </a>
                      </Link>
                    </li>
                  }
                />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon style={{ color: "#fff" }} />
        </IconButton>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
