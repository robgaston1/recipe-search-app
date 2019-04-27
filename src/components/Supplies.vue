<template>
  <div>
    <h3>Cash and Carry Items:</h3>
    <md-card id="ingredient-input">
      <md-card-header>
        <div class="md-title">Add an ingredient</div>
        <div class="md-subhead">{{ purpose }}</div>
      </md-card-header>
      <md-card-content>
        <input v-model="supplyInput" v-on:keyup.enter="submitSupply()"/>
      </md-card-content>
      <md-card-actions>
        <md-button
          v-on:click="submitSupply()"
          class="md-icon-button md-raised">
          <md-icon>add</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
      <ul>
        <li
          v-for="item in supplies"
          v-bind:key="item['.key']">
          {{ item.name }}
          <md-button
            v-on:click="removeSupply(item['.key'])"
            class="md-icon-button md-raised">
            <md-icon>remove</md-icon>
          </md-button>
        </li>
      </ul>
  </div>

</template>

<script>

import { db } from '../firebase';
let suppliesRef = db.ref('supplies')

export default {
  name: 'Supplies',
  data () {
    return {
      purpose: 'This page is for listing the items in the cash and carry order',
      supplyInput: ''
    }
  },
  firebase: {
    supplies: suppliesRef
  },
  methods: {
    removeSupply: function(key) {
      suppliesRef.child(key).remove()
    },
    submitSupply: function() {
      suppliesRef.push({
        name: this.supplyInput
      })
      this.supplyAdded = this.supplyInput
      this.supplyInput = ''
    }
  }
}

</script>

<style scoped>

li {
  line-height: 40px
}

</style>
