<template>
  <div>
    <h2>Add Class Name</h2>
    <form @submit.prevent="handleSubmit">
      <label>
        Class Name: <input type="text" v-model="className"> 
      </label>
      <button @click="handleNext">Next</button>
    </form>
  </div>
</template>

<script>


export default {
  props: {
    game: Object,
    onAdd: Function
  },
  data() {
    return {
      className: ''
    }
  },
  computed: {
    isNew() {
      return this.game === undefined;
    }
  },
  created() {
    const game = this.game;
    if(this.isNew) return;
    this.className = game.className;
  },
  methods: {
    handleNext() {
      // this.$router.push('team-names');
    },
    handleSubmit() {
      const game = {
        className: this.className
      }
      return this.onAdd(game);
    }
  },
};
</script>

<style>

</style>
