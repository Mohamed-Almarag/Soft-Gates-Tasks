<template>
  <div class="main-container">
    <categories-list></categories-list>
    <categories-description></categories-description>
  </div>
</template>

<script>
import CategoriesList from "@/components/ProductsDeatils/CategoriesList.vue";
import CategoriesDescription from "@/components/ProductsDeatils/CategoriesDescription.vue";
export default {
  name: "TaskThree",
  setup() {
    return {};
  },
  components: {
    CategoriesList,
    CategoriesDescription,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  justify-content: space-between;
  width: 1170px;
  margin: 100px auto;
  gap: 20px;
}
</style>
