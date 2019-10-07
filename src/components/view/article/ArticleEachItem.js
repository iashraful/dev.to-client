import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class ArticleEachItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <a href={'/posts/' + this.props.article.id} className="link">{this.props.article.title}</a>
                <p className="sub-title">{this.props.article.description}</p>
                <hr/>
            </div>
        )
    }
}