<template>
  <div class="main-container">
    <user-details></user-details>
  </div>
</template>

<script>
// @ is an alias to /src
import UserDetails from "@/components/Form/UserDetails.vue";

export default {
  name: "TaskOne",
  components: {
    UserDetails,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  background-color: $bg-color;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
