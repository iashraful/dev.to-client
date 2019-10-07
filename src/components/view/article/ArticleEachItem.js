import React from 'react'
import PostTags from "../../ui/PostTags";

export default class ArticleEachItem extends React.Component {
    render() {
        return (
            <div>
                <a href={'/posts/' + this.props.article.id} className="link">{this.props.article.title}</a>
                <PostTags tags={this.props.article.tag_list}/>
                <p className="sub-title">{this.props.article.description}</p>
                <hr/>
            </div>
        )
    }
}