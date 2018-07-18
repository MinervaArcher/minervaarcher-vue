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

    &:hover,
    &:focus,
    &:active, {
      color: $black;
    }
  }

  &:focus {
    outline: none;

    a {
      color: $black;
    }
  }
}

.router-link-exact-active {
  border-bottom: 3px solid;
}
</style>
