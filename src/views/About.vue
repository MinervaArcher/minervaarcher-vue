<template>
  <Page
    head="Coding like a girl since 2013"
    subhead=""
  >
    <ProjectBlock
      :figure="{
        srcset: `
          /img/nyc_500.jpg 500w,
          /img/nyc_1000.jpg 1000w,
          /img/nyc_1500.jpg 1500w,
          /img/nyc_2000.jpg 2000w
        `,
        sizes: '100vw',
        src: '/img/nyc_2000.jpg',
        alt: `
          Black and white photo of high-rise residential buildings
          with many windows, against a background of faint fluffy clouds
        `,
        caption: 'View from the High Line, New York City'
      }"
      :giant="true"
    />
    <div class="detail-text">
      <p>
        After a few high school years dabbling around with Geocities pages,
        I went to college, majored in English, and planned to become an editor.
        I mean, sure, I worked on websites with my friends throughout college
        too, but I didn't think of myself as a programmer. Afterwards, I spent
        about a decade working in educational publishing and defense contracting.
        HTML and CSS were fun hobbies, but had very little to do with my "real job"
        aspirations. After all, programming was for computer science majors, right?
      </p>
      <p>
        But after a year and half managing a web project where I was writing
        and editing copious amounts of HTML and CSS, and begging for JavaScript
        changes that no one had time to make, I learned JavaScript and started
        editing that code too. Before long, web development became my day job,
        not just a hobby.
      </p>
      <p>
        Like most front-end developers, I'm simultaneously inspired and appalled
        by how many libraries, build tools, and new features keep emerging for
        the web. I built this site to show off a bit of what I know, and areas
        I'm interesting in pursuing further. You can check out the code for this
        site at
        <a
          href="https://github.com/MinervaArcher/minervaarcher-vue"
          target="_blank"
          noopener
          noreferrer
        >its Github repo</a>.
      </p>
      <p>
        You can find me elsewhere on the web on
        <a
          href="https://github.com/MinervaArcher"
          target="_blank"
          noopener
          noreferrer
        >Github</a>,
        <a
          href="https://about.me/minerva_archer"
          target="_blank"
          noopener
          noreferrer
        >About.me</a>,
        and
        <a
          href="https://glitch.com/@MinervaArcher"
          target="_blank"
          noopener
          noreferrer
        >Glitch</a>.
        I'm also on
        <a
          href="https:/www.linkedin.com/in/minerva-a-12a5a85b"
          target="_blank"
          noopener
          noreferrer
        >LinkedIn</a>,
        where you can view my work history if you're logged in.
      </p>
    </div>
  </Page>
</template>

<script>
import Page from '../components/Page.vue';
import ProjectBlock from '../components/ProjectBlock.vue';

export default {
  name: 'about',
  components: {
    Page,
    ProjectBlock,
  },
};
</script>

<style lang="scss">
@import '../scss/_colors.scss';

.detail-text {
  width: 100%;
  text-align: center;
  margin-bottom: 4em;

  p {
    text-align: left;
    line-height: 1.5em;
    margin: 0 auto 1em;
  }

  a {
    text-decoration: none;
    color: $gray;
    border-bottom: 1px solid $black;

    &:hover, &:focus, &:active {
      color: $black;
    }
  }
}

@media (min-width: 800px) {
  .detail-text p {
    max-width: 600px;
  }
}
</style>
