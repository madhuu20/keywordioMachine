import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,

    Box,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    Button,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Doughnut } from 'react-chartjs-2';
// import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Navbar from './Navbar';

<style>

</style>

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
    labels: ['25% Unknown', '35% Female', ' 40% male'],
    datasets: [
        {
            label: '# of Votes',
            data: [25, 25, 25],
            backgroundColor: [
                'rgba(67, 156, 208, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(255, 140, 0, 1)',
            ],
            borderColor: [
                'rgba(67, 156, 208, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(255, 165, 0, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const rows = [
    {
        Companies: 'Costomic',
        Click: 172,
        Cost: ['USD', 568],
        Conversion: 24,
        Renuves: ['USD', 16, 568],
    },
    // ... other rows
];

const Task = () => {
    // <AppBar position="static" sx={{ bgcolor: "white" }} >
    //     <Toolbar>
    //         <IconButton
    //             size="large"
    //             edge="start"
    //             color="inherit"
    //             aria-label="menu"
    //             sx={{ mr: 2 }}
    //         >
    //             <Menu />
    //         </IconButton>
    //         <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
    //             APP LOGO
    //         </Typography>
    //         <Button sx={{ color: "black" }}>DASHBOARD </Button>
    //         <Button sx={{ color: "black" }}>CREATE ADS</Button>

    //     </Toolbar>
    // </AppBar>
    return <>
        {/* <Navbar /> */}
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} border={1} borderColor={blur} marginTop={3} borderRadius={1}  >
                <Box

                    sx={{

                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 2,
                    }}
                >
                    <Typography variant="h6" sx={{ marginBottom: 2 }}   >Ad Insights</Typography>
                    {/* <NotListedLocationOutlinedIcon /> */}
                </Box>
                <TableContainer component={Paper} sx={{ overflowX: 'auto' }}  >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Companies</TableCell>
                                <TableCell align="right">Click</TableCell>
                                <TableCell align="right">Cost</TableCell>
                                <TableCell align="right">Conversion</TableCell>
                                <TableCell align="right">Renuves</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="right">{item.Companies}</TableCell>
                                    <TableCell align="right">{item.Click}</TableCell>
                                    <TableCell align="right">{`${item.Cost[0]} ${item.Cost[1]}`}</TableCell>
                                    <TableCell align="right">{item.Conversion}</TableCell>
                                    <TableCell align="right">{`${item.Renuves[0]} ${item.Renuves[1]} ${item.Renuves[2]}`}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Doughnut
                    data={data}
                    options={{ maintainAspectRatio: false, responsive: true, }}
                    width={300}
                    height={300}
                />
            </Grid>
        </Grid>
    </>
};

export default Task;
