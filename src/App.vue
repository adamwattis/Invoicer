<template>
  <div id="app">
    <v-app>
      <Navbar/>
      <v-content>
        <v-container>
          <Invoice/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Invoice from './components/Invoice.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Invoice
  }
}
</script>

<style>
.button {
  float: right;
}

</style>
