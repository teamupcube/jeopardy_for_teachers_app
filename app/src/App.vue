<template>
  <div id="app">
    <header>
      <h1>Jeopardy!</h1>
      <RouterLink v-if="!user" to="/auth">Sign in</RouterLink>
      <a v-if="user" href="/" @click.prevent="handleSignOut">Sign Out</a>
      &nbsp;
      <a v-if="user" href="/">Home</a>
      <router-link to="/board" v-if="user"></router-link>
      <router-link v-if="user" to="/"></router-link>
      &nbsp;
      <span v-if="user">user: {{ user.name }}</span> 

    </header>
    <RouterView :onUser="handleUser" :user="user"></RouterView>
  </div>
</template>

<script>

import { checkForToken, signOut } from './services/api';

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      user: null
    };
  },
  methods: {
    handleUser(user) {
      this.user = user;
    },
    handleSignOut() {
      signOut();
      this.user = null;
      this.$router.push('/');
    }
  },
  created() {
    this.user = checkForToken();
  }
};
</script>

<style>
</style>
