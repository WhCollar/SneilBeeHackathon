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
import { loadCategoriesFromServer, loadProductsWithFilter } from '../../store/shop/actionsCreators';
// import PriceSlider from '../PriceSlider';
import ButtonGroup from '@mui/material/ButtonGroup';
// import { Typography } from '@mui/material';

export default function Shop() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.shop.products);
  const categories = useSelector(state => state.shop.categories);
  // const price = useSelector(state => state.shop.price);
  // console.log(price);

  // const [value, setValue] = React.useState([0, 1]);
  // console.log(value);

  const [activeCategory, setActiveCategory] = React.useState(-1);

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const setCategory = (event, category) => {
    setActiveCategory(category);
    dispatch(loadProductsWithFilter(0, 10, category, 1));
  };

  React.useEffect(() => {
    dispatch(loadCategoriesFromServer());
    dispatch(loadProductsWithFilter(0, 10, activeCategory, page));
  }, [activeCategory, dispatch, page]);

  return (
    <React.Fragment>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid container justifyContent="center" alignItems="center" flexDirection="column">
          <Card sx={{ width: 400, margin: '30px auto', mt: 14 }}>
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
          {/* <PriceSlider value={value} setValue={setValue} /> */}
        </Grid>
        <ButtonGroup variant="text" aria-label="outlined primary button group" sx={{ maxWidth: 420 }}>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={category.id === activeCategory ? 'contained' : 'text'}
              onClick={(event) => setCategory(event, category.id)}
              >
              {category.name}
            </Button>
          ))}
        <Button
          variant='text'
          onClick={(event) => setCategory(event, -1)}>
            <CloseIcon />
          </Button>
        </ButtonGroup>
      </Grid>

      <Grid container justifyContent="center" sx={{ mt: 10, maxWidth: 1600, ml: 'auto', mr: 'auto' }}>
        {data.products && data.products.map((item) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </Grid>

      <Card sx={{ maxWidth: 500, bgcolor: '#F5F5F5', margin: '20px auto' }}>
        <CardActions>
          <Stack spacing={2} sx={{ margin: '0 auto' }}>
            <Pagination count={data.totalPages} page={page} onChange={handleChange} />
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
        width: '36ch',
      },
    },
  },
}));

// const catigories = ['Худи', 'Кружки', 'Зонты', 'Футболки', 'Стикеры'];
