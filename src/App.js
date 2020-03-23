import React, {Component} from "react"
import CardList from "./Card"
import SearchBox from "./SearchBox"
import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            keyword : "",
            robots: []
        }
    }
    
    search4Key = (event) => {
        this.setState({keyword: event.target.value})
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => (response.json()))
        .then(users => this.setState({robots: users}))
    }

    render() {
        if (this.state.robots.length != 0) {
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
        return <h1 className="f1">Loading</h1>
    }
}

export default App