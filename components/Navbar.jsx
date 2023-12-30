import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import CreateAds from '../pages/CreateAds';
import MediaForm from '../pages/MediaForm';
import Submit from '../pages/Submit';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "90%",
    // minWidth: 800,
    // minHeight: 400,
    bgcolor: 'white',
    backgroundColor: "white",
    boxShadow: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: 4,
};
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [show, setShow] = useState(false)
    const [showForm, setShowForm] = useState(0)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
                        APP LOGO
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {/* Hide on small screens, show on screens of 'sm' and above */}
                        <Button sx={{ color: "black" }} color="inherit">
                            DASHBOARD
                        </Button>
                        <Button sx={{ color: "black" }} color="inherit" onClick={e => setShow(true)}>
                            CREATE ADS
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        {/* Show on small screens, hide on screens of 'sm' and above */}
                        <IconButton
                            onClick={e => setToggle(!toggle)}
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ color: "black" }}
                        >
                            {/* You may want to replace this with a menu icon */}
                            Menu
                        </IconButton>
                    </Box>
                </Toolbar>

            </AppBar>

            <Box onMouseLeave={e => setToggle(false)}>
                {
                    toggle ? <ShowNav /> : false
                }
            </Box>

            <Modal open={show} onClose={e => setShow(false)}>
                <Box style={style}>
                    {showForm === 0 && <CreateAds setShowForm={setShowForm} />}
                    {showForm === 1 && <MediaForm setShowForm={setShowForm} />}
                    {showForm === 2 && <Submit setShowForm={setShowForm} />}
                </Box>
            </Modal>

        </Box>


    );
};

const ShowNav = () => {

    return <>
        <Box className=' h-[5rem] w-full bg-slate-400 text-black '>
            <Box className='cursor-pointer flex flex-col '>
                <Link className='m-2 font-semibold' to={'/'}>Dashboard</Link>
                <Link className='m-2 font-semibold' to={'/ads'}>Create Ads</Link>
            </Box>
        </Box>

    </>
}

export default Navbar;
