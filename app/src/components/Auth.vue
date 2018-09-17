<template>
  <div>
    <h2>{{ label }}</h2>
    <div class="auth-toggle">
      <button @click="type = isSignUp ? 'signIn' : 'signUp'">
      {{
        isSignUp
          ? "Already a user? Click here to sign in!"
          : "New? Click here to sign up!"
      }}
      </button>
    </div>
      <pre>{{ error }}</pre>
      <form @submit.prevent="handleSubmit">
        <label>
          Username:
          <input class="login" v-model="credentials.name">
        </label>
        <br>
        <label>
          Password:
          <input 
            class="login"
            :type="show ? 'text' : 'password'"
            v-model="credentials.password">
        </label>
        <button
          @click="show = !show"
          type="button"
        >
        {{ show ? 'Hide' : 'Show' }}
        </button>
        <br/>
        <button type="submit" class="login">
          Submit
        </button>
      </form>
  </div>
</template>

<script>

import { signUp, signIn } from '../services/api';

export default {
  props: {
    onUser: Function
  },
  data() {
    return {
      credentials: {
        name: '',
        password: ''
      },
      show: false,
      type: 'signIn',
      error: null
    };
  },
  computed: {
    isSignUp() {
      return this.type === 'signUp';
    },
    label() {
      return this.isSignUp ? 'Sign Up' : 'Sign In';
    }
  },
  watch: {
    type(newType, oldType) {
      if(newType !== oldType) {
        this.error = null;
      }
    }
  },
  methods: {
    handleSubmit() {
      this.error = null;
      const action = this.isSignUp ? signUp : signIn;
      action(this.credentials)
        .then(user => {
          this.onUser(user);
          this.$router.push('/');
        })
        .catch(err => {
          this.error = err;
        });    
    }
  }
};

</script>

<style>

  .auth-toggle {
    text-align: center;
    margin: -1% 0 5% 0;
  }

  .login {
    margin-bottom: 1%;
  }

</style>
