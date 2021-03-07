import React, { Component } from 'react'
import axios from 'axios';

export class Motosan extends Component {
    state = {
        cards: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`https://www.motosan.es/wp-json/wp/v2/posts`)
            .then(res => this.setState({
                cards: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state)
        return (
            <div>
                
            </div>
        )
    }
}

export default Motosan
