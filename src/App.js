import React, {Component} from "react"
import {robots} from "./robots"
import CardList from "./Card"
import SearchBox from "./SearchBox"
import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            keyword : "",
            robots : robots
        }
    }
    
    search4Key = (event) => {
        this.setState({keyword : event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(r => {
            return r.name.toLowerCase().includes(this.state.keyword.toLowerCase())
        })
        return(
            <div className = "tc">
                <h1 className="f1">RobotFriends</h1>
                <SearchBox search4Key = {this.search4Key}/>
                <CardList robots = {filteredRobots}/>
            </div>
        )
    }
}

export default App