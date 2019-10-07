import React from 'react'
import ArticleEachItem from './ArticleEachItem'

export default class ArticleList extends React.Component {
    render() {
        let _articles = this.props.articles ? this.props.articles : [];
        
        return (
            <div className="columns is-multiline is-mobile">
                {_articles.map((item, _index) => {
                    return (
                        <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile" key={item.id}>
                            <ArticleEachItem article={item}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}