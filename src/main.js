import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

//filters

Vue.filter('to-uppercase', function(value){
	return value.toUppercase();
});