<template>
	<input class="invoice__input" v-bind="$attrs" v-on:input="$emit('input', $event.target.value)">
</template>

<script>

export default {
	name: 'InvoiceInput',
}
</script>

<style scoped>
.invoice__input {
	width: 100%;
	color: black;
	background-color: #F5F5F5;
	padding: 5px;
	padding-left: 8px;
}
.invoice__input::placeholder {
	color: #BABABA;
}
</style>