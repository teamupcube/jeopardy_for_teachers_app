<template>
  <div class="next">
    <div class="rules">
    <h1>Classroom Rules for Jeopardy:</h1>
      <p>Teams take turns choosing and answering questions</p>
      <p> Scoring:</p>
      <p>If you get a question right, your team gains points</p>
      <p>If you get a question wrong, your team looses points</p>
      <p>If you choose not to answer, you neither loose nor gain points</p>
      <p>There is no double jeopardy or final jeopardy</p>
    </div>
    <RouterLink :to="`/game/${this.gameId}/gameplay`">Next</RouterLink>
  </div>
</template>

<script>

export default {
  data() {
    return {
      gameId: this.$route.params.id
    };
  }
};

</script>

<style>

  .rules {
    text-align: center;
    margin-bottom: 30px;
  }

  .next{
    text-align: center;
  }

</style>
