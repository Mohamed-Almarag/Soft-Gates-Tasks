<template>
  <div class="description">
    <div class="header">
      <div class="part-one">
        <h5 class="title">Microwaves &amp; RF / Optional</h5>
      </div>
      <div class="part-two">
        <span>Replies / Views</span>
        <span>Last Post By</span>
        <span><fa icon="minus" /></span>
      </div>
    </div>
    <div class="content">
      <div class="parts" v-for="part in parts" :key="part.id">
        <div class="message">
          <div class="icon" :class="part.state">
            <fa class="msg-icon" icon="comment" />
          </div>
          <div class="comment">
            <h4 class="name">
              {{ part.name }} <span>({{ part.threads }})</span>
            </h4>
            <p class="title">{{ part.title }}</p>
          </div>
        </div>
        <div class="details">
          <div>
            <p>{{ part.replies }}</p>
            <p>{{ part.views }}</p>
            <p>{{ part.total }}</p>
          </div>
          <div>
            <p>{{ part.replies }}</p>
            <p>{{ part.views }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "CategoriesDescription",
  setup() {
    const parts = ref([
      {
        id: 1,
        name: "Antennas",
        threads: "132 threads",
        title:
          "hey my name is roy mohamed welcome to hey my name is roy mohamed welcome to hey my name is roy",
        replies: "replies",
        views: "0 views",
        total: "27,203",
        state: "light",
      },

      {
        id: 2,
        name: "Circuit & Components",
        threads: "132 threads",
        title:
          "hey my name is roy mohamed welcome to hey my name is roy mohamed welcome to hey my name is roy",
        replies: "replies",
        views: "0 views",
        total: "27,203",
      },
      {
        id: 3,
        name: "Reader Cross Section",
        threads: "132 threads",
        title:
          "hey my name is roy mohamed welcome to hey my name is roy mohamed welcome to hey my name is roy",
        replies: "replies",
        views: "0 views",
        total: "27,203",
        state: "light",
      },
      {
        id: 4,
        name: "Biomedical, Exposure, SAR",
        threads: "132 threads",
        title:
          "hey my name is roy mohamed welcome to hey my name is roy mohamed welcome to hey my name is roy",
        replies: "replies",
        views: "0 views",
        total: "27,203",
      },
      {
        id: 5,
        name: "Optical Application",
        threads: "132 threads",
        title:
          "hey my name is roy mohamed welcome to hey my name is roy mohamed welcome to hey my name is roy",
        replies: "replies",
        views: "0 views",
        total: "27,203",
        state: "light",
      },
      {
        id: 6,
        name: "Peridodic Structures",
        threads: "132 threads",
        title:
          "hey my name is roy mohamed welcome to hey my name is roy mohamed welcome to hey my name is roy",
        replies: "replies",
        views: "0 views",
        total: "27,203",
      },
    ]);
    return { parts };
  },
};
</script>

<style lang="scss" scoped>
.description {
  width: 75%;
  background: $category-bg;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  .header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $category-header-bg;
    color: $white;
    .part-one {
      .title {
        margin: 0;
      }
    }
    .part-two {
      display: flex;
      gap: 40px;
      font-size: 12px;
    }
  }
  .content {
    border-right: 1px solid rgba($category-text, 0.3);
    border-left: 1px solid rgba($category-text, 0.3);
    .parts {
      border-bottom: 1px solid rgba($category-text, 0.3);
      display: flex;
      padding: 10px;
      .message {
        display: flex;
        justify-content: space-between;
        .icon {
          padding: 10px;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          margin: 5px 25px 0 0;
          line-height: 1;
          text-align: center;
          font-size: 20px;
          background-color: $icon-bg;

          color: $white;
          &.light {
            background-color: $category-title;
          }
        }
        .comment {
          .name {
            color: $category-title;
            margin: 5px 0;
            span {
              font-size: 12px;
              color: $category-text;
            }
          }
          .title {
            color: $category-text;
            font-size: 13px;
            width: 55%;
            text-transform: capitalize;
            margin-bottom: 0;
            line-height: 1.5;
          }
        }
      }
      .details {
        display: flex;
        color: $category-text;
        width: 44%;
        font-size: 12px;
        justify-content: space-around;
        p {
          margin: 5px 0;
        }
      }
    }
  }
}
</style>
