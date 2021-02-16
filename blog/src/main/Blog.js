import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    backgroundColor: 'yellow'
  },
  wrapper:{
    backgroundColor: 'rgb(230, 247, 255)',
    
  }
}));

const sections = [
  { title: 'Technology', url: '/blog/technology' },
  { title: 'Travel', url: '/blog/travel' },
  { title: 'Social', url: '/blog/social' },
  { title: 'Sport', url: '/blog/sport' },
  { title: 'Politic', url: '/blog/politic' },
  { title: 'Philosophy', url: '/blog/philosophy' },
  { title: 'Literature', url: '/blog/literature' },
  { title: 'Education', url: '/blog/education' },
  { title: 'Economy', url: '/blog/economy' },
  { title: 'Other', url: '/blog/other' },
];


export default function Blog() {
  const classes = useStyles();
  const [list, setList] = useState('')

  useEffect(async () => {
    const respond = await axios.get('https://sahinblog.herokuapp.com/list')
    setList(respond.data.results)
  }, [])

  var randomItem = list ? list[Math.floor(Math.random() * list.length)] : console.log('no item')
  var randomItem2 = list ? list[Math.floor(Math.random() * list.length)] : console.log('no item')
  var randomItem3 = list ? list[Math.floor(Math.random() * list.length)] : console.log('no item')
  var randomItem4 = list ? list[Math.floor(Math.random() * list.length)] : console.log('no item')
  var randomItem5 = list ? list[Math.floor(Math.random() * list.length)] : console.log('no item')
  var randomItem6 = list ? list[Math.floor(Math.random() * list.length)] : console.log('no item')
  var randomItem7 = list ? list[Math.floor(Math.random() * list.length)] : console.log('no item')

  const featuredPosts = [
    {
      title: randomItem2?.title,
      date: new Date(randomItem2?.publish_date).toUTCString(),
      description: randomItem2?.content.substring(0, 125) + '...',
      image: randomItem2?.image,
      imageText: 'Image Text',
      slug: randomItem2?.slug
    },
    {
      title: randomItem3?.title,
      date: new Date(randomItem3?.publish_date).toUTCString(),
      description: randomItem3?.content.substring(0, 125) + '...',
      image: randomItem3?.image,
      imageText: 'Image Text',
      slug: randomItem3?.slug
    },
    {
      title: randomItem4?.title,
      date: new Date(randomItem4?.publish_date).toUTCString(),
      description: randomItem4?.content.substring(0, 125) + '...',
      image: randomItem4?.image,
      imageText: 'Image Text',
      slug: randomItem4?.slug
    },
    {
      title: randomItem5?.title,
      date: new Date(randomItem5?.publish_date).toUTCString(),
      description: randomItem5?.content.substring(0, 125) + '...',
      image: randomItem5?.image,
      imageText: 'Image Text',
      slug: randomItem5?.slug
    },
    {
      title: randomItem6?.title,
      date: new Date(randomItem6?.publish_date).toUTCString(),
      description: randomItem6?.content.substring(0, 125) + '...',
      image: randomItem6?.image,
      imageText: 'Image Text',
      slug: randomItem6?.slug
    },
    {
      title: randomItem7?.title,
      date: new Date(randomItem7?.publish_date).toUTCString(),
      description: randomItem7?.content.substring(0, 125) + '...',
      image: randomItem7?.image,
      imageText: 'Image Text',
      slug: randomItem7?.slug
    },
  ];

  console.log('featuredpost', featuredPosts)
  const mainFeaturedPost = {
    title: randomItem?.title,
    description: randomItem?.content.substring(0, 125) + '...',
    image: randomItem?.image,
    imageText: 'main image description',
    linkText: 'Continue reading…',
    slug: randomItem?.slug
  };

  return (
    <div className={classes.wrapper}>
    <React.Fragment >
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="The Topics" sections={sections} />
        <main >
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts?.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
    </div>
  );
}
