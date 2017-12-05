<template>
  <div>
    <h3>Ingredients:</h3
      <ul>
        <li v-for="item in ingredients" v-bind:key="item['.key']">
          {{ item.name }}
          <md-button
            v-on:click="removeIngredient(item['.key'])"
            class="md-icon-button md-raised md-mini">
            <md-icon>remove</md-icon>
          </md-button>
        </li>
      </ul>
  </div>

</template>

<script>

import { db } from '../firebase';
let ingredientsRef = db.ref('ingredients')

export default {
  name: 'Ingredients',
  data () {
    return{
      
    }
  },
  firebase: {
    ingredients: ingredientsRef
  },
  methods: {
    removeIngredient: function(key) {
      ingredientsRef.child(key).remove()
    }
  }

}

</script>

<style scoped>

</style>
