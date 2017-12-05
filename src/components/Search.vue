<template>
  <div>
    <h3>Recipe API Search</h3>
      <input v-model="searchTerm" v-on:keyup.enter="searchAPI()" />
      <md-button
        v-on:click="searchAPI()"
        class="md-icon-button md-raised">
        <md-icon>search</md-icon>
      </md-button>
      <div>
        <ul>
          <li v-for="item in recipeArray">
            <a v-bind:href="item.recipe.url" target="blank">
              {{ item.recipe.label }}
            </a>
          </li>
        </ul>
      </div>
  </div>

</template>

<script>

import axios from 'axios'

export default {
  name: 'Search',
  data () {
    return{
      searchTerm: '',
      recipeArray: []
    }
  },
  methods: {
    searchAPI: function() {
      let _this = this
      axios.get('https://api.edamam.com/search?q=' + this.searchTerm + '&app_id=bffdb5a7&app_key=3d5807ccb215b767866b83ca00a92013')
      .then((resp) => {
        console.log(resp.data.hits)
        _this.recipeArray = resp.data.hits
        _this.searchTerm = ''
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}

</script>

<style scoped>

</style>
