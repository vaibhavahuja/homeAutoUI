var url = "https://mysterious-plateau-47196.herokuapp.com/food/switch1"

function check(){
	// document.getElementById("toggle").checked = true;
	var status;
	fetch(url)
		.then(response=>response.json())
		.then(data=>status = data.status)
		.then(()=>console.log(status))
		.then(()=>{
			if(status == 1){
				document.getElementById("toggle").checked = true;
			}else{
				document.getElementById("toggle").checked = false;
			}
		})
}

function changeState(){
	fetch(url, {
		method: "PATCH",
		headers: {"Content-type": "application/json"},
		body: JSON.stringify({})
	}).then(console.log("Done"));
}
