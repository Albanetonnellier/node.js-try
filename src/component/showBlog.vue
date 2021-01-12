<template>
	<div id="show-blogs">
		<h1>All blog Articles</h1>
		<input type="text" v-model="search" placeholder="search blogs"/>
		<div-v-for="blog in filterBlogs" class="single-blog"></div>
		<h2>{{blog.title | to-uppercase}}</h2>
		<article>{{ blog.body | snippet }}</article>
	</div>
</template>

<script>

export default {
	
	data() {
	return {
		blogs: [],
		search: ""
	}
	},
	methods: {

	},
	created() {
	this.$http.get('https:///jsonplaceholder.typicode.com/posts').then(function(data){
		var blogsArray = [];
		for (let key in data){
		
		}
	})
	},
	computed: {
		filteredBlogs: function(){
			return this.blogs.filter((blog) => {
				return blog.title.match(this.search)
			});
	filters: {
		toUppercase(value){
			return value.toUpperCase();
		}
	},
	directives: {

	}

	}
	}
}

</script>

<style>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}
.single-blog {
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
}
</style>
