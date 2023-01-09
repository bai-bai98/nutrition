import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import promo from "./assets/ethan.gif";

export default function Album() {
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <div className="home" style={{ backgroundImage: `url(${promo})` }}>
          <Container maxWidth="sm">
            <Typography
              className="home-title"
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Wiley Nutrition
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Perform to your potential.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="http://localhost:3000/register">
                <Button variant="contained">register</Button>
              </Link>{" "}
              <Link href="http://localhost:3000/login">
                <Button variant="contained">Login</Button>
              </Link>{" "}
            </Stack>
          </Container>
        </div>
      </Box>
    </main>
  );
}
