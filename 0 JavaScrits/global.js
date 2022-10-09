
var sayHello = "Hola Mundo!";           //GLOBAL CONTEXT

function persona() {                    //EXECUTION CONTEXT
	var first = "Maico";
	var last = "Rosa";

	function firstName() {                //EXECUTION CONTEXT
		console.log(first);
	}

	function lastName() {                 //EXECUTION CONTEXT
		console.log(last);
	}
	
	firstName()
}

persona();
console.log(first);
