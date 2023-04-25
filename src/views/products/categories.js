"use client";
// import NextLink from "next/link";
// import {
//   Grid,
//   Typography,
//   Box,
//   List,
//   ListItem,
//   IconButton,
//   Collapse,
// } from "@mui/material";
// import useSWR from "swr";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import { API_URL } from "@/configuration";

// const fetcher = (url) => fetch(url).then((res) => res.json());
// const Categories = () => {
//   const { data } = useSWR(`${API_URL}/category/`, fetcher);
//   return (
//     <Grid
//       item
//       xs={3}
//       display={{ xs: "none", md: "flex" }}
//       container
//       justifyContent={"center"}
//       direction="column"
//       padding={"15px"}
//       bgcolor="custom.grayLight"
//     >
//       <Typography
//         variant="h6"
//         color="primary"
//         fontWeight={700}
//         letterSpacing="0.8px"
//         textTransform={"uppercase"}
//         lineHeight="38px"
//       >
//         Categories
//       </Typography>
//       <Box px={2}>
//         {data?.categories.map((category) => (
//           <List key={category.id}>
//             <ListItem disablePadding sx={{ mb: 1 }}>
//               <NextLink
//                 href={`/categories/${category.slug}` ?? "#"}
//                 style={{ textDecoration: "none" }}
//               >
//                 <Typography color="primary" fontWeight={"bold"}>
//                   {category.title}
//                 </Typography>
//               </NextLink>
//               {category.children && (
//                 <Box display={"flex"} flex={1} justifyContent="flex-end">
//                   <IconButton>
//                     <ArrowForwardIosIcon color="primary" fontSize={"small"} />
//                   </IconButton>
//                 </Box>
//               )}
//             </ListItem>
//             {category.children?.map((item) => {
//               return (
//                 <div key={item.id}>
//                   {item.subitems != null ? (
//                     <div key={item.id}>
//                       <ListItem key={item.id} disablePadding sx={{ pl: 2 }}>
//                         <NextLink
//                           href={`/categories/${item.slug}` ?? "#"}
//                           style={{ textDecoration: "none" }}
//                         >
//                           <Typography color="primary" variant="subtitle1">
//                             {item.name}
//                           </Typography>
//                         </NextLink>
//                         <Box
//                           display={"flex"}
//                           flex={1}
//                           justifyContent="flex-end"
//                         >
//                           <IconButton>
//                             <ArrowForwardIosIcon
//                               color="primary"
//                               fontSize={"small"}
//                             />
//                           </IconButton>
//                         </Box>
//                       </ListItem>
//                       <Collapse
//                         component="li"
//                         in={true}
//                         timeout="auto"
//                         unmountOnExit
//                       >
//                         <List>
//                           {item.subitems.map((sitem) => {
//                             return (
//                               <ListItem key={sitem.id} sx={{ pl: 5 }}>
//                                 <NextLink
//                                   href={`/categories/${sitem.slug}` ?? "#"}
//                                   style={{ textDecoration: "none" }}
//                                 >
//                                   <Typography
//                                     color="primary"
//                                     variant="subtitle2"
//                                   >
//                                     {sitem.name}
//                                   </Typography>
//                                 </NextLink>
//                               </ListItem>
//                             );
//                           })}
//                         </List>
//                       </Collapse>
//                     </div>
//                   ) : (
//                     <ListItem key={item.id}>
//                       <NextLink
//                         href={`/categories/${item.slug}` ?? "#"}
//                         style={{ textDecoration: "none" }}
//                       >
//                         <Typography color="primary" variant="subtitle1">
//                           {item.name}
//                         </Typography>
//                       </NextLink>
//                     </ListItem>
//                   )}
//                 </div>
//               );
//             })}
//           </List>
//         ))}
//       </Box>
//     </Grid>
//   );
// };
// export default Categories;

import React, { useState } from "react";
import NextLink from "next/link";
import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  IconButton,
  Collapse,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import useSWR from "swr";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { API_URL } from "@/configuration";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Categories = ({gri}) => {
  const { data } = useSWR(`${API_URL}/category/`, fetcher);
  // const [expanded, setExpanded] = useState(false);

  // const handleAccordionChange = () => {
  //   setExpanded(!expanded);
  // };
  const [expanded, setExpanded] = useState([]);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log({data})
  return (
    <Grid
      item
      xs={gri}
      display={{ xs: "none", md: "flex" }}
      container
      justifyContent={"center"}
      direction="column"
      padding={"15px"}
      bgcolor="custom.grayLight"
    >
      <Typography
        variant="h6"
        color="primary"
        fontWeight={700}
        letterSpacing="0.8px"
        textTransform={"uppercase"}
        lineHeight="38px"
      >
        Categories
      </Typography>
      <Box px={2}>
        {data?.categories.map((category) => (
          <Accordion
            key={category.id}
            expanded={expanded === category.id}
            onChange={handleAccordionChange(category.id)}
            // key={category.id}
            // expanded={expanded}
            // onChange={handleAccordionChange}
          >
            <AccordionSummary
                  expandIcon={
                    expanded === category.id ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore color="primary" />
                    )
                  }
              // expandIcon={
              //   expanded ? <ExpandLess /> : <ExpandMore color="primary" />
              // }
            >
              <div
                // href={"#"}
                // style={{ textDecoration: "none" }}
              >
                <Typography color="primary" fontWeight={"bold"}>
                  {category.title}
                </Typography>
              </div>
            </AccordionSummary>
            {category.children?.map((item) => (
              <AccordionDetails key={item?.id}>
                {item.subitems != null ? (
                  <Box>
                    <List disablePadding>
                      <ListItem sx={{ pl: 2 }}>
                        <NextLink
                          href={`/categories/${item?.slug}` ?? "#"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography color="primary" variant="subtitle1">
                            {item?.name}
                          </Typography>
                        </NextLink>
                      </ListItem>
                      {item?.subitems?.map((sitem) => (
                        <ListItem key={sitem.id} sx={{ pl: 5 }}>
                          <NextLink
                            href={`/categories/${sitem?.slug}` ?? "#"}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              color="primary"
                              variant="subtitle2"
                            >
                              {sitem?.name}
                            </Typography>
                          </NextLink>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ) : (
                  <List disablePadding>
                    <ListItem>
                      <NextLink
                        href={`/categories/${item?.id}` ?? "#"}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography color="primary" variant="subtitle1">
                          {item.name}
                        </Typography>
                      </NextLink>
                    </ListItem>
                  </List>
                )}
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Box>
    </Grid>
  );
};

export default Categories;