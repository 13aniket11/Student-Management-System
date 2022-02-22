import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import takes from '../assets/images/takes.jpg';
import Axios from 'axios';

import '../App.css';

const theme = createTheme();

export default function Takes() {

    const [takesList, setTakesList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/takes/api/get').then((response) => {
            console.log(response.data);
            setTakesList(response.data);
        });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${takes})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}
                    >

                        <h2 className='pagetitle'>Student - Course Details</h2>  
                        
                        <Box>

                            <table className='table'>
                                <tr>
                                    <th>ID</th>
                                    <th>Course ID</th>
                                    <th>Section ID</th>
                                    <th>Semester</th>
                                    <th>Year</th>
                                    <th>Grade</th>
                                </tr>
                                {takesList.map((val) => {
                                    return (
                                        <tr>
                                            <td>{val.ID}</td>
                                            <td>{val.course_id}</td>
                                            <td>{val.sec_id}</td>
                                            <td>{val.semester}</td>
                                            <td>{val.year}</td>
                                            <td>{val.grade}</td>
                                        </tr>     
                                    );
                                })} 
                            </table>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}