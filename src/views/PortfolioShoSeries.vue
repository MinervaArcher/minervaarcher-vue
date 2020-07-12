<template>
  <Page
    head="Showtime"
    subhead='
    I worked at Showtime from 2016-2018, where I worked on the 
    <a href="https://www.showtime.com" target="_blank" rel="noopener noreferrer">showtime.com</a> and 
    <a href="https://www.showtimeanytime.com" target="_blank" rel="noopener noreferrer">showtimeanytime.com</a> sites.
    One of the first major features I built at Showtime was an updated series detail page
    with bold graphics and lots of interactive scroll behavior. Check out the page for
    <a href="https://www.showtimeanytime.com/#/series/408" target="_blank" rel="noopener noreferrer">Shameless on Showtime Anytime</a>
    and watch the resizing header, changing header images, and sticky season subheads as you scroll.
    '
  >
  <ProjectBlock
    :figure="{
      srcset: `
        /img/series_desktop_500.jpg 500w,
        /img/series_desktop_1000.jpg 1000w,
        /img/series_desktop_1500.jpg 1500w,
        /img/series_desktop_2000.jpg 2000w
      `,
      src: '/img/series_desktop_2000.jpg',
      alt: `Desktop rendering of the Showtime series detail
      page with full header, using art from Patrick Melrose`,
      caption: 'Series Detail desktop view'
      }"
    :giant="true"
  />
  <ProjectBlock
    text="The end result is a dynamic user experience with responsive styles for desktop and tablet."
    :giant="true"
  />
  <ProjectBlock
    :figure="{
      srcset: `
        /img/series_ipad_pro_500.jpg 500w,
        /img/series_ipad_pro_1000.jpg 1000w
      `,
      src: '/img/series_ipad_pro_1000.jpg',
      alt: `iPad Pro rendering of the Showtime series detail
      page with shortened header on scroll, using art from Shameless`,
      caption: 'Series Detail tablet view'
      }"
  />
  <ProjectBlock
    :figure="{
      srcset: `
        /img/series_ipad_portrait_500.jpg 500w,
        /img/series_ipad_portrait_768.jpg 768w,
      `,
      src: '/img/series_ipad_portrait_768.jpg',
      alt: `iPad rendering of the Showtime series detail page, using art from I'm Dying Up Here`,
      caption: 'Series Detail tablet portrait view'
      }"
  />
  <ProjectBlock
    text="
      Because Showtime offers native apps for iOS and Android,
      most of its web layouts (including this one) aren't fully responsive.
      However, we tried to accommodate as many viewport widths as the
      design would allow.
    "
  />
  <ProjectBlock
    :figure="{
      srcset: `
        /img/series_blackberry_playbook_500.jpg 500w,
        /img/series_blackberry_playbook_1000.jpg 1000w
      `,
      src: '/img/series_blackberry_playbook_1000.jpg',
      alt: `Blackberry Playbook rendering of the Showtime series
      detail page with full header, using art from Billions`,
      caption: 'Series Detail tablet view'
      }"
  />
  <PortfolioFooter />
  </Page>
</template>

<script>
import Page from '../components/Page.vue';
import PortfolioFooter from '../components/PortfolioFooter.vue';
import ProjectBlock from '../components/ProjectBlock.vue';

export default {
  name: 'portfolioSeries',
  components: {
    Page,
    PortfolioFooter,
    ProjectBlock,
  },
};
</script>
