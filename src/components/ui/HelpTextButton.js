import React from 'react'
import 'bulma-tooltip/dist/css/bulma-tooltip.min.css'

export default class HelpTextButton extends React.Component {
    render() {
        let defaultClasses = 'button ';
        if (this.props.cssClasses) {
            defaultClasses += this.props.cssClasses
        }
        return (
            <span>
                <button 
                    className="button is-white is-rounded tooltip" 
                    data-tooltip={this.props.helpText}>?
                </button>
            </span>
        )
    }
}