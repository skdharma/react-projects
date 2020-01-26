import React, {Component} from 'react';
import Header from './Header';
import NewsDetails from './NewsDetails';
import JSON from '../db.json';



class Home extends Component {

    constructor() {
        super()
        this.state = {
            news: JSON,
            filtered: JSON,
        }
    }

    filterNew(keyword) {
        const output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
        })
        this.setState({filtered:output})
    }

    render() {
        return(
            <React.Fragment>
                <Header newsSearch={(userInput) => this.filterNew(userInput)}/>
                <NewsDetails newsdata={this.state.filtered}/>
            </React.Fragment>
        )
    }
}

export default Home;