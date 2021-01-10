<template>
	<div id="single-blog">
		<h1></h1>
		<article></article>
	</div>
</template>

<script>
export default {
	data () {
	return {
		id: this.$route.params.id,
		blog: {}
	}
	},
	created() {
		this.$http.get('' + this.id).then(function(data){
		this.blog = data.body;
		});
	}
}
</script>