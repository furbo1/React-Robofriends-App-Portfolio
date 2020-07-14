import React, {Component} from 'react';
import Cardlist from './Cardlist'
import SearchBox from './SearchBox'
import './App.css'
import Scroll from './Scroll.js'




class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})
    })
}
    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return(
        <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <Cardlist robots={filteredRobots}/>
        </Scroll>

        


        </div>
    )

    }
    
}

export default App;