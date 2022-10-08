import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function News() {
  return (
    <Card sx={{ width: 600, margin: '20px auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="MORE.Tech 4.0"
        subheader="Октябрь 7-9, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://loremflickr.com/320/240"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Веб-сервис с элементами геймификации для вовлечения сотрудников Банка ВТБ во внутрикорпоративные активности
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Нравится">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
