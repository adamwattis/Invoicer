<template>
	<v-layout row wrap>

		<!-- Form header -->
		<v-flex xs2>
			<h5>Invoice #:</h5>
			<h5>{{ invoiceData.invoiceId }}</h5>
		</v-flex>
		<v-flex xs8 class="title">
			<h2>Invoice (Preview)</h2>
		</v-flex>
		<v-flex xs2 class="date">
			<h5>{{ date }}</h5>
		</v-flex>

		<!-- Form sections -->
		<v-flex sm6>
			<v-flex sm12 class="section">
				<h4>From:</h4>
				<h4>{{ invoiceData.from }}</h4>
			</v-flex>
			<v-flex sm12 class="section">
				<h4>Invoice to:</h4>
				<h4>{{ invoiceData.to }}</h4>
			</v-flex>
		</v-flex>

		<v-flex xs12 class="section">
			<h4>Items:</h4>
			<Items v-model="invoiceData.items"/>
		</v-flex>

		<v-flex sm6 class="section">
			<h4>Payment terms:</h4>
			<v-flex sm12>
				<h4>{{ invoiceData.paymentTerms }}</h4>
			</v-flex>
		</v-flex>

	</v-layout>
</template>

<script>

import InvoiceInput from './InvoiceInput.vue'
import Items from './Items.vue'

export default {
	name: 'InvoiceForm',
	components: {
		Items
	},
	props: ['invoiceData'],
	computed: {
		date: function() {
			return new Date().toLocaleDateString()
		}
	}
}
	
</script>

<style scoped>
.title {
	text-align: center;
}
.date {
	text-align: right;
}
.section {
	margin-top: 4vw;
}
</style>