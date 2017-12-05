<template>
  <div>
    <h3>Ingredients:</h3>
    <p>
      {{ purpose }}
    </p>
      <ul>
        <li
          v-for="item in ingredients"
          v-bind:key="item['.key']">
          {{ item.name }}
          <md-button
            v-on:click="removeIngredient(item['.key'])"
            class="md-icon-button md-raised">
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
      purpose: "This page displays the ingredients that are in our database. They can be removed by clicking on the icon. This is mainly for development purposes, and eventually might just be to search the database for specific ingredients"
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

li {
  line-height: 40px
}

</style>
