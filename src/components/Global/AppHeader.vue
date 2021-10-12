<template>
  <header class="header-container">
    <nav>
      <ul class="links">
        <li>
          <router-link :to="{ name: 'TaskOne' }">Task-1</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'TaskTwo' }">Task-2</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'TaskThree' }">Task-3</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  padding: 10px 0;
  background-color: $white;
  box-shadow: 0 0px 8px -2px rgba($black, 0.3);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 7;
  nav {
    .links {
      list-style: none;
      display: flex;
      justify-content: center;
      gap: 40px;
      li {
        a {
          text-decoration: none;
          color: $text-color;
          font-size: 18px;
          &.router-link-exact-active {
            color: $link-color;
          }
        }
      }
    }
  }
}
</style>
