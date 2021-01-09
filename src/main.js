import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);


const router = new VueRouter({
	routes: Routes,
	mode: 'has'
});

new Vue({
  el: '#app',
  render: h => h(App)
});

//filters

new Vue ({
	router:router
})

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