"use client";
import {
  IconWindmill,
  IconFileInvoice,
  IconTags,
  IconBrandCodesandbox,
  IconUser,
} from "@tabler/icons-react";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

// constant
const icons = {
  IconUser,
  IconBrandCodesandbox,
  IconWindmill,
  IconFileInvoice,
  IconTags,
  StorefrontOutlinedIcon,
};

const utilities = {
  id: "utilities",
  title: "Utilities",
  type: "group",
  children: [
    {
      id: "util-profile",
      title: "Profile",
      type: "item",
      url: "/dashboard/profile",
      icon: icons.IconUser,
      breadcrumbs: false,
    },
    {
      id: "util-orders",
      title: "My Orders",
      type: "item",
      url: "/dashboard/orders",
      icon: icons.IconBrandCodesandbox,
      breadcrumbs: false,
    },
    {
      id: "util-invoices",
      title: "Payment Methods",
      type: "item",
      url: "/dashboard/paymentMethod",
      icon: icons.IconFileInvoice,
      breadcrumbs: false,
    },

    {
      id: "util-outlets",
      title: "My Outlets",
      type: "item",
      url: "/dashboard/outlets",
      icon: icons.StorefrontOutlinedIcon,
      breadcrumbs: false,
    },
  ],
};

export default utilities;
