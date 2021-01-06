<template>
  <div id="add-blog">
    <h2>Add new blog post</h2>
    <form>
      <label>Blog title:</label>
      <input type="text" v-model.lazy="blog.title">
      <label>Blog content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="" v-model=""/>
        <label>Elf</label>
        <input type="checkbox" value="" v-model=""/>
        <label>Wizard</label>
        <input type="checkbox" value="" v-model=""/>
        <label>Knight</label>
        <input type="checkbox" value="" v-model=""/>
    </form>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>blog content:</p>
      <p>{{ blog.content }}</p>
    <div>
  <div>
</template>

<script>
</script>