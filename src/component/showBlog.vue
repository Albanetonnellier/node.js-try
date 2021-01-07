<template>
	<div id="show-blogs">
		<h1>All blog Articles</h1>
		<div-v-for="" class="single-blog"></div>
	</div>
</template>

<script>

export default {
	
	data() {
	return {

	}
	},
	methods: {

	},
	created() {
	this.$http.get('https:///jsonplaceholder.typicode.com/posts').then(function(data){
		console.log(data);
		data.body.slice(0,10);
	})
	}
}

</script>