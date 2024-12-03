import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Drawer, IconButton, Typography, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface SidebarProps {
  selectedCategory: string;
  handleSelectCategory: (id: string) => void;
  categories: { _id: string; category: string }[] | undefined; // Accept fetched categories
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, handleSelectCategory, categories }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sidebar content
  const drawer = (
    <Box sx={{ width: 250, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      <List>
        {categories?.map((category) => (
          <ListItem
            button
            key={category._id}
            onClick={() => {
              handleSelectCategory(category._id);
              setMobileOpen(false); // Close drawer on mobile when category is selected
            }}
            sx={{
              backgroundColor: selectedCategory === category._id ? '#f4f4f4' : 'transparent',
              borderRadius: '4px',
            }}
          >
            <ListItemText primary={category.category} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      {/* Menu icon for mobile screens */}
      <Hidden mdUp>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: 2, mt: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>

      {/* Drawer for mobile */}
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 250,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      {/* Sidebar for desktop */}
      <Hidden mdDown>
        <Box sx={{ width: 250, position: 'fixed', height: '100vh', overflowY: 'auto' }}>
          {drawer}
        </Box>
      </Hidden>
    </Box>
  );
};

export default Sidebar;
