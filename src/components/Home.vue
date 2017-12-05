<template>
  <div class="hello">
    <h1>Recipe Search App</h1>
    <md-card id="ingredient-input">
      <md-card-header>
        <div class="md-title">Add an ingredient</div>
        <div class="md-subhead">Items that the market stocks</div>
      </md-card-header>
      <md-card-content>
        <input v-model="ingredientInput" v-on:keyup.enter="submitIngredient()"/>
      </md-card-content>
      <md-card-actions>
        <md-button
          v-on:click="submitIngredient()"
          class="md-icon-button md-raised">
          <md-icon>add</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
    <p>
      Just added was {{ ingredientAdded }}
    </p>
  </div>
</template>

<script>

import { db } from '../firebase';
let ingredientsRef = db.ref('ingredients')

export default {
  name: 'Home',
  data () {
    return {
      ingredientInput: '',
      ingredientAdded: ''
    }
  },
  firebase: {
    ingredients: ingredientsRef
  },
  methods: {
    submitIngredient: function() {
      ingredientsRef.push({
        name: this.ingredientInput
      })
      this.ingredientAdded = this.ingredientInput
      this.ingredientInput = ''
      // let newObj = {};
      // newObj[this.ingredientInput] = true;
      // this.ingredientAdded = this.ingredientInput;
      // ingredientsRef.push( newObj );
      this.ingredientInput = ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /*display: inline-block;*/
  margin: 0 10px;
  list-style: none
}
a {
  color: #42b983;
}

#ingredient-input {
  width: 60%;
  margin: 50px auto
}
</style>
