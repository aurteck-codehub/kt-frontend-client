"use client";
import { useState } from "react";
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
import { gridSpacing, allOrders } from "@/utils";
const OrdersView = () => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(null);

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
  const TABLE_HEAD = [
    { id: "id", label: "Order ID", alignRight: false },
    { id: "created", label: "Placed On", alignRight: false },
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
  return (
    <MainCard title="My Orders" darkTitle>
      <Table
        tableHead={TABLE_HEAD}
        data={allOrders}
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
        showActions
        selected={selected}
        setSelected={setSelected}
      >
        <TableBody>
          {allOrders?.map((row) => {
            const {
              id,
              created,
              avatarUrl,
              item,
              fulfillment,
              quantity,
              totalPrice,
              status,
              updated,
            } = row;
            const selectedRow = selected.indexOf(row.id) !== -1;
            return (
              <TableRow
                hover
                key={id}
                tabIndex={-1}
                role="checkbox"
                selected={selectedRow}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedRow}
                    onChange={(event) => handleClick(event, id)}
                  />
                </TableCell>
                <TableCell>
                  <Typography>{id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{created}</Typography>
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar alt={item} src={avatarUrl} />
                    <Typography variant="subtitle2" noWrap>
                      {item}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell align="left">
                  <Label label={fulfillment} color="primary" />
                </TableCell>
                <TableCell align="left">{quantity}</TableCell>
                <TableCell align="left">{totalPrice}</TableCell>
                <TableCell align="left">
                  <Label label={status} color="primary" />
                </TableCell>
                <TableCell align="left">{updated}</TableCell>
                <TableCell align="right">
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
