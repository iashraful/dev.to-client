import React from 'react'
import ArticleEachItem from './ArticleEachItem'

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let _articles = this.props.articles ? this.props.articles : [];
        
        return (
            <div>
                {_articles.map((item) => {
                    return (
                        <ArticleEachItem article={item} key={item.id}/>
                    )
                })}
            </div>
        )
    }
}