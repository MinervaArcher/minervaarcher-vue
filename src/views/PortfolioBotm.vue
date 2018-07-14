<template>
  <Page
    head="Book of the Month"
    subhead="
    Book of the Month is a subcription book service that delivers curated content to users.
    From 2014&ndash;2015, I was the lead developer for the Book of the Month beta site.
    "
  >
    <ProjectBlock
      :figure="{
        src: '/img/botm_landing.png',
        alt: 'Desktop and mobile renderings of the Book of the Month landing page',
        caption: 'Book of the Month Landing Page'
        }"
    />
    <ProjectBlock
      text="
      The site was a client-rendered, multi-page app that worked seamlessly across
      mobile and desktop browsers.
      "
      :giant="true"
    />
    <ProjectBlock
      :figure="{
        src: '/img/botm_box.png',
        alt: 'Desktop and mobile renderings of the Book of the Month box page',
        caption: 'Book of the Month Box Page'
        }"
    />
    <ProjectBlock
      text="
      I ended up doing full-stack work on this site as a junior developer with
      very little oversight. As you might guess, this presented a tremendous learning curve
      for me. I wrote lots of spaghetti code and discovered many anti-patterns the hard way.
      But I also built numerous responsive layouts, an image upload tool for user avatars,
      a purchase flow, and other features that helped expand my skill set. (And I refactored
      a lot of that spaghetti code as the site approached the end of beta.)
      "
    />
    <ProjectBlock
      :figure="{
        src: '/img/botm_selections.png',
        alt: 'Desktop and mobile renderings of the Book of the Month selections page',
        caption: 'Book of the Month Selections Page'
        }"
    />
    <ProjectBlock
      text='
      For more layout examples and a thoughtful explanation of the UX decisions that
      drove them, check out <a href="http://www.nateguerra.com/#/portfolio-template-1/" target="blank">this case study</a>
      by Nate Guerra, the UX designer for the beta site.
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
  name: 'portfolioBotm',
  components: {
    Page,
    PortfolioFooter,
    ProjectBlock,
  },
};
</script>
