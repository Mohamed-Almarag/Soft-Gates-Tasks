<template>
  <div class="categories">
    <button class="new-thread">
      <fa class="plus-icon" icon="plus" /><span>New thread</span>
    </button>
    <div class="category-container">
      <h4 class="all-categories">
        <fa class="msg-icon" icon="comment" />All Categories
      </h4>
      <ul class="categories-list">
        <li class="one"><span></span> Microwaves &amp; RF / Optional</li>
        <li class="two"><span></span>statices / low frequancy</li>
        <li class="three"><span></span>partical dynamics</li>
        <li class="four"><span></span>EMC / EMT</li>
        <li class="five"><span></span>EDA / Electronics</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesList",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.categories {
  width: 25%;
  .new-thread {
    width: 90%;
    padding: 8px;
    border-radius: 20px;
    border: 1px solid $category-list;
    outline: none;
    background-color: $white;
    color: $category-title;
    cursor: pointer;
    .plus-icon {
      padding: 1px;
      border-radius: 50%;
      background: $category-title;
      font-size: 10px;
      margin-right: 5px;
      color: $white;
      width: 10px;
      height: 10px;
    }
  }
  .category-container {
    padding: 5px 15px;
    .all-categories {
      margin: 12px 0;
      color: $category-title;
    }
    .categories-list {
      color: $category-list;
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        font-size: 14px;
        margin-bottom: 7px;
        span {
          width: 10px;
          height: 10px;
          display: inline-block;
          margin-right: 5px;
        }
      }
      $everylist: (
        one: $icon-one,
        two: $icon-two,
        three: $icon-three,
        four: $icon-four,
        five: $icon-five,
      );
      @each $name, $color in $everylist {
        li.#{$name} span {
          background-color: $color;
        }
      }
    }
  }
}
</style>
