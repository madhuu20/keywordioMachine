import { Box, Button, TextField, TextareaAutosize, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const TextAddFill = () => {
    const navigate = useNavigate()
    return <>
        <Box sx={{ backgroundColor: "white", padding: 2, margin: 2, borderRadius: 1 }}>
            <Typography>Create Text & Media</Typography>
            <Grid container spacing={2}>
                <Grid xs={6} >
                    <Box>
                        <Box>
                            <Typography sx={{ paddingY: 1 }}>Heading 01</Typography>
                            <TextField fullWidth placeholder='Add your business name' />
                        </Box>
                        <Box>
                            <Typography sx={{ paddingY: 1 }}>Heading 02</Typography>
                            <TextField fullWidth placeholder='Add your business name' />
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} >
                    <Box>

                        <Box>
                            <Typography sx={{ paddingY: 1 }}>Discription 01</Typography>
                            <TextField
                                sx={{ padding: "2px" }}
                                fullWidth
                                placeholder="Add primare text to help users understand more about your product service or offers"
                                multiline
                                rows={5}
                                maxRows={6}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid xs={12} >
                    <Box>
                        <Grid sx={{ marginY: "20px" }} container spacing={2}>
                            <Grid xs={6} xsOffset={0}>
                                <Typography sx={{ paddingY: 1 }}>Business name</Typography>
                                <TextField fullWidth placeholder='Add your business name' />
                            </Grid>
                            <Grid xs={6} xsOffset={0}>
                                <Typography sx={{ paddingY: 1 }}>Button label</Typography>
                                <TextField fullWidth placeholder='Select a label that suit to your ad' />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid xs={12} xsOffset={0}>
                                <Typography sx={{ paddingY: 1 }}>Website URL</Typography>
                                <TextField fullWidth placeholder='Add the URL of the landing page you want to redirect usres to' />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ textAlign: "end", marginTop: 8 }}>
                        <Button variant='' sx={{ width: "10%", marginY: 3, marginRight: 1, border: 1 }}>Back</Button>
                        <Button style={{ marginRight: '10x', marginTop: 7 }} variant="contained" onClick={e => navigate("/Submit")}>Submit</Button>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default TextAddFill