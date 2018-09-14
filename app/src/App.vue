<template>
  <div id="app">
    <p id="logo">Jeopardy!</p>
    <header>
      <a v-if="user" href="/">Home</a>
      <RouterLink v-if="!user" to="/auth">Sign in</RouterLink>
      <a v-if="user" href="/" @click.prevent="handleSignOut">Sign Out</a>
      <router-link to="/board" v-if="user"></router-link>
      <router-link v-if="user" to="/"></router-link>
      <span class="user" v-if="user">user: {{ user.name }}</span> 
    </header>
    <RouterView class="routes" :onUser="handleUser" :user="user"></RouterView>
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

* {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}

#logo {
  text-align: center;
  padding-top: 3%;
  padding-bottom: 3%;
  font-size: 4em;
  font-weight: bold;
}

h1 {
  text-align: center;
  margin: 5% 0 2% 0;
}

header {
    margin: 0;
    padding: 10px 10px 10px 10px;
    width: 100%;
    background-color: rgb(59, 59, 117);
    height: 20px;
    color: white;
    text-align: center
}

header a {
    color: white;
    padding: 8px 16px;
    text-decoration: none;
}

header a:hover {
    background-color: rgb(82, 137, 255);
}

.user {
  text-align: left;
  margin-right: 0;
}

</style>
