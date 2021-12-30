import React, { Component } from 'react'
// import './APIFETCH.css'
import moment from 'moment'
import './apitask1.css'

class APIFETCH extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FETCHED_DATA: [],
            USER_INPUT: '',
            theme: false,
        }
    }
    //  api fetching and storing it to the state element
    fetchapi = async (e) => {
        e.preventDefault()
        const a = await fetch(`https://api.github.com/users/${this.state.USER_INPUT}`)
        const b = await a.json();
        console.log(b);
        await this.setState({
            FETCHED_DATA: [b],
        })

    }
    //  getting the user input
    userinput = (e) => {
        const a = e.target.value

        this.setState({
            USER_INPUT: a,
        })
    }
    changetheme = () =>{
        this.setState({
            theme: !this.state.theme
        })
    }



    render() {
        ;
        console.log(this.state.theme);
        return (
            <div className={ this.state.theme?('container'):('container1')}>
                <div className="main_div">
                    <div className="main_input">
                        <div className="main_input1">
                            <h3>devfinder</h3>
                            <div className = "uppertext">
                                
                                <div className = "uppertext2">
                                 <p>LIGHT</p>
                                 <img src = "icon-sun.svg" onClick = {this.changetheme}></img>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={this.fetchapi}>
                            <div className={ this.state.theme?('input_button'):('input_button1')}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
                                <input type="text" onChange={this.userinput} placeholder="Search Github Username...">
                                </input>
                                <button type="submit">search</button>
                            </div>
                        </form>
                    </div>
                    <div className={ this.state.theme?('main_output'):('main_output_one')}>
                        {this.state.FETCHED_DATA.map((data) => {
                            return (
                                <div className="main_output1">
                                    <div className="output1">
                                        <div className="output11"> <img src={data.avatar_url} width="90%" height="130px"></img> </div>
                                        <div className="output12">
                                            <div className="output121">
                                                <h3>{data.login}</h3>
                                                <p> joined {moment(data.created_at).format(' DD MMMM yyyy')}</p>
                                            </div>
                                            <div className="output122" >
                                                <h4>{data.login}</h4>
                                            </div>
                                            <div className="output123">
                                                <p>  {data.bio === null?'This profile has no bio':data.bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="output2">
                                        <div className="output22">

                                        </div>
                                        <div className="output21">
                                            <div className="output211">
                                                <p>Repos</p>
                                                <h3>{data.public_repos}</h3>
                                            </div>
                                            <div className="output212">
                                                <p>Followers</p>
                                                <h3>{data.followers}</h3>
                                            </div>
                                            <div className="output213">
                                                <p>Following</p>
                                                <h3>{data.following}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="output3">
                                        <div className="output31">

                                        </div>
                                        <div className="output32">
                                            <div className="output321">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg><p>{data.location === null?'Location unavailable':data.location}</p>
                                            </div>
                                            <div className="output322">
                                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg> <p>{data.twitter_username === null?'NO Twitter linked':data.twitter_username}</p>
                                            </div>
                                            <div className="output323">
                                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg> <p>{data.blog === ""?'This profile has no blog':data.blog}</p>
                                            </div>
                                            <div className="output324">
                                                <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g ><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"/></g></svg> <p>{data.id}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default APIFETCH
