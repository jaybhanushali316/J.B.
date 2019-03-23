let mytodos ={
	day: 'MONDAY',
	meetings: 0,
	meetdone: 0,
}


let addMeeting =function(todo,meet=0)
{
	todo.meetings=todo.meetings+meet
}

let meetdone=function(todo,meet=0) {
	todo.meetdone=todo.meetdone+meet

}

let resetDay =function(todo){
	todo.meetings=0
	todo.meetdone=0

}

let getSummary =function(todo){
	let meetLeft =todo.meetings-todo.meetdone
	return `You have ${meetLeft} meetings today!!`

}

addMeeting(mytodos,4)
addMeeting(mytodos,2)

meetdone(mytodos,5)
console.log(mytodos)
console.log(getSummary(mytodos));
