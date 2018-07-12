import React, { Component } from 'react';
import axios from 'axios';
import Chart  from './Chart'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
        this.fetchData = this.fetchData.bind(this);
    }    
    componentDidMount(){
        this.fetchData();
    }
    fetchData (){
        axios.post('/api/data')
            .then(({data})=>{
                this.setState({data});                
            })
            .catch((err)=>{
                console.log(err)
            });        
    }
    render() {
        return (
            <div className='app'>
                <h1>Charts</h1>
                <Chart data={this.state.data} />
            </div>
        );
    }
}

export default App;