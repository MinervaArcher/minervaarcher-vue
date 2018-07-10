<template>
  <footer class="footer">
    &copy; {{year}} Minerva Archer.
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
.footer {
  padding: 1.5rem;
  text-align: center;
}

@media (min-width: 800px) {
  .footer {
    padding: 3rem;
  }
}
</style>
