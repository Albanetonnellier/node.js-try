<template>
	<header>
		<h1 v-on:click="changeTitle">{{ title }}</h1>
	</header>
</template>

<script>
export default {
	props: {
	title: {
		type: String
	}
	
},
data() {
	return {
	title: 'Vue Ninjas'
	}
},