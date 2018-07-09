<template>
  <li
  class="header__menu-item"
  role="none"
  @keyup="$emit('keyup', $event)"
  >
    <router-link
    :to="url"
    @click.native="$emit('click', $event)"
    role="menuitem"
    >
    {{name}}
  </router-link>
  </li>
</template>

<script>
export default {
  name: 'AppHeaderMenuItem',
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
    url: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '../scss/_colors.scss';
@import '../scss/_fonts.scss';

.header__menu-item {
  a {
    color: $gray;
    text-decoration: none;
  }

  &:focus {
    outline: none;

    a {
      color: $black;
      font-family: 'Open Sans Bold';
    }
  }

  a:hover,
  a:focus,
  a:active, {
    color: $black;
    font-family: 'Open Sans Bold';
  }

  .router-link-exact-active {
    text-decoration: underline;
  }
}
</style>
