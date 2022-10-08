import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import SendIcon from '@mui/icons-material/Send';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import ForestIcon from '@mui/icons-material/Forest';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const navigate = useNavigate();

  if (!localStorage.user) navigate('/');

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

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function Profile() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Grid container justifyContent="center" sx={{ mt: 10 }}>    
      <Card sx={{ width: 600, margin: '20px auto' }}>
        <Avatar
          alt="Котова Анастасия"
          src="https://loremflickr.com/g/240/240/dog" 
          sx={{ width: 200, height: 200, margin: '10px auto' }}
        />
        <Typography variant="h4" sx={{ textAlign: 'center' }}>Котова Анастасия</Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: '300' }}>— More. Tech 4.0</Typography>
        <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" sx={{ margin: '10px'}}>Мой сад<ForestIcon sx={{ ml: 1 }} /></Button>
          <Button variant="contained">Коллекция</Button>
        </CardActions>
        {/* <CardContent> */}
          {/* <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Списания" {...a11yProps(0)} />
                <Tab label="Зачисления" {...a11yProps(1)} />
                <Tab label="Покупки" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary="Вы перевели 15 ВТБ-COIN Виктору" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary="Вы перевели 30 ВТБ-COIN Александру" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Здесь будет Ваша история зачислений
            </TabPanel>
            <TabPanel value={value} index={2}>
              Здесь будет ваша история покупок
            </TabPanel>
          </Box> */}
        {/* </CardContent> */}
      </Card>
    </Grid>
  );
}
