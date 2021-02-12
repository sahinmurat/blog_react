import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
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

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};


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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="The Topics" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts?.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {/* The Section of thr two pictures */}
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
