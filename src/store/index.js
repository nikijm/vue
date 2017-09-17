import Vue from "vue";
import Vuex from "vuex";
import {studentStore} from "./student";

Vue.use(Vuex);
const ADD_COUNT="ADD_COUNT";

const store=new Vuex.Store({
	state:{
		count:1
	},
	mutations:{
		[ADD_COUNT]:function(state,count){
			state.count=count
		}
	},
	actions:{
		[ADD_COUNT]:function(context,count){
			context.commit("ADD_COUNT",count)
		}
	},
	modules:{
		studentStore
	}
})
export {store}