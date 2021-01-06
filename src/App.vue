<template>
  <div id="add-blog">
    <h2>Add new blog post</h2>
    <form>
      <label>Blog title:</label>
      <input type="text" v-model.lazy="blog.title">
      <label>Blog content:</label>
    </form>
</template>