"use client";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiBookAlt } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { BsPersonVideo3, BsFillCalendarCheckFill } from "react-icons/bs";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdMail,
  MdGroups,
} from "react-icons/md";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiPower, FiSettings } from "react-icons/fi";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const route = usePathname();
  const router = useRouter();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="bg-darkBlue">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <HiMenuAlt1 />
          </IconButton>
          <Link href="/">
            <Typography variant="h6" noWrap component="div">
            Building Blocks Panel
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <MdOutlineKeyboardArrowRight />
            ) : (
              <MdOutlineKeyboardArrowLeft />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Books", "Users", "Grades"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "block" }}
              className={
                route === "/" + text.toLowerCase()
                  ? "bg-purple text-light rounded-xl"
                  : ""
              }
            >
              <Link href={"/" + text?.toLowerCase()}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  title={text}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                    className="text-2xl"
                  >
                    {index === 0 ? (
                      <BiBookAlt />
                    ) : index === 1 ? (
                      <MdGroups />
                    ) : index === 2 ? (
                      <GiTeacher />
                    ) : index === 3 ? (
                      <BsPersonVideo3 />
                    ) : index === 4 ? (
                      <BsFillCalendarCheckFill />
                    ) : index === 5 ? (
                      <MdMail />
                    ) : index === 6 ? (
                      <FiSettings />
                    ) : (
                      <FiPower />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}

          {/* logout button */}
          {/* <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            title="Logout"
            onClick={() => {
              router.push("/login");
              signOut();
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
              className="text-2xl"
            >
              <FiPower />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton> */}
        </List>
      </Drawer>
    </Box>
  );
}
