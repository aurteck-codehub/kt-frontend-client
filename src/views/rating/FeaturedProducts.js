/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";
import { useState } from 'react';
import { TableBody, TableRow, TableCell, IconButton, Typography, Checkbox, Popover, MenuItem } from '@mui/material';
import Table from '@/components/Table';
import Iconify from '@/components/iconify';

import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../configuration';

const TABLE_HEAD = [
    { id: 'id', label: 'Review Id', alignRight: false },
    { id: 'productName', label: 'Product Name', alignRight: false },
    { id: 'reviewText', label: 'Review Text', alignRight: false },
    { id: 'rating', label: 'Rating', alignRight: false, isNumber: true },
    { id: 'updated', label: 'Updated', alignRight: false },
    { id: '' }
];

const FeaturedProducts = ({ setCurrentRowData, reviewsList, setReviewsList, setOpenEdit }) => {
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(null);
    const [currentRowId, setCurrentRowId] = useState(null);
    const [id, setId] = useState('')

    console.log({reviewsList})
    useEffect(() => {
        const user = JSON?.parse(localStorage.getItem('profile'))
        setId(user?.user_id)
        axios.get(`${API_URL}/review/user/${user?.user_id}`)
        .then((res) => {
            setReviewsList(res?.data?.data)
        })
    },[])

    const handleDeleteClick = async () => {
        setOpen(null);
        await axios.delete(`${API_URL}/review/${currentRowId}`);
        axios.get(`${API_URL}/review/user/${id}`)
        .then((res) => {
            setReviewsList(res?.data?.data)
        })
    };

    const handleEditClick = (id) => {
        setOpen(null);
        setOpenEdit(true);
    };

    const handleOpenMenu = (event, row) => {
        const { id } = row;
        setCurrentRowData(row);
        setCurrentRowId(id);
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    return (
        <>
            <Table
                tableHead={TABLE_HEAD}
                data={reviewsList}
                handleDeleteClick={handleDeleteClick}
                handleEditClick={handleEditClick}
                showActions
                selected={selected}
                setSelected={setSelected}
            >
                <TableBody>
                    {reviewsList?.map((row) => {
                        const {
                            id,
                            Product,
                            review_text,
                            rating,
                            updatedAt
                        } = row;
                        const selectedRow = selected.indexOf(row.id) !== -1;
                        return (
                            <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedRow}>
                                <TableCell padding="checkbox">
                                    <Checkbox checked={selectedRow} onChange={(event) => handleClick(event, id)} />
                                </TableCell>
                                <TableCell>
                                    <Typography>{id}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{Product?.name}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{review_text}</Typography>
                                </TableCell>
                                <TableCell align="left">{rating}</TableCell>
                                <TableCell align="left">{updatedAt}</TableCell>
                                <TableCell align="right">
                                    <IconButton size="large" color="inherit" onClick={(e) => handleOpenMenu(e, row)}>
                                        <Iconify icon={'eva:more-vertical-fill'} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 1,
                        width: 140,
                        '& .MuiMenuItem-root': {
                            px: 1,
                            typography: 'body2',
                            borderRadius: 0.75
                        }
                    }
                }}
            >
                <MenuItem onClick={handleEditClick}>
                    <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                    Edit
                </MenuItem>
                <MenuItem sx={{ color: 'error.main' }} onClick={handleDeleteClick}>
                    <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
                    Delete
                </MenuItem>
            </Popover>
        </>
    );
};

export default FeaturedProducts;
