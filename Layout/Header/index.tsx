import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  MenuItem,
  Menu,
  Tooltip,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { profile_pic } from "@/Api/Axios/Axios";
import { logout } from "@/Toolkit/authSlice";

const pages = ["category","services"];
const aboutSubPages = [
  { name: "My Team", path: "/cms/team" },
  { name: "Testimonials", path: "/cms/testimonial" },
];
const blogsubpages = [
  {
    name: "All Blogs",
    path: "/cms/allblogs",
  },
  {
    name: "Letest Post",
    path: "/cms/letestpost",
  },
  { name: "Courses", path: "/cms/courses" },
];
const settings = ["login", "register","updatepassword"];

export default function Header() {
  const [token, setToken] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);

  const cookie = new Cookies();
  const dispatch = useDispatch();
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElAbout, setAnchorElAbout] = useState<null | HTMLElement>(null);
  const [anchorElBlogs, setAnchorElBlogs] = useState<null | HTMLElement>(null);

  useEffect(() => {
    setToken(cookie.get("token"));
    setImage(cookie.get("photo"));
    setFirstName(cookie.get("first_name"));
  }, [cookie]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);
  const handleOpenAboutMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElAbout(event.currentTarget);
  const handleOpenBlogMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElBlogs(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleCloseAboutMenu = () => setAnchorElAbout(null);
  const handleCloseBlogMenu = () => setAnchorElBlogs(null);
  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/login");
  };
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#3E2F5B", marginBottom: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 300,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BlogSquare
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    href="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={`/cms/${page.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleOpenBlogMenu}>
                <Typography textAlign="center" style={{ color: "inherit" }}>
                  Blogs
                </Typography>
              </MenuItem>
              <Menu
                anchorEl={anchorElBlogs}
                open={Boolean(anchorElBlogs)}
                onClose={handleCloseBlogMenu}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {blogsubpages.map(({ name, path }) => (
                  <MenuItem key={name} onClick={handleCloseBlogMenu}>
                    <Typography textAlign="center">
                      <Link
                        href={path}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}{" "}
              </Menu>
              {/* "About Us" Dropdown */}
              <MenuItem onClick={handleOpenAboutMenu}>
                <Typography textAlign="center" style={{ color: "inherit" }}>
                  About Us
                </Typography>
              </MenuItem>
              <Menu
                anchorEl={anchorElAbout}
                open={Boolean(anchorElAbout)}
                onClose={handleCloseAboutMenu}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {aboutSubPages.map(({ name, path }) => (
                  <MenuItem key={name} onClick={handleCloseAboutMenu}>
                    <Typography textAlign="center">
                      <Link
                        href={path}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button href="/" style={{ textDecoration: "none", color: "white" }} sx={{ my: 2, color: "white" }}>
             
                Home
             
            </Button>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, color: "white" }} href={`/cms/${page.toLowerCase()}`}
              style={{ textDecoration: "none", color: "white" }}>
               
                  
                
                  {page}
                
              </Button>
            ))}
              <Button
              sx={{ my: 2, color: "white" }}
              onClick={handleOpenBlogMenu}
            >
              
              Blogs
            </Button>
            <Menu
              anchorEl={anchorElBlogs}
              open={Boolean(anchorElBlogs)}
              onClose={handleCloseBlogMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              {blogsubpages.map(({ name, path }) => (
                <MenuItem key={name} onClick={handleCloseBlogMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* About Us Dropdown Trigger */}
            <Button
              sx={{ my: 2, color: "white" }}
              onClick={handleOpenAboutMenu}
            >
              About Us
            </Button>
            <Menu
              anchorEl={anchorElAbout}
              open={Boolean(anchorElAbout)}
              onClose={handleCloseAboutMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              {aboutSubPages.map(({ name, path }) => (
                <MenuItem key={name} onClick={handleCloseAboutMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {token && (
            <Typography
              sx={{
                marginRight: "20px",
                color: "#90e0ef",
                fontFamily: "Sofadi One",
                fontSize: "20px",
              }}
            >
              <b>Hello, {firstName}</b>
            </Typography>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img
                  style={{ width: 40, height: 40, borderRadius: "50%" }}
                  src={
                    token
                      ? image
                        ? profile_pic(image)
                        : ""
                      : "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
                  }
                  alt="Profile"
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{ mt: "45px" }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={`/auth/${setting.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {setting === "login" && token ? (
                        <Button onClick={handleLogout}>Logout</Button>
                      ) : (
                        <Button>{setting}</Button>
                      )}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
