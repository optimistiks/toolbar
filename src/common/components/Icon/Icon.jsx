import React from 'react';

class Icon extends React.Component {

    getClassName() {

        return `icon-${this.props.iconId} ${this.props.className}`;

    }

    render() {

        return <span className={this.getClassName()}/>;

    }

}

Icon.propTypes = {
    iconId: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
};

export default Icon;
