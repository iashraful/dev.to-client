import React from 'react'
import PostTags from "../../ui/PostTags";

export default class ArticleEachItem extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <a href={'/posts/' + this.props.article.id} className="is-link title is-5">
                                <img src={this.props.article.cover_image} alt={this.props.article.description}/>
                            </a>
                            <span className="img-date-stamp">
                                <time dateTime="2016-1-1">{new Date(this.props.article.published_at).toDateString()}</time>
                            </span>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={this.props.article.user.profile_image} alt={this.props.article.user.name}/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-6">{this.props.article.user.name}</p>
                                <p className="subtitle is-6">@{this.props.article.user.twitter_username}</p>
                            </div>
                        </div>

                        <div className="content">
                            <a href={'/posts/' + this.props.article.id} className="is-link title is-5">{this.props.article.title}</a>
                            <PostTags tags={this.props.article.tag_list}/>
                            <br/>
                        </div>
                    </div>
                </div>

                <hr/>
            </div>
        )
    }
}