/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
"use client";
import { useState } from 'react';
import { Grid, Box } from '@mui/material';
import Board from './Board';
import EditShipping from './modal/EditShipping';
import EditOutlet from './modal/EditOutlet';

const OutletsView = () => {
    const [open, setOpen] = useState(false);
    const [outletOpen, setOutletOpen] = useState(false);
    const [currentRowData, setCurrentRowData] = useState({});
    const [profile, setProfile] = useState([]);
    const [shipping, setShipping] = useState([]);
    const [outlet, setOutlet] = useState([]);

    return (
        <>
            <>
                <Grid container spacing={3}>
                    <Grid item xs={12} mt={5}>
                        <Grid container spacing={3} direction="column">
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Board
                                        setCurrentRowData={setCurrentRowData}
                                        profile={profile}
                                        setProfile={setProfile}
                                        shipping={shipping}
                                        setShipping={setShipping}
                                        outlet={outlet}
                                        setOutlet={setOutlet}
                                        setOpen={setOpen}
                                        setOutletOpen={setOutletOpen}
                                    />
                                </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </>
            <EditShipping
                currentRowData={currentRowData}
                setShipping={setShipping} 
                open={open} 
                setOpen={setOpen} 
            />
            <EditOutlet
                currentRowData={currentRowData}
                setOutlet={setOutlet}
                open={outletOpen}
                setOpen={setOutletOpen}
            />
        </>
    );
};

export default OutletsView;
