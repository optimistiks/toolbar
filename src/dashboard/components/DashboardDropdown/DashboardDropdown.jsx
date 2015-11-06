import React from 'react';


class DashboardDropdown extends React.Component {

    getClassName() {
        return `dashboard-toolbar__dropdown dashboard-toolbar__dropdown_visible_${this.props.visible ? 'yes': 'no'}`;
    }

    render() {
        return (
            <div className={this.getClassName()}>
                <div>
                    <a className="dashboard-toolbar__dropdown__link" href="#">My account</a>
                </div>
                <div>
                    <a className="dashboard-toolbar__dropdown__link" href="#">Plan & Billing</a>
                </div>
                <hr/>
                <div>
                    <p className="dashboard-toolbar__dropdown__text">user@email.com</p>
                    <a className="dashboard-toolbar__dropdown__link" href="#">Logout</a>
                </div>
            </div>
        );
    }

}

DashboardDropdown.propTypes = {
    visible: React.PropTypes.bool.isRequired
};

export default DashboardDropdown;
