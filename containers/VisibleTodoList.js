import {connect} from "react-redux"
import {toggleTodo} from "../actions"
import TodoList form "../components/TodoList"

const getVisibleTodos = (todos,filter)=>{
	switch(filter){
		case "SHOW_ALL":
			return todos
		case "SHOW_COMPLETED":
			return todos.filter(t=>t.completed)
		case "SHOW_ACTIVE":
			return todos.filter(t=> !t.completed)

	}
}
const mapStateTOProps =(state)=>{
	return{
		todos:getVisibleTodos(state.todos,state.visibilityFilter)
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		onTodoClick:(id)=>{
			dispatch(toggleTodo(id))
		}
	}
}
const VisibleTodoList = connect(
	mapStateTOProps,//状态引起组件属性变化
	mapDispatchToProps//分发的时候引起组件属性变化
	)(TodoList)