import React, { useEffect,useState } from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));
export default function View() {
    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClear = () => {
    localStorage.removeItem('Plant'); // Clear the specific item from localStorage
    setData([]); // Reset the data state to an empty array
  };

  const handleDeleteClick = () => {
    setDialogOpen(true);     //step 6.2.1
    handleMenuClose();
  };
const [dialogOpen, setDialogOpen] = useState(false);

  const [data,setData]=useState([])
  useEffect(()=>{
    const storeData = JSON.parse(localStorage.getItem('Plant'));
    if(storeData){
      setData(storeData);
    }
  },[])
  
  console.log(data,"data")
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDeleteConfirm = async () => {
    const idd = deleteid;
    const updatedData = data.filter((e) => e.p_id !== idd);
    setData(updatedData);
    await localStorage.setItem('Plant', JSON.stringify(updatedData));
    setDeleteid(null);
    setDialogOpen(false);
  };

  const [deleteid, setDeleteid] = useState(null);

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setDeleteid(id);      //step 7 declare state
  };

  return (
    <div>
      <Grid container spacing={2}>
      {data.map((card, index) => ( 
      <Grid item xs={12}>

      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <>
         
          <IconButton aria-label="settings" onClick={(event) => handleMenuClick(event, card.p_id)}>
            <MoreVertIcon />
          </IconButton>

<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
{/* <MenuItem onClick={handleUpdate}>Update</MenuItem> */}
 {/* step 6.2 */}
<MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
         </Menu>
</>
        }
        // title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
        title={card.name}
      />
      <CardMedia
        component="img"
        height="194"
        // image="data:image/jpeg;base64,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"
        // alt="Paella dish"
        image={card.image}
        alt={card.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {/* This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like. */}
          availability:{card.availability}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            {/* Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes. */}
          </Typography>
          Description:{card.description}
          <Typography sx={{ marginBottom: 2 }}>
            {/* Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. */}
          </Typography>
          Price:{card.price}
          <Typography sx={{ marginBottom: 2 }}>
            {/* Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.) */}
          </Typography>
          <Typography>
            {/* Set aside off of the heat to let rest for 10 minutes, and then serve. */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
      ))}
      </Grid>
      <Dialog open={dialogOpen} onClose={handleDialogClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{'Are you sure you want to delete this item?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone. Please confirm if you want to delete this item.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            No
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      
      <Button variant="contained" color="secondary" onClick={handleClear} fullWidth sx={{ mt: 2 }}>
        Clear All Data
      </Button>
    </div>
  )
      
}
