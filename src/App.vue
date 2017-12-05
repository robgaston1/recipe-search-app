<template>
  <div id="app">
    <ul>
      <div class="nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/ingredients">Ingredients Page</router-link>
      </li>
      <li>
        <router-link to="/search">Search</router-link>
      </li>
    </div>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  border: solid 1px black;
  width: 50%;
  margin: 0px auto 50px auto;
}

li {
  list-style: none;
}
</style>
