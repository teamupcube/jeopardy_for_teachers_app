<template>
    <h2>{{ label }}</h2>

</template>

<script>
import { signUp, signIn } from '../services/api';

export default {
computed: {
    label() {
        return this.isSignUp ? 'Sign Up' : 'Sign In';
    }
}
}
</script>

<style>

</style>
