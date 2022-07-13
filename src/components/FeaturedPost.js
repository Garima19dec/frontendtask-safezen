import {
  // Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Button from '@mui/material/Button';
import EastIcon from "@mui/icons-material/East";


const useStyles = makeStyles({
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
    backgroundPosition: "center",
    padding: "35px 25px",
  },
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
    lineHeight: 1.4,
  },
  textContainer: {
    color: "white",
  },
});

const FeaturedPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          World's first innovative peer-to-peer insurance coverages to protect
          you from uncertain future risks
        </Typography>
        <Typography variant="h5" component="h2">
          Zero-premium risk coverage to pay-as-you-go insurance we have got you
          all covered
        </Typography>
      </CardContent>
      <CardActions
      // sx={{ justifyContent: "center" }}
      // display='flex' justifyContent= "center"
      >
        <Button
          // sx={{
          //   display: "flex",
          //   flexDirection: { xs: "column", md: "row" },
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
          variant="contained"
          size="medium"
          style={{
            color: "grey",
            fontWeight: 700,
            cursor: "pointer",
            // flexDirection: "row",
            backgroundColor: "pink",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // "&:hover": {
            //   backgroundColor: 'purple',
            // },
          }}
          endIcon={<EastIcon />}
        >
          Get SafeZen Insured Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
