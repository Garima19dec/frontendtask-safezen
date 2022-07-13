import {
  Divider,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          SafeZen
        </Typography>
        <Navbar />

        <Button
          variant="contained"
          style={{
            width: "20%",
            cursor: "pointer",
          }}
        >
          Launch app
        </Button>
      </Toolbar>

      <Divider />

      <Toolbar className={classes.tagline}>
        Express your views through words
      </Toolbar>
    </>
  );
}

export default Header;
