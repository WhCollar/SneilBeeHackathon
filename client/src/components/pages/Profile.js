import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ForestIcon from '@mui/icons-material/Forest';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/user/actionsCreators';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);

  const navigate = useNavigate();
  if (!localStorage.user) navigate('/');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  React.useEffect(() => dispatch(getUser()), [dispatch, navigate]);

  return (
    <Grid container sx={{ mt: 12, flexDirection: 'column', alignItems: 'center' }}>    
      <Card sx={{ width: 600, margin: '20px auto' }}>
        <Avatar
          alt={user.first_name + ' ' + user.last_name}
          src="https://loremflickr.com/g/240/240/dog" 
          sx={{ width: 200, height: 200, margin: '30px auto' }}
        />
        <Typography variant="h4" sx={{ textAlign: 'center' }}>{user.first_name + ' ' + user.last_name}</Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: '300' }}>— {user.status}</Typography>
        <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Button variant="contained" sx={{ margin: '10px'}}>Мой сад<ForestIcon sx={{ ml: 1 }} /></Button>
          <Button variant="contained">Коллекция</Button>
        </CardActions>
      </Card>
      <Box sx={{ borderRadius: '6px', boxShadow: 1, backgroundColor: '#FFFFFF', mt: 2, width: 600, minHeight: 400 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Списания" {...a11yProps(0)} />
            <Tab label="Зачисления" {...a11yProps(1)} />
            <Tab label="Покупки" {...a11yProps(2)} />
          </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
              Здесь будет Ваша история списаний
            </TabPanel>
            <TabPanel value={value} index={1}>
              Здесь будет Ваша история зачислений
            </TabPanel>
            <TabPanel value={value} index={2}>
              Здесь будет ваша история покупок
            </TabPanel>
          </Box>
    </Grid>
  );
}
