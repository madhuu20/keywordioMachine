import React, { useEffect } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Submit = ({ setShowForm }) => {
    useEffect(() => {
        let timer = setTimeout(() => {
            setShowForm(0)
        }, 3000);

        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <Box>
            <Box
                sx={{
                    width: 200,
                    height: 80,
                    borderRadius: 1,
                    border: '0.5px solid rgb(150,150,150)', 
                    textAlign: "center",
                    paddingTop: 4,
                }}
            >
                <Typography sx={{ color: "blue" }}>
                    <CheckCircleIcon />
                </Typography>
                <Typography>Submitted</Typography>
            </Box>
        </Box >
    );
};

export default Submit;
