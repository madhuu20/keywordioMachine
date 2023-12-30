import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Checkbox, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import xyz from '../images/1.jpg';
import media from '../images/media_ads_ss.jpg';

const CreateAds = ({ setShowForm }) => {
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [checked, setChecked] = useState(!true);
    const [data1, setData1] = useState(true);
    const [data2, setData2] = useState(true);
    const [selected, setSelected] = useState('');

    const navigate = useNavigate();
    const handelChange = (arg) => {
        if (arg === 'first') {
            if (data1 === true) {
                setSelected('first');
                console.log('clicked 1');
            }
            setData1(!data1);
        }
        if (arg === 'second') {
            if (data2 === true) {
                setSelected('second');
                console.log('clicked 2');
            }
            setData2(!data2);
        }
    };

    const handelCheck = () => {
        if (selected === '') {
            alert('Please select one');
        }

        if (selected === 'first') {
            navigate('/adsform');
        }

        if (selected === 'second') {
            navigate('/mediaform');
        }
    };

    return (
        <Box>
            <Grid container spacing={2} sx={{ paddingTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Box position="static" sx={{ border: 0.3, borderColor: 'rgb(190,190,190)', borderRadius: 2, paddingLeft: 5, margin: 1, paddingBottom: 3 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Checkbox checked={!checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                        <img src={xyz} alt="" />
                    </Grid>
                    <Typography sx={{ fontSize: 15, color: "grey", textAlign: "center" }}>Create</Typography>
                    <Typography sx={{ fontSize: 20, fontFamily: "sans-serif", fontWeight: "bold", textAlign: "center" }} > Text Ad </Typography>
                </Box>

                <Box position="static" sx={{ border: 0.3, borderColor: 'rgb(190,190,190)', borderRadius: 2, paddingLeft: 5, margin: 1, paddingBottom: 3 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Checkbox checked={!checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                        <img src={xyz} alt="" />
                    </Grid>
                    <Typography sx={{ fontSize: 15, color: "grey", textAlign: "center" }}>Create</Typography>
                    <Typography sx={{ fontSize: 20, fontFamily: "sans-serif", fontWeight: "bold", textAlign: "center" }} > Media Ad </Typography>
                </Box>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: 2 }}>
                <Box sx={{ borderRadius: 1, backgroundColor: 'blue', textAlign: 'center' }}>
                    <Button sx={{ width: 100, color: 'white' }} onClick={() => setShowForm(1)}>
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default CreateAds;
