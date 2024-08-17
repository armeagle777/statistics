import { useState } from "react";
import { CardMedia } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Divider, ListItemIcon } from "@mui/material";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
// New dropdown  menu
import MenuButton from "@mui/joy/MenuButton";
import JoyMenu from "@mui/joy/Menu";
import JoyMenuItem from "@mui/joy/MenuItem";
import Apps from "@mui/icons-material/Apps";
import Dropdown from "@mui/joy/Dropdown";

import "./Header.styles.css";
import { CitizenshipMenuNavigations } from "./Header.constants";

const settings = ["Profile", "Users", "Logout"];

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const open = Boolean(anchorElUser);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const createHandleClose = (index) => () => {
    if (typeof index === "number") {
      setSelectedIndex(index);
      navigate(CitizenshipMenuNavigations[index]);
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const selectedSettings = {
    selected: true,
    variant: "soft",
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    /> */}
          <CardMedia
            component="img"
            sx={{ width: 50 }}
            image="/logo.png"
            alt="logo"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              width: 400,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 300,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ՀՀ Միգրացիոն ծառայություն
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              alignItems: "center",
            }}
          >
            <Dropdown>
              <MenuButton startDecorator={<Apps />}>Քաղաքացիություն</MenuButton>
              <JoyMenu className="dropdown-menu">
                <JoyMenuItem
                  {...(selectedIndex === 0 && selectedSettings)}
                  onClick={createHandleClose(0)}
                >
                  Ընդհանուր
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 1 && selectedSettings)}
                  onClick={createHandleClose(1)}
                >
                  Շնորհում
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 2 && selectedSettings)}
                  onClick={createHandleClose(2)}
                >
                  Դադարեցում
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 3 && selectedSettings)}
                  onClick={createHandleClose(3)}
                >
                  Ճանաչում
                </JoyMenuItem>
              </JoyMenu>
            </Dropdown>
            <Dropdown>
              <MenuButton startDecorator={<Apps />}>Ապաստան</MenuButton>
              <JoyMenu className="dropdown-menu">
                <JoyMenuItem
                  {...(selectedIndex === 4 && selectedSettings)}
                  onClick={createHandleClose(4)}
                >
                  Ընդհանուր
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 5 && selectedSettings)}
                  onClick={createHandleClose(5)}
                >
                  Դիմումներ
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 6 && selectedSettings)}
                  onClick={createHandleClose(6)}
                >
                  Որոշումներ
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 7 && selectedSettings)}
                  onClick={createHandleClose(7)}
                >
                  Ըստ Տարիների
                </JoyMenuItem>
              </JoyMenu>
            </Dropdown>
            <Dropdown>
              <MenuButton startDecorator={<Apps />}>Կացություն</MenuButton>
              <JoyMenu className="dropdown-menu">
                <JoyMenuItem
                  {...(selectedIndex === 8 && selectedSettings)}
                  onClick={createHandleClose(8)}
                >
                  ԺԿԿ
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 9 && selectedSettings)}
                  onClick={createHandleClose(9)}
                >
                  ՄԿԿ
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 10 && selectedSettings)}
                  onClick={createHandleClose(10)}
                >
                  ՀԿԿ
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 11 && selectedSettings)}
                  onClick={createHandleClose(11)}
                >
                  WP
                </JoyMenuItem>
              </JoyMenu>
            </Dropdown>
            <Dropdown>
              <MenuButton startDecorator={<Apps />}>Սահմանահատում</MenuButton>
              <JoyMenu className="dropdown-menu">
                <JoyMenuItem
                  {...(selectedIndex === 12 && selectedSettings)}
                  onClick={createHandleClose(12)}
                >
                  Ընդհանուր
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 13 && selectedSettings)}
                  onClick={createHandleClose(13)}
                >
                  Ըստ Երկրների
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 14 && selectedSettings)}
                  onClick={createHandleClose(14)}
                >
                  Ըստ Ժամանակահատվածի
                </JoyMenuItem>
              </JoyMenu>
            </Dropdown>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link to="/statistics/deals">Գործարքներ</Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link to="/statistics/profile">Պրոֆիլ</Link>
            </Button>
            <Dropdown>
              <MenuButton startDecorator={<Apps />}>
                Հաշվետվություններ
              </MenuButton>
              <JoyMenu className="dropdown-menu">
                <JoyMenuItem
                  {...(selectedIndex === 15 && selectedSettings)}
                  onClick={createHandleClose(15)}
                >
                  Ընդհանուր
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 16 && selectedSettings)}
                  onClick={createHandleClose(16)}
                >
                  Ապաստան
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 17 && selectedSettings)}
                  onClick={createHandleClose(17)}
                >
                  Քաղաքացիություն
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 18 && selectedSettings)}
                  onClick={createHandleClose(18)}
                >
                  Կացություն
                </JoyMenuItem>
                <JoyMenuItem
                  {...(selectedIndex === 19 && selectedSettings)}
                  onClick={createHandleClose(19)}
                >
                  Սահմանահատում
                </JoyMenuItem>
              </JoyMenu>
            </Dropdown>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleOpenUserMenu}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  alt="Remy Sharp"
                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              id="account-menu"
              open={open}
              onClose={handleCloseUserMenu}
              onClick={handleCloseUserMenu}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
