import { Box, Container } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { Outlet } from "react-router-dom";
import { AccountMenu, Navbar, Sidebar } from "../../../views";

export default function DashboardPage() {
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [menu, setMenu] = useState<HTMLElement | null>(null);

  function handleMenu(event: MouseEvent<HTMLButtonElement>) {
    setMenu(event.currentTarget);
  }
  return (
    <Box>
      <Sidebar sidebar={sidebar} handleSidebar={() => setSidebar(!sidebar)} />
      <AccountMenu handleClose={() => setMenu(null)} anchorEl={menu} />
      <Navbar
        handleAccountMenu={handleMenu}
        sidebar={true}
        handleSidebar={() => setSidebar(!sidebar)}
      />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
}
