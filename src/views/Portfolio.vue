<template>
  <Page
  head="Minerva Archer is a front-end web developer in New York."
  >
    <ProjectPreview
      v-for="item in items"
      v-bind="item"
      :key="item.id"
      />
  </Page>
</template>

<script>
import portfolio from '../data/portfolioItems';
import Page from '../components/Page.vue';
import ProjectPreview from '../components/ProjectPreview.vue';

export default {
  name: 'portfolio',
  components: {
    Page,
    ProjectPreview,
  },
  data() {
    return portfolio;
  },
};
</script>
