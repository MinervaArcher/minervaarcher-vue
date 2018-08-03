<template>
  <header role="banner">
    <div class="header header--mobile" role="navigation">
      <a ref="logo" href="/" class="header__logo">Minerva Archer</a>
      <button
      id="mobile-menu-button"
      class="header__menu-button"
      :class="{ 'menu-open': isMenuOpen }"
      ref="menubutton"
      @click="menuToggleState"
      @keyup.enter="menuOpenAndFocus('first')"
      @keyup.space="menuOpenAndFocus('first')"
      @keyup.up.prevent="menuOpenAndFocus('first')"
      @keyup.down.prevent="menuOpenAndFocus('last')"
      @keyup.esc="menuEscape"
      aria-haspopup="true"
      aria-controls="mobile-menu"
      aria-label="menu"
      >
      <img :src="(isMenuOpen ? closeIcon : menuIcon)" alt="" />
      </button>
    </div>
    <div
    class="header__nav-mobile-wrapper"
    :class="{ 'hidden': !isMenuOpen }"
    >
      <ul
      id="mobile-menu"
      class="header__nav--mobile"
      :class="{'menu-open': isMenuOpen}"
      role="menu"
      aria-labelled-by="mobile-menu-button"
      :aria-expanded="isMenuOpen"
      @keyup.esc="menuEscape"
      :data-visible="isMenuOpen"
      >
        <AppHeaderMenuItem
        v-for="link in links"
        :key="link.id"
        :url="link.url"
        :name="link.name"
        @click="isMenuOpen = false"
        @keyup="onItemKeyup"
        ref="menuitem"
        tabindex="-1"
        />
      </ul>
    </div>
    <div class="header header--desktop" role="navigation">
      <a href="/" class="header__logo">Minerva Archer</a>
      <ul class="header__nav--desktop">
      <AppHeaderMenuItem
      v-for="link in links"
      :key="link.id"
      :url="link.url"
      :name="link.name"
      />
      </ul>
    </div>
  </header>
</template>

<script>
import AppHeaderMenuItem from './AppHeaderMenuItem.vue';

import closeIcon from '../assets/baseline-close-24px.svg';
import menuIcon from '../assets/baseline-menu-24px.svg';

export default {
  name: 'AppHeader',
  components: { AppHeaderMenuItem },
  data() {
    return {
      closeIcon,
      menuIcon,
      links: [
        {
          name: 'About',
          url: '/about',
          active: false,
        },
        {
          name: 'Portfolio',
          url: '/portfolio',
          active: false,
        },
      ],
      isMenuOpen: false,
    };
  },
  // Note: All methods are for WAI-ARIA compliance with menu behavior
  // (see https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html)
  methods: {
    focusItem(whichItem = 'first') {
      if (whichItem === 'first') {
        this.$refs.menuitem[0].$el.focus();
      } else {
        this.$refs.menuitem[this.$refs.menuitem.length - 1].$el.focus();
      }
    },
    menuCloseAndFocus() {
      this.isMenuOpen = false;
      this.$refs.menubutton.focus();
    },
    menuEscape() {
      this.isMenuOpen = false;
      this.$refs.menubutton.focus();
    },
    menuOpenAndFocus(which = 'first') {
      this.isMenuOpen = true;
      this.focusItem(which);
    },
    menuToggleState() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    navDown(evt) {
      const next = evt.currentTarget.nextSibling;
      if (next) {
        next.focus();
      } else {
        this.$refs.menuitem[0].$el.focus();
      }
    },
    navUp(evt) {
      const prev = evt.currentTarget.previousSibling;
      if (prev) {
        prev.focus();
      } else {
        this.$refs.menuitem[this.$refs.menuitem.length - 1].$el.focus();
      }
    },
    onItemKeyup(evt) {
      const key = evt.key.toLowerCase();

      // If a letter key is pressed, find the first menu item
      // that begins with that letter and focus on that item
      if (/^[a-z]{1}$/.test(key)) {
        // eslint-disable-next-line max-len
        const item = this.$refs.menuitem.find(vEl => vEl.$el.innerText.toLowerCase().slice(0, 1) === key);
        if (item) item.$el.focus();
      } else {
        switch (key) {
          case 'up':
          case 'arrowup':
            evt.preventDefault();
            this.navUp(evt);
            break;
          case 'down':
          case 'arrowdown':
            evt.preventDefault();
            this.navDown(evt);
            break;
          case 'enter':
          case 'esc':
          case 'escape':
            this.menuCloseAndFocus();
            break;
          case 'home':
            this.focusItem('first');
            break;
          case 'end':
            this.focusItem('last');
            break;
          default:
            break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/_colors.scss';
@import '../scss/_fonts.scss';

header {
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  background-color: $white;
  z-index: 2;
}

.hidden {
  display: none;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 3.5rem;
  font-family: 'Open Sans Bold', Helvetica, Arial, sans-serif;
}

.header--desktop {
  display: none;
}

.header__logo {
  font-family: 'Muli', Helvetica, Arial, sans-serif;
  color: $black;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
}

.header__menu-button {
  border: 0;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
  outline: none;
  transition: transform 500ms;

  &:focus {
    border: 1px solid gray;
  }

  &.menu-open {
    transform: rotate(-90deg);
  }
}

.header__nav-mobile-wrapper {
  position: fixed;
  background-color: $white;
  height: 100vh;
  width: 90vw;
  text-align: center;
  top: 3rem;
  padding-top: 3rem;
  font-family: 'Open Sans Bold', Helvetica, Arial, sans-serif;
}

.header__nav--mobile li {
  font-size: 1.5rem;
  margin-bottom: 1em;
}

.header__nav--desktop {
  text-align: right;
}

.header__nav--desktop li {
  display: inline-block;
  margin-left: 1rem;
}

@media (min-width: 800px) {
  header {
    position: relative;
    top: 0;
  }
  .header {
    align-items: flex-end;
    min-height: 3em;
  }
  .header--mobile {
  display: none;
  }
  .header--desktop {
  display: flex;
  }
  .header__logo {
    font-size: 1.3rem;
  }
}

</style>
