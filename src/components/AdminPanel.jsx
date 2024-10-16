// src/components/AdminPanel.jsx
import React from 'react';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
} from '@mui/material';
import {
  Menu,
  Dashboard,
  Person,
  CalendarToday,
  Contacts,
  Assessment,
  ExitToApp,
  Notifications,
} from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import Appointments from './Appointments';
import Users from './Users';
import CRM from './CRM';
import Reports from './Reports';
import Logout from './Logout';


// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const drawerWidth = 240;

const AdminPanel = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Dummy user data
  const user = {
    name: 'John Doe',
    notifications: 3,
  };

  // Dummy data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Users',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Appointments',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to="/admin/dashboard">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/appointments">
          <ListItemIcon>
            <CalendarToday />
          </ListItemIcon>
          <ListItemText primary="Appointments" />
        </ListItem>
        <ListItem button component={Link} to="/admin/users">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/admin/crm">
          <ListItemIcon>
            <Contacts />
          </ListItemIcon>
          <ListItemText primary="CRM" />
        </ListItem>
        <ListItem button component={Link} to="/admin/reports">
          <ListItemIcon>
            <Assessment />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button component={Link} to="/admin/logout">
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              Welcome, {user.name}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={user.notifications} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                {user.name.charAt(0)}
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        variant="permanent"
        anchor="left"
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 8 }} // mt: 8 is to account for AppBar height
      >
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/appointments" element={<Appointments />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/crm" element={<CRM />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/logout" element={<Logout />} />
        </Routes>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            User and Appointment Statistics
          </Typography>
          <Bar data={data} options={{ responsive: true }} />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminPanel;
