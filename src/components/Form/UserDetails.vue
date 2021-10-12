<template>
  <section class="user-details">
    <h1 class="description">Evaluate the current body weight</h1>
    <div class="steps">
      <span :class="['step', 'step-1', { active: start == 1 }]"
        ><fa icon="check"
      /></span>
      <span
        :class="[
          'step',
          { 'step-2': start > 1 && start <= 3 },
          { active: start == 2 },
        ]"
        ><fa icon="check"
      /></span>
      <span :class="['step', { 'step-3': start == 3 }, { active: start == 3 }]"
        ><fa icon="check"
      /></span>
    </div>
    <form class="form-informations" action="">
      <h3 class="title">Your information</h3>
      <div v-if="start == 1" class="every-part">
        <input class="form-input" type="text" placeholder="Enter your name" />
        <input
          class="form-input"
          type="text"
          placeholder="Current body weight"
        />
        <input
          class="form-input"
          type="text"
          placeholder="body height squared"
        />
      </div>
      <div v-if="start == 2" class="every-part">
        <input class="form-input" type="email" placeholder="Enter your email" />
        <input
          class="form-input"
          type="tel"
          placeholder="Enter your phone number"
        />
        <input
          class="form-input"
          type="address"
          placeholder="Enter your address"
        />
      </div>
      <div v-if="start == 3" class="every-part">
        <textarea
          class="form-input message"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <div class="buttons-contaier">
        <button
          class="button-action"
          v-if="start !== 1"
          @click.prevent="previous"
        >
          previous
        </button>
        <button
          :class="['button-action', { center: start == 1 }]"
          v-if="start !== total"
          @click.prevent="next"
        >
          next
        </button>
        <button
          class="button-action"
          v-if="start == total"
          @click.prevent="send"
        >
          send
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "UserDetails",
  setup() {
    const start = ref(1);
    const total = ref(3);
    function next() {
      start.value += 1;
    }
    function previous() {
      start.value -= 1;
    }
    function send() {
      alert("Everything is okay");
    }
    return { start, total, next, previous, send };
  },
};
</script>

<style lang="scss" scoped>
.user-details {
  width: 60%;
  .steps {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    position: relative;
    margin-bottom: 40px;
    &::before {
      position: absolute;
      content: "";
      background: $step-color;
      width: calc(100% - 60px);
      height: 4px;
    }
    .step {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: $step-color;
      color: $white;
      padding: 2px;
      text-align: center;
      line-height: 1.5;
      &.step-1,
      &.step-2,
      &.step-3 {
        background-color: $button-color;
      }
      &.active {
        &::before {
          position: absolute;
          content: "";
          left: 50%;
          transform: translate(-50%, -50%);
          bottom: -55px;
          border-width: 15px;
          border-color: transparent transparent $white transparent;
          border-style: solid;
        }
      }
    }
  }
  .description {
    color: $font-color;
    text-align: center;
  }
  .form-informations {
    background-color: $white;
    border-radius: 10px;
    padding: 30px 100px;

    .title {
      text-align: center;
      color: $font-color;
      margin-bottom: 30px;
    }
    .every-part {
      display: flex;
      flex-wrap: wrap;
      height: 220px;
      .form-input {
        color: $font-color;
        margin-bottom: 30px;
        padding: 12px;
        outline: none;
        border: 1px solid rgba($palceholder-color, 0.5);
        border-radius: 5px;
        width: 100%;
        &::placeholder {
          color: $palceholder-color;
        }
      }
      .message {
        resize: none;
      }
    }
    .buttons-contaier {
      display: flex;
      justify-content: space-between;

      .button-action {
        background-color: $button-color;
        color: $white;
        border: none;
        outline: none;
        padding: 10px;
        width: 120px;
        cursor: pointer;
        border-radius: 8px;
        &.center {
          margin: auto;
        }
      }
    }
  }
}
</style>
