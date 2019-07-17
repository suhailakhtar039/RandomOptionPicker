const a="show details";
const b="hide details";
let temp=a;
const changeText=()=>{
	if(temp==a)
		temp=b;
	else
		temp=a;
	render();
}


const appRoot=document.getElementById("app");
const render=()=>{
	var template=(
	<div>
	<h1>Visibility Toggle</h1>
	<button onClick={changeText}>{temp}</button>
	{temp==b?<p>This is something new</p>:false}
	</div>
	);
	ReactDOM.render(template,appRoot);
}
render();