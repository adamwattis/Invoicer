<template>
	<v-flex>
		<v-flex v-for="(item, index) in items.length" class="invoice__item">
			<v-flex xs5 sm6>
				<h5>Description</h5>
				<InvoiceInput placeholder="Enter item description" v-model="items[index].description"/>
			</v-flex>
			<v-flex xs1>
				<h5>Quantity</h5>
				<InvoiceInput placeholder="#" v-model="items[index].quantity"/>
			</v-flex>
			<v-flex xs1>
				<h5>Price</h5>
				<InvoiceInput placeholder="$" v-model="items[index].price"/>
			</v-flex>
			<v-flex xs1>
				<v-btn v-if="index == 0" fab dark small color="primary" v-on:click="addItem">
					<v-icon dark>add</v-icon>
				</v-btn>
				<v-btn v-else fab dark small color="warning" v-on:click="removeItem(index)">
					<v-icon dark>remove</v-icon>
				</v-btn>
			</v-flex>
		</v-flex>
	</v-flex justify-space-between>
</template>

<script>

import InvoiceInput from './InvoiceInput.vue'

export default {
	name: 'Items',
	components: {
		InvoiceInput
	},
	data: () => ({
		items: [
			{
				description: '',
				quantity: 0,
				price: 0
			}
		]
	}),
	watch: {
		items: {
			handler(value) {
				this.$emit('input', value)
			},
			deep: true
		}
	},
	methods: {
		addItem: function(){
			let item = {
				description: '',
				quantity: 0,
				price: 0
			}
			this.items.push(item)
		},
		removeItem: function(index){
			this.items.splice(index, 1)
		}
	}
}
	
</script>

<style scoped>
/* v-flex justify-space-between didn't work so used fix. */ 
.invoice__item {
	display: flex;
	justify-content: space-between;
}
</style>