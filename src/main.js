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

Vue.filter('nippet', function(value){
	return value.slice(0,100) + '...';
});
filters: {
	'to-uppercase':function(value){
		return value.toUppercase();
	}
},
directives: {
	'rainbow': {
		bind(el, binding, vnode){
			
		}
	}
}