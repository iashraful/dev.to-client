import React from 'react'


export default class PostTags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tagClasses: [
                'is-dark', 'is-light', 'is-primary', 'is-black',
                'is-link', 'is-info', 'is-danger', 'is-success', 'is-warning',
            ]
        }
    }

    getTagStyleClass() {
        const _classes = this.state.tagClasses;
        return 'tag ' + _classes[Math.floor(Math.random()*_classes.length)];
    }

    render() {
        const _tags = this.props.tags ? this.props.tags : ['x', 'y'];
        return (
            <div>
                {_tags.map((tag, _i) => {
                    return (
                        <span
                            key={_i}
                            className={this.getTagStyleClass()}
                            style={{marginRight: '5px'}}
                        >{tag}</span>
                    )
                })}
            </div>
        )
    }
}