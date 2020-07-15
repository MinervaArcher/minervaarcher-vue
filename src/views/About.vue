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
        Like many front-end developers, I came to programming through a nontraditional
        path. I majored in English during college and assumed I'd become an editor.
        Even though I built simple websites throughout high school and college,
        I didn't consider myself a web developer. Most people I knew who built websites
        professionally had trained in either design or computer science&mdash;they
        didn't spend four years dissecting the Western literary canon through a feminist lens.
      </p>
      <p>
        After a decade working in other fields, I first realized engineering could be my career
        path when I spent a year and half managing a web project with limited team resources. 
        Since I was already familiar with HTML and CSS, I ended up writing and editing a lot 
        of the project's markup and stylesheets. Over time, I learned JavaScript and began fixing 
        bugs in the site's functionality. Before long, web development became my day job.
      </p>
      <p>
        While wonking out over CSS arcana remains my favorite aspect of web development, over the years
        I've grown comfortable working across the stack. As I've grown in my career, I've developed a strong interest in web accessiblity; while I'm
        by no means an expert, I'm constantly working to develop my knowledge and skills in this area.
      </p>
      <p>
        Like most front-end developers, I'm simultaneously inspired and appalled
        by how many new libraries, build tools, and APIs keep emerging for
        the web. I built this site to show off a bit of what I know, and to give myself an excuse
        to explore techniques I don't always get to practice at work. You can check out the code for 
        this site at
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
          href="https://glitch.com/@MinervaArcher"
          target="_blank"
          noopener
          noreferrer
        >Glitch</a>,
        and
        <a
          href="https://about.me/minerva_archer"
          target="_blank"
          noopener
          noreferrer
        >About.me</a>.
        I'm also on
        <a
          href="https:/www.linkedin.com/in/minerva-a-12a5a85b"
          target="_blank"
          noopener
          noreferrer
        >LinkedIn</a>,
        where my work history is visible to logged-in users.
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
