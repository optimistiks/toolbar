import React from 'react';
import Icon from '../../../common/components/Icon/Icon.jsx';


class DashboardIcon extends React.Component {

    getClassName() {

        return `dashboard-toolbar__icon dashboard-toolbar__icon_${this.props.mod}_yes`;

    }

    render() {

        return (<Icon
            iconId={this.props.iconId}
            className={this.getClassName()}
        />);
    }

}

DashboardIcon.propTypes = {
    iconId: React.PropTypes.string.isRequired,
    mod: React.PropTypes.string.isRequired
};

export default DashboardIcon;
