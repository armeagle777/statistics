import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenDropdown = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
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
    </div>
  );
};

export default DropdownMenu;
