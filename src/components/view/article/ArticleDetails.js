import React from 'react'
import ReactMarkdown from 'react-markdown'
import * as articleUtils from '../../../utils/article-utils'
import ArticleEachItem from "./ArticleEachItem";

export default class ArticleDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: undefined,
            articleBody: undefined
        }
    }

    getArticle() {
        const id = this.props.match.params.id;
        
        fetch('https://dev.to/api/articles/' + id).then((response) => {
            return response.json()
        }).then((article) => {
            if ('status' in article && article.status === 404) {
                this.setState({article: article, articleBody: 'No Article Found.'})
            }
            else{
                this.setState({article: article, articleBody: articleUtils.devPostMarkdownParser(article.body_markdown)})
            }
        })
    }

    componentDidMount() {
        this.getArticle()
    }

    render() {
        const _articleBody = this.state.articleBody ? <ReactMarkdown source={this.state.articleBody}/> : <p>Loading...</p>;
        const _title = this.state.article ? this.state.article.title : '';
        const _coverImage = this.state.article ? this.state.article.cover_image : '';
        return (
            <div className="container blog-container">
                <p className="title is-4 has-text-centered">{_title}</p>
                <img src={_coverImage}/>
                {_articleBody}
            </div>
        )
    }
}