<template>
  <div class="main-container">
    <div class="meals">
      <div class="every-meal" v-for="meal in meals" :key="meal.id">
        <div class="photo-container">
          <img
            class="meal-img"
            :src="require(`@/assets/images/${meal.imgURL}`)"
            alt="meal"
          />
        </div>
        <div class="content">
          <h4 class="title">{{ meal.title }}</h4>
          <div class="details">
            <span>{{ meal.pesron }}</span>
            <span>{{ meal.order }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TaskTwo",
  setup() {
    const meals = ref([
      {
        id: 1,
        title: "meal-1",
        imgURL: "01.jpg",
        pesron: "For 1 person",
        order: "Order Now",
      },
      {
        id: 2,
        title: "meal-2",
        imgURL: "02.jpg",
        pesron: "For 1 person",
        order: "Order Now",
      },
      {
        id: 3,
        title: "meal-3",
        imgURL: "03.jpg",
        pesron: "For 1 person",
        order: "Order Now",
      },
    ]);
    return { meals };
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  .meals {
    margin-top: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .every-meal {
      background-color: $meal-bg;
      border-radius: 15px;
      overflow: hidden;
      background-color: #f7f7f7;
      margin-bottom: 30px;
      .photo-container {
        // width: 350px;
        // height: 250px;
        .meal-img {
          width: 100%;
          height: 100%;
        }
      }

      .content {
        padding: 0 10px 20px;
        .title {
          color: $meal-title;
          text-transform: uppercase;
        }
        .details {
          display: flex;
          justify-content: space-between;
          color: $meal-text;
        }
      }
    }
  }
}
</style>
