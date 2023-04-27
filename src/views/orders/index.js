"use client";
import { useEffect, useState } from "react";
import {
  Grid,
  TableBody,
  MenuItem,
  Popover,
  TableCell,
  TableRow,
  Typography,
  Checkbox,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import MainCard from "@/ui-component/cards/MainCard";
import Table from "@/components/Table";
import Iconify from "@/components/iconify";
import Label from "@/components/label";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { API_URL } from "../../configuration";

const TABLE_HEAD = [
  { id: "id", label: "Order ID" },
  { id: "created", label: "Placed On" },
  { id: "item", label: "Item", alignRight: false, isNumber: true },
  {
    id: "fulfillment",
    label: "Fulfillment",
    alignRight: false,
    isNumber: true,
  },
  { id: "quantity", label: "Quantity", alignRight: false },
  { id: "totalPrice", label: "Total Price", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "updated", label: "Updated", alignRight: false },
  { id: "" },
];

const useRowStyles = makeStyles({
  root: ({ open }) => ({
    borderRadius: '5px'
  }),
  tableBody: {
    "& > :not(:last-child)": {
      borderBottom: "5px solid #EDF1F5",
    }
  }
});

const OrdersView = () => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(null);
  const [orders, setOrders] = useState([]);
  const classes = useRowStyles();

  useEffect(() => {
    const user = JSON?.parse(localStorage.getItem('profile'))
    axios.get(`${API_URL}/order/user/${user?.user_id}`)
    .then((res) => {
      setOrders(res?.data);
    })
  },[])

  const handleDeleteClick = (id) => {};
  const handleEditClick = (id) => {};
  const handleOpenMenu = (event) => {
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
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  
  return (
    <MainCard title="My Orders" darkTitle>
      <Table
        tableHead={TABLE_HEAD}
        data={orders}
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
        showActions
        selected={selected}
        setSelected={setSelected}
      >
        <TableBody className={classes.tableBody}>
          {orders?.map((row) => {
            const {
              id,
              order_id,
              quantity,
              price,
              Order,
              Product,
              updatedAt
            } = row;
            const selectedRow = selected.indexOf(row.id) !== -1;
            return (
              <TableRow
                hover
                key={id}
                tabIndex={-1}
                role="checkbox"
                selected={selectedRow}
                className={classes.root}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedRow}
                    onChange={(event) => handleClick(event, id)}
                  />
                </TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>
                  <Typography>{order_id}</Typography>
                </TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>
                  <Typography>{Order?.order_date}</Typography>
                </TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>
                    <Typography>
                      {Product?.name}
                    </Typography>
                </TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>
                  <Label label={'fullfilment'} color="primary" />
                </TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>{quantity}</TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>{price}</TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>
                  <Label label={Order?.status} color="primary" />
                </TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>{updatedAt}</TableCell>
                <TableCell sx={{padding: '2px 16px 2px 16px'}}>
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={handleOpenMenu}
                  >
                    <Iconify icon={"eva:more-vertical-fill"} />
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
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
          Edit
        </MenuItem>
        <MenuItem sx={{ color: "error.main" }}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </MainCard>
  );
};
export default OrdersView;
