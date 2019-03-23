// Use to give information about a given task with all object state. 
const newTodos=[{
	title: 'buy bread',
	isDone: false
},{
	title:'go to gym',
	isDone:false
},{
	title: 'record youtube vidoes',
	isDone:true
}]

// const index =newTodos.findIndex(function(todo,index){
// //	console.log(todo)

// 	return todo.title=='go to gym'
// })

// console.log(index)


//METHOD 1
// const findtodo=function(todo,title){
// 	const index=myTodos.findIndex(function(todo,index){
// 		return todo.title.toLowerCase()===title.toLowerCase()
// 	})
// 	return myTodos[index]
// }
// let printme =findtodo(newTodos,'buy BreaD')

//METHOD 2
const findtodo=function(myTodos,title){
	const titleReturned =myTodos.find(function(todo,index){
		return todo.title.toLowerCase()===title.toLowerCase()
	})
	return titleReturned
}

let printme =findtodo(newTodos,'Go To gym')
console.log(printme)
