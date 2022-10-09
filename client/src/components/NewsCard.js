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
import { addLikes, SERVER_HOST } from '../store/news/actionsCreators';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useDispatch } from 'react-redux';

export default function News({ newscard }) {
  const dispatch = useDispatch();

  const [like, setLike] = React.useState({
    isLiked: newscard.isLiked,
    count: newscard.likesCount,
  });

  const handleLike = () => {
    setLike((prev) => {
      if (prev.isLiked) {
        dispatch(addLikes(newscard.id, prev.count - 1));
        return { isLiked: !prev.isLiked, count: prev.count - 1 }
      } else {
        dispatch(addLikes(newscard.id, prev.count + 1));
        return { isLiked: !prev.isLiked, count: prev.count + 1 }
      }
    });
  };

  return (
    <Card sx={{ width: 600, margin: '20px auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            <ClearAllIcon fontSize="large" />
          </Avatar>
        }
        title="Банк ВТБ"
        subheader={newscard.postDate.substr(0, 10)}
      />
      <CardMedia
        component="img"
        height="300"
        image={SERVER_HOST + '/' + newscard.imagePath}
        alt=""
      />
      <CardContent>
        <Typography variant="h5" color="text.primary" sx={{ mb: 1 }}>
          {newscard.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {newscard.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Нравится" onClick={handleLike}>
          <FavoriteIcon sx={{ mr: 1, color: like.isLiked ? 'red' : 'grey' }} />{like.count}
        </IconButton>
      </CardActions>
    </Card>
  );
}
