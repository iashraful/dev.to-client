import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {}
        }
    }
    getAnArticle(id=89784) {
        fetch('https://dev.to/api/articles/' + id).then((response) => {
            return response.json()
        }).then((article) => {
            this.setState({article: article})
        })
    }

    render() {
        this.getAnArticle();
        return (
            <div className="container">
                <h2>Landing page</h2>
                <hr/>
                <ReactMarkdown source={
                    this.state.article.body_markdown
                }/>
            </div>
        )
    }
}