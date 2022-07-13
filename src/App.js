import "./App.css";
import {
  Container,
  createMuiTheme,
  Grid,
  ThemeProvider,
} from "@material-ui/core";
import FeaturedPost from "./components/FeaturedPost";
import PostCard from "./components/PostCard";
import Header from "./components/Header";
import { featuredPosts } from "./Data/Data";

import Footer from "./components/Footer";
import Box from "@mui/material/Box";



function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <br />
        <Box
          sx={{
            width: "100%",
            height: 40,
            backgroundColor: "#D4CDC8",
            color: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "8vh",
            fontWeight: 700,
            fontSize: "150%",
            // "&:hover": {
            //   backgroundColor: "primary.main",
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }}
          style={[]}
        >
          Major features
        </Box>

        <Grid container>
          {featuredPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;
