import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FacebookPostDialog from "./FacebookPostDialog";
import TenantProfileDialog from "../tenantComponents/TenantProfileDialog";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ApartmentBillsDialog from "../ElectiricCalculateComponents/ApartmentBillsDialog";
import WaterBillsDialog from "../WaterCalculateComponents/WaterBillsDialog";

const ITEM_HEIGHT = 48;

export default function ButtonsMenu({ agreement }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon fontSize="large" color="primary" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            height: "430px",
            width: "80px",
            backgroundColor: "#F8F8FF",
            marginTop: "60px",
          },
        }}
      >
        <div className="justify-content-center">
          <MenuItem className="justify-content-center">
            <FacebookPostDialog />
          </MenuItem>
          <MenuItem onClick={handleClose} className="justify-content-center">
            <a href={agreement} target="_blank">
              <FindInPageIcon
                color="primary"
                style={{ width: "50px", height: "50px" }}
              />
            </a>
          </MenuItem>
          <MenuItem className="justify-content-center">
            <TenantProfileDialog />
          </MenuItem>
          <MenuItem className="justify-content-center">
            <ApartmentBillsDialog />
          </MenuItem>
          <MenuItem className="justify-content-center">
            <WaterBillsDialog />
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
