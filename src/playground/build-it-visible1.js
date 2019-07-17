class VisibilityToggle extends React.Component{
	constructor(props){
		super(props);
		this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
		this.state={
			text:"show details",
			flag:true
		}
	}
	handleToggleVisibility(){
		this.setState((prevState)=>{
			return {
				text:prevState.flag==false?"show details":"hide details",
				flag:!prevState.flag
			}
		})
	}
	render(){
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>{this.state.text}</button>
				{this.state.flag===false?<p>This is something new</p>:false}
			</div>
			);
	}
}
ReactDOM.render(<VisibilityToggle/>,document.getElementById("app"));