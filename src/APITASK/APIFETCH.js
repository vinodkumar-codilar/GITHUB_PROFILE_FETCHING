import React, { Component } from 'react'
// import './APIFETCH.css'
import moment from 'moment'
import './apitask1.css'

class APIFETCH extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FETCHED_DATA: [],
            USER_INPUT: ''
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



    render() {
        return (
            <div className="container">
                <div className="main_div">
                    <div className="main_input">
                        <div className="main_input1">
                            <h3>devfinder</h3>
                            <div className = "uppertext">
                                
                                <div className = "uppertext2">
                                 <p>LIGHT</p>
                                 <img src = "icon-sun.svg"></img>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={this.fetchapi}>
                            <div className="input_button">
                                <img src="search.png" ></img>
                                <input type="text" onChange={this.userinput} placeholder="Search Github Username...">
                                </input>
                                <button type="submit">search</button>
                            </div>
                        </form>
                    </div>
                    <div className="main_output">
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
                                                <p><img src="location.png" width = "20px" height = "20px"></img>{data.location === null?'Location unavailable':data.location}</p>
                                            </div>
                                            <div className="output322">
                                                <p><img src="twitter.png" width = "20px" height = "20px"></img>{data.twitter_username === null?'NO Twitter linked':data.twitter_username}</p>
                                            </div>
                                            <div className="output323">
                                                <p><img src="link.png" width = "20px" height = "20px"></img>{data.blog === ""?'This profile has no blog':data.blog}</p>
                                            </div>
                                            <div className="output324">
                                                <p><img src="link.png" width = "20px" height = "20px"></img>{data.id}</p>
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
