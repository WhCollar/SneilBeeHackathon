import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { logout } from '../store/user/actionsCreators';
import { useDispatch } from 'react-redux';

export default function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutUser = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <AppBar position="fixed">
      <Container >
        <Toolbar disableGutters>
          <ClearAllIcon fontSize="large" sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 6,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MORE.Tech 4.0
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={() => {
                handleCloseNavMenu();
                navigate('/');
              }}>
                <Typography textAlign="center">Новости</Typography>
              </MenuItem>
              <MenuItem onClick={() => {
                handleCloseNavMenu();
                navigate('/shop');
              }}>
                <Typography textAlign="center">Магазин</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <ClearAllIcon fontSize="large" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MORE.Tech 4.0
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              color="secondary"
              onClick={() => navigate('/')}
              sx={{ my: 2, display: 'block' }}
            >
              Новости
            </Button>
            <Button
              color="secondary"
              onClick={() => navigate('/shop')}
              sx={{ my: 2, display: 'block' }}
            >
              Магазин
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Открыть меню профиля">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar><PersonIcon fontSize='large' /></Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {localStorage.user && (
                <MenuItem onClick={() => {
                  handleCloseUserMenu();
                  navigate('/profile');
                }}>
                  <Typography textAlign="center">Профиль</Typography>
                </MenuItem>
              )}
              {localStorage.user && (
                <MenuItem onClick={() => {
                  handleCloseUserMenu();
                  navigate('/cart');
                }}>
                  <Typography textAlign="center">Корзина</Typography>
                </MenuItem>
              )}
              {!localStorage.user && (
                <MenuItem onClick={() => {
                  handleCloseUserMenu();
                  navigate('/login');
                }}>
                  <Typography textAlign="center">Вход</Typography>
                </MenuItem>
              )}
              {!localStorage.user && (
                <MenuItem onClick={() => {
                  handleCloseUserMenu();
                  navigate('/registration');
                }}>
                  <Typography textAlign="center">Регистрация</Typography>
                </MenuItem>
              )}
              {localStorage.user && (
                <MenuItem onClick={() => {
                  handleCloseUserMenu();
                  logoutUser();
                }}>
                  <Typography textAlign="center">Выход</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
