<template>
  <v-layout>
    <v-flex>
      <v-alert v-model="store.state.error" type="error">Must complete all fields in invoice.</v-alert>
      <v-card class="invoice">
        <InvoiceForm v-if="!store.state.preview" v-model="store.state.invoiceData"/>
        <InvoicePreview v-if="store.state.preview" :invoiceData="store.state.invoiceData"/>
      </v-card>
      <v-btn class="button" color="primary" v-on:click="nextStep">Next</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

import InvoiceForm from './InvoiceForm.vue'
import InvoicePreview from './InvoicePreview.vue'
import store from '../store.js'
import createPDF from '../createPDF.js'

export default {
  name: 'Invoice',
  components: {
    InvoiceForm,
    InvoicePreview
  },
  data: () => ({
    store: store
  }),
  methods: {
    nextStep: function() {
      if (this.isComplete()) {
        createPDF(this.store.state.invoiceData)
      }
    },
    isComplete: function() {
      let data = this.store.state.invoiceData
      for (var item in data) {
        if (data[item] == '') {
          return this.store.setError('You forgot something.')
        }
      }
      return true
    }
  }
}
</script>

<style scoped>
.invoice {
  padding: 2rem;
}

</style>
