/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
"use client";
import { useState } from 'react';
import { Grid, Box } from '@mui/material';
import Board from './Board';
import EditShipping from './modal/EditShipping';

const PaymentMethodsView = () => {
    const [open, setOpen] = useState(false);
    const [currentRowData, setCurrentRowData] = useState({});
    const [profile, setProfile] = useState([]);
    const [shipping, setShipping] = useState([]);

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
                                        setOpen={setOpen}
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
        </>
    );
};

export default PaymentMethodsView;
