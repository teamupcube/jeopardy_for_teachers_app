<template>
  <div id="app">
    <header>
      <RouterLink to="/auth">Sign in</RouterLink>
    </header>
    <RouterView></RouterView>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

</style>
