//import { useStyles } from "./top-bar.style";

import Link from "next/link";

import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Hidden,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  homeLink: {
    textDecoration: "none !important",
  },
}));

export function TopBar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Box mr={1}>
            <Link href="/" passHref>
              <Typography
                className={classes.homeLink}
                component="a"
                color="inherit"
                variant="h6"
              >
                TNRS
              </Typography>
            </Link>
          </Box>
          <Typography variant="overline" className={classes.title}>
            Alpha
          </Typography>
          <Hidden xsDown >
            <Typography variant="overline" className={classes.title}>
              Taxonomic Name Resolution Service v5.0
            </Typography>
          </Hidden>
          <Link href="/" passHref>
            <Button component="a" color="inherit">
              Home
            </Button>
          </Link>
          <Link href="/sources" passHref>
            <Button size='small' component="a" color="inherit">
              Sources
            </Button>
          </Link>
           <Link href="/instructions" passHref>
            <Button size='small' component="a" color="inherit">
              Instructions
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button size='small' component="a" color="inherit">
              About
            </Button>
          </Link>
          <Link href="/contribute" passHref>
            <Button size='small' component="a" color="inherit">
              Contribute
            </Button>
          </Link>
         <Link href="/cite" passHref>
            <Button size='small' component="a" color="inherit">
              Cite
            </Button>
          </Link>
       </Toolbar>
      </Container>
    </AppBar>
  );
}





