import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MediaForm = ({ setShowForm }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    

    return (
        <Box sx={{ padding: 2, margin: 2, borderRadius: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Stack>
                        <Typography sx={{ paddingY: 1 }}>Heading 01</Typography>
                        <TextField fullWidth placeholder="Add your business name" />
                    </Stack>
                    <Stack>
                        <Typography sx={{ paddingY: 1 }}>Heading 02</Typography>
                        <TextField fullWidth placeholder="Add your business name" />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack>
                        <Typography sx={{ paddingY: 1 }}>Description 01</Typography>
                        <TextField
                            sx={{ padding: "2px" }}
                            fullWidth
                            placeholder="Add primary text to help users understand more about your product, service, or offers"
                            multiline
                            rows={5}
                            maxRows={6}
                        />
                    </Stack>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Stack>
                        <Typography sx={{ paddingY: 1 }}>Landscape Marketing Image (1.9:1)</Typography>
                        <TextField
                            id="landscape-image-url"
                            label="Add the URL of the image you want to use for the ad"
                            fullWidth
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Stack>
                        <Typography sx={{ paddingY: 1 }}>Portrait Marketing Image (4:5)</Typography>
                        <TextField
                            id="portrait-image-url"
                            label="Add the URL of the image you want to use for the ad"
                            fullWidth
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Stack>
                        <Typography sx={{ paddingY: 1 }}>Square Marketing Image (1:1)</Typography>
                        <TextField
                            id="square-image-url"
                            label="Add the URL of the image you want to use for the ad"
                            fullWidth
                        />
                    </Stack>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Stack>
                        <Typography sx={{ paddingY: 1 }}>Video URL</Typography>
                        <TextField id="video-url" label="Add the URL of the video you want to use for the ad" fullWidth />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack>
                        <Typography sx={{ paddingY: 1 }}>Business Name</Typography>
                        <TextField id="business-name" label="Add your business name" fullWidth />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack>
                        <Typography sx={{ paddingY: 1 }}>Button Label</Typography>
                        <TextField id="button-label" label="Add a label that best suits your ad" fullWidth />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Stack>
                        <Typography sx={{ paddingY: 1 }}>Website URL</Typography>
                        <TextField id="website-url" label="Add the URL of your website" fullWidth />
                    </Stack>
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button onClick={e => setShowForm(0)} style={{ marginRight: '10px', marginTop: 7 }} variant="outlined">
                    Back
                </Button>
                <Button onClick={e => setShowForm(2)} style={{ marginRight: '10px', marginTop: 7 }} variant="contained" >
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default MediaForm;
