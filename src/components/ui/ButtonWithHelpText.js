import React from 'react'
import 'bulma-tooltip/dist/css/bulma-tooltip.min.css'

export default class ButtonWithHelpText extends React.Component {
    render() {
        let defaultClasses = 'button ';
        if (this.props.cssClasses) {
            defaultClasses += this.props.cssClasses
        }
        return (
            <div>
                <button className={defaultClasses}>{this.props.text}</button>
                <button
                    onClick={this.props.handleAction}
                    className="button is-white is-rounded tooltip" 
                    data-tooltip={this.props.helpText}>?
                </button>
            </div>
        )
    }
}