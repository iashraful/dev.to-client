import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class ArticleDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article: undefined,
            articleBody: '#### No Data Found.'
        }
    }

    getArticle() {
        const id = this.props.match.params.id;
        
        fetch('https://dev.to/api/articles/' + id).then((response) => {
            return response.json()
        }).then((article) => {
            this.setState({article: article, articleBody: article.body_markdown})
            console.log(article)
        })
    }

    async componentWillMount() {
        await this.getArticle()
    }

    render() {
        return (
            <div className="container">
                <ReactMarkdown source={this.state.articleBody}/>
            </div>
        )
    }
}