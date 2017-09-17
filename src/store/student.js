
const SHOW_DATA="SHOW_DATA";
const SHOW_STUDENT="SHOW_STUDENT";

var studentStore={
	state:{
		data:{},
		students:{}
	},
	mutations:{
		[SHOW_DATA]:function(state,data){
			state.data=data
		},
		[SHOW_STUDENT]:function(state,student){
			state.students=student
		}
	}
}
export {studentStore,SHOW_DATA,SHOW_STUDENT}