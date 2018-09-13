<template>
  <div>
    <h1>Game Setup</h1>
    <!-- <RouterView :onAdd="handleAddClassName" :game="game" :onAddTeam="handleAddTeam"></RouterView> -->
    <RouterView></RouterView>

  </div>
</template>

<script>

// import AddClassName from './AddClassName';
// import AddTeamNames from './AddTeamNames';
// import { addGame, addTeam, getGame } from '../services/api';


export default {
  // components: {
  //   AddClassName,
  //   AddTeamNames
  // },
  data() {
    return {
      game: null
    };
  },
  methods: {
    // handleAddClassName(game) {
    //   return addGame(game)
    //     .then(results => {
    //       this.game = results;
    //     });
    // },
    // handleAddTeam(team) {
    //   return addTeam(team);
    // }
  },
  created() {
  }
};
</script>

<style>

</style>
