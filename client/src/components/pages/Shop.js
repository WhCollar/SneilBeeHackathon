import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ShopCard from '../ShopCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsFromServer, setPruductsByCategory } from '../../store/shop/actionsCreators';

export default function Shop() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.shop.productsWithCategories);

  const [activeCatigory, setActiveCatigory] = React.useState(null);

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const setCategory = (event, category) => {
    setActiveCatigory(category);
    dispatch(setPruductsByCategory(category));
  };

  React.useEffect(() => {
    dispatch(loadProductsFromServer());
    dispatch(setPruductsByCategory(activeCatigory));
  }, [activeCatigory, dispatch]);

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 500, bgcolor: '#F5F5F5', margin: '30px auto', mt: 14 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Поиск"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Card>
      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        {catigories.map((category, idx) => (
          <Button
            key={category + idx}
            variant={category === activeCatigory ? 'contained' : 'outlined'}
            sx={{ ml: 1, mr: 1, mt: 1 }}
            onClick={(event) => setCategory(event, category)}
          >
            {category}
          </Button>
        ))}
        <Button
          variant='outlined'
          sx={{ ml: 1, mr: 1, mt: 1 }}
          onClick={(event) => setCategory(event, null)}>
            <CloseIcon />
          </Button>
      </Grid>

      <Grid container justifyContent="center" sx={{ mt: 10, maxWidth: 1600, ml: 'auto', mr: 'auto' }}>
        {products.map((item) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </Grid>

      {/* <Typography>Page: {page}</Typography> */}
      <Card sx={{ maxWidth: 500, bgcolor: '#F5F5F5', margin: '20px auto' }}>
        <CardActions>
          <Stack spacing={2} sx={{ margin: '0 auto' }}>
            <Pagination count={10} page={page} onChange={handleChange} />
          </Stack>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const catigories = ['Худи', 'Кружки', 'Зонты', 'Футболки', 'Стикеры'];
