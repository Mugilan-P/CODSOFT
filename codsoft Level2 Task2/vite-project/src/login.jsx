import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

function Login() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    axios
      .post("http://localhost:8080/api/login", loginData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Successfully Logged In");
          const user = res.data; // Get the user object from the response
          localStorage.setItem("user", JSON.stringify(user)); // Store user in local storage
          navigate(`/users/${user.id}`); // Navigate to the Dashboard with the user ID
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Invalid email/password");
      });
  };

  return (
    <div className="body">
      <Box
        style={{
          background: "linear-gradient(90deg,#0062ff,#da61ff)",
        }}
        sx={{
          background: "rgb(249,250,251)",
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container
          component="main"
          sx={{
            padding: "3rem 1.5rem",
          }}
        >
          <Paper
            style={{
              maxWidth: "500px",
              margin: "auto",
              padding: "1.5rem 2rem",
              background: "linear-gradient(90deg,#70fe53,#00d4ff)",
            }}
            variant="outlined"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  m: 1,
                  p: 2,
                  bgcolor: "secondary.main",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  style={{ width: "200%", height: "200%" }}
                  src="https://static.vecteezy.com/system/resources/previews/015/280/523/non_2x/job-logo-icon-with-tie-image-free-vector.jpg"
                  alt="logo"
                />
              </Avatar>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      type="email"
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" required />}
                      label="I accept the terms and conditions."
                    />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Login
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/register" variant="body2" onClick={() => navigate("/register")}>
                      Don't have an account? Sign up
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </div>
  );
}

export default Login;
