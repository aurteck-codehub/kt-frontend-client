"use client";
import { Grid, Container, Box, Typography } from "@mui/material";
import Cart from "./cart";
import Details from "./details";
import ProductSlider from "../products/ProductSlider";
import { API_URL } from "@/configuration";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const CheckOut = () => {
  const router = useRouter();
  const [contact, setContact] = useState({auth_user_id: '', name: '', address: '', city: '', state: '', phone_number: '', area_id: ''})
  const [shippingAddress, setShippingAddress] = useState({auth_user_id: '', name: '', address: '', city: '', state: '', phone_number: '', area_id: ''})
  const [order, setOrder] = useState({tracking: '1234', auth_user_id: '', order_date: '', total_amount: 0, status: 'pending' })
  const [invoice, setInvoice] = useState({order_id: '', auth_user_id: '', amount: 0})
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState();
  const [shipId, setShipId] = useState();
  const [contactId, setContactId] = useState();
  const [areaId, setAreaId] = useState();

  useEffect(() => {
    const user = JSON?.parse(localStorage.getItem('profile'))
    setId(user?.user_id)
    axios.get(`${API_URL}/shoppingcart/auth/${user?.user_id}`)
    .then((res) => {
      axios.get(`${API_URL}/shoppingcartitem/cart/${res?.data?.id}`)
      .then((res) => {
        setCart(res?.data)
      })
    })
    axios.get(`${API_URL}/shippingaddress/user/${user?.user_id}`)
    .then((res) => {
      console.log('shipping address', res?.data)
      setShippingAddress({
        ...shippingAddress,
        auth_user_id: res?.data?.auth_user_id,
        name: res?.data?.name,
        address: res?.data?.address,
        city: res?.data?.city,
        state: res?.data?.state,
        phone_number: res?.data?.phone_number,
        area_id: res?.data?.area_id
      });
      setShipId(res?.data?.id);
    }).catch((err) => {
      console.log(err)
    })
    axios.get(`${API_URL}/contact/user/${user?.user_id}`)
    .then((res) => {
      setContact({
        ...contact,
        auth_user_id: res?.data?.auth_user_id,
        name: res?.data?.name,
        address: res?.data?.address,
        city: res?.data?.city,
        state: res?.data?.state,
        phone_number: res?.data?.phone_number,
      });
      setContactId(res?.data?.id);
    }).catch((err) => {
      console.log(err)
    })
    axios.get(`${API_URL}/store/user/${user?.user_id}`)
        .then((res) => {
          console.log("areaaaaa  ", res?.data)
          setAreaId(res?.data?.area_id)
        // setContact({...contact, area_id: res?.data?.area_id})
        // setShippingAddress({...shippingAddress, area_id: res?.data?.area_id})
    })
    axios.get(`${API_URL}/product`)
    .then((res) => {
      setProducts(res?.data)
    })
  },[])

  console.log({id})

  console.log({shippingAddress})

  const totalPrice = cart?.reduce((sum, item) => sum + (parseFloat(item?.Product?.price) * item?.quantity), 0)
  const totalQuantity = cart?.reduce((sum, item) => sum + item?.quantity, 0);
  const discount = cart?.reduce((acc, { Discount }) => {
    const price = Discount ? Number(Discount?.discount_amount) : 0;
    console.log({price})
    return acc + price;
  }, 0);

  const num = cart?.length;
  let currentDate = new Date();

  console.log({areaId})

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!contactId){
      axios.post(`${API_URL}/contact`, {...contact, auth_user_id: id, area_id: areaId})
      axios.post(`${API_URL}/shippingaddress`, {...shippingAddress, auth_user_id: id, area_id: areaId})
    } else {
      axios.put(`${API_URL}/contact/${contactId}`, {...contact, area_id: areaId})
      axios.put(`${API_URL}/shippingAddress/${shipId}`, {...shippingAddress, area_id: areaId})
    }
    try {
      const orderRes = await axios.post(`${API_URL}/order`, {...order, total_amount: totalPrice+119, auth_user_id: id})
      for (const item of cart) {
        await axios.post(`${API_URL}/orderitem`, {
          order_id: orderRes?.data?.id,
          product_id: item?.Product?.id,
          quantity: item?.quantity,
          price: item?.Product?.price,
        })
        await axios.delete(`${API_URL}/shoppingcartitem/${item?.id}`)
      }
      await axios.post(`${API_URL}/invoice`, {...invoice, order_id: orderRes?.data?.id, amount: totalPrice+119, auth_user_id: id, status: 'outstanding', due_date: currentDate})
      router.push('/conformation')
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <Container maxWidth="xl" disableGutters>
    <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
      <Grid item xs>
        <Details shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} contact={contact} setContact={setContact}/>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Cart totalPrice={totalPrice} totalQuantity={totalQuantity} discount={discount} num={num} handleSubmit={handleSubmit}/>
      </Grid>
    </Grid>
    <Box py={10}>
      <Grid item xs>
        <Typography
          variant="h2"
          color="custom.orange"
          textTransform="uppercase"
          textAlign={"center"}
        >
          <Typography variant="h1" as="span" color={"inherit"}>
            Y
          </Typography>
          ou
          <Typography variant="h1" as="span" color={"inherit"}>
            &nbsp;M
          </Typography>
          ay
          <Typography variant="h1" as="span" color={"inherit"}>
            &nbsp;A
          </Typography>
          lso
          <Typography variant="h1" as="span" color={"inherit"}>
            &nbsp;L
          </Typography>
          ike
        </Typography>
      </Grid>
      <Box mt={5}>
        <ProductSlider data={!products ? [] : products?.products}/>
      </Box>
    </Box>
  </Container>
  )
};

export default CheckOut;
