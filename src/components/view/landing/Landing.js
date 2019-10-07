import React from 'react'
import ArticleList from '../article/ArticleList';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: undefined
        }
    }
    
    getArticles(username='ashraful') {
        fetch('https://dev.to/api/articles/?username=' + username).then((response) => {
            return response.json()
        }).then((articles) => {
            this.setState({articles: articles})
            // console.log(this.state.articles)
        })
    }

    async componentDidMount() {
        await this.getArticles();
    }

    render() {
        return (
            <div className="container">
                <ArticleList articles={this.state.articles}/>
            </div>
        )
    }
}