import React, { useContext } from 'react';
import { StyledPostTitle } from './Card.style'
import { FaRegEye } from 'react-icons/fa'
import { FaRegComments } from 'react-icons/fa'
import { FcLike } from "react-icons/fc"
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../App'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10px',
        maxWidth: 345,
        cursor: 'pointer',
        borderRadius: '25px',
        height: '56.25%',

    },
    media: {
        height: 0,
        paddingTop: '56.25%', 
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),

    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[600],
    },
    icons: {
        margin: 'auto'
    }
}));

export default function RecipeReviewCard({ item }) {

    const avatar = item.author.charAt(0)
    const history = useHistory();
    const { auth } = useContext(AuthContext);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const date = new Date(item.publish_date)
    const time = date.toUTCString();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root} onClick={() => history.push(`/detail/${item.slug}`)}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {avatar}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={item.title}
                subheader={time}
            />
            <CardMedia
                className={classes.media}
                image={item.image}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.content.substring(0, 155)}  ...
                 </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <StyledPostTitle className={classes.icons}> <FcLike />{item.like_count} < FaRegComments style={{ paddingLeft: 10 }} /> {item.comment_count} < FaRegEye style={{ paddingLeft: 10 }} />  {item.view_count} </StyledPostTitle>
            </CardActions>
        </Card>
    );
}

