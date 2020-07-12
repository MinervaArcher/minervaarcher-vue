<template>
  <Page
    head="Personal projects"
    subhead="
    I don't tend to code much outside of work, but I'm fond of one personal project in particular.
    "
  >
      <ProjectBlock
      :figure="{
        srcset: `
        /img/ymoz_500.jpg 500w,
        /img/ymoz_1000.jpg 1000w,
        /img/ymoz_1500.jpg 1500w,
        /img/ymoz_2000.jpg 2000w,
       `,
        src: '/img/ymoz_2000.jpg',
        alt: 'Screenshot of Your Moment of Zen webapp',
        caption: 'Your Moment of Zen, a Glitch app'
        }"
    />
      <ProjectBlock
      text='
      <a href="https://your-moment-of-zen.glitch.me/" target="_blank" rel="noopener noreferrer">Your Moment of Zen</a> 
      is a simple webapp I built on Glitch that uses CSS animations to guide users through taking deep calming breaths.
      The code is extremely simple &mdash; I built almost all of it in an afternoon.
      The nice folks at Glitch liked it so much, they included it in a book to spotlight their 
      <a href="https://glitch.com/glimmer/post/looky-what-we-made/" target="_blank" rel="noopener noreferrer">favorite Glitch projects of 2018<a/>.
      '
    />
    <PortfolioFooter />
  </Page>
</template>

<script>
import Page from '../components/Page.vue';
import PortfolioFooter from '../components/PortfolioFooter.vue';
import ProjectBlock from '../components/ProjectBlock.vue';

export default {
  name: 'portfolioPersonal',
  components: {
    Page,
    PortfolioFooter,
    ProjectBlock,
  },
};
</script>
