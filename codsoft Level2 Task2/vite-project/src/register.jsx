import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'sonner'

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        empJs: ''
    });
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        setTermsAccepted(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!termsAccepted) {
            toast.error("You must accept the terms and conditions.");
            return;
        }

        axios.post("http://localhost:8080/api/register", formData)
            .then(() => {
                toast.success("Successfully registered");
                navigate("/login");
            })
            .catch((error) => {
                console.error(error);
                toast.error("Already have an account!");
            });
    }

    return (
        <div>
            <Box
                style={{
                    background: "linear-Gradient(90deg,#0062ff,#da61ff)"
                }}
                sx={{
                    background: 'rgb(249,250,251)',
                    minHeight: '100vh',
                    display: 'grid',
                    placeItems: 'center',
                }}
            >
                <Container
                    component="main"
                    sx={{
                        padding: '3rem 1.5rem',
                    }}
                >
                    <Paper
                        style={{
                            maxWidth: '500px',
                            margin: 'auto',
                            padding: '1.5rem 2rem',
                            background: "linear-Gradient(90deg,#70fe53,#00d4ff)"
                        }}
                        variant="outlined"
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar
                                sx={{
                                    m: 1,
                                    p: 2,
                                    bgcolor: 'secondary.main',
                                    width: '100px',
                                    height: '100px',
                                }}
                            >
                                <img
                                    style={{ width: '200%', height: '200%' }}
                                    src="https://static.vecteezy.com/system/resources/previews/015/280/523/non_2x/job-logo-icon-with-tie-image-free-vector.jpg"
                                    alt="Job Logo"
                                />
                            </Avatar>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{ mt: 3 }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
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
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <select
                                            name="empJs"
                                            id="empJs"
                                            required
                                            fullWidth
                                            value={formData.empJs}
                                            onChange={handleChange}
                                            style={{ backgroundColor: "transparent", borderRadius: "4px", padding: "5px" }}
                                        >
                                            <option value="">Select</option>
                                            <option value="Employee">Employee</option>
                                            <option value="Candidate">Candidate</option>
                                        </select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value={termsAccepted}
                                                    color="primary"
                                                    // required
                                                    onChange={handleCheckboxChange}
                                                />
                                            }
                                            label="I accept the terms and conditions."
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Register
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link to="/login" variant="body2" onClick={() => navigate("/login")}>
                                            Already have an account?
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </div>
    )
}

export default Register
