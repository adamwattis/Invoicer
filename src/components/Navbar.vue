<template>
	<v-toolbar app color="primary" dark>
		<v-toobar-title>
			{{ appName }}
		</v-toobar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items class="switcher">
			<v-switch label="Preview" v-model="state.preview" v-on:change="handleChange">
				
			</v-switch>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>

import store from '../store.js'

export default {
	name: 'Navbar',
	data: () => ({
		appName: 'Invoicer',
		state: store.state
	}),
	methods: {
		handleChange() {
			console.log()
		}
	}
}
</script>

<style scoped>
.switcher {
	padding-top: 12px;
}
	
</style>