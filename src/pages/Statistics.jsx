import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";

const Statistics = () => {
  return (
    <Grid container style={{ padding: 20 }}>
      <Grid item xs={12} md={12} lg={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Statistics;
