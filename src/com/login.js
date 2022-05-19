import React from "react";
class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            log : true
        }
    }
    login=()=>
    {
        this.setState({log:!this.state.log})
    }

    render()
    {
        return(
            <div>
                <h1>{this.state.log ? "click to logout":"click to login"}</h1>
                <button onClick={this.login} className={"btn btn-info rounded"}>{!this.state.log ? "login" : "logout"}</button>
            </div>
        )
    }
}
export default Login