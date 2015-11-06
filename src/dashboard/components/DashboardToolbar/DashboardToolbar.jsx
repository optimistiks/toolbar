import React from 'react';
import DashboardIcon from '../DashboardIcon/DashboardIcon.jsx';


class DashboardToolbar extends React.Component {



    render() {
        return (<div className="dashboard-toolbar">
            <img className="dashboard-toolbar__logo" src="static/img/logo.svg"/>
            <div className="dashboard-toolbar__controls">

                <div className="dashboard-toolbar__main-controls">
                    <DashboardIcon iconId="new" mod="disabled"/>
                    <DashboardIcon iconId="download" mod="blue"/>
                    <DashboardIcon iconId="favourite" mod="disabled"/>
                    <input type="text" placeholder="not implemented"/>
                    <DashboardIcon iconId="undo" mod="disabled"/>
                    <DashboardIcon iconId="redo" mod="disabled"/>
                    <DashboardIcon iconId="history" mod="disabled"/>
                </div>

                <DashboardIcon iconId="play" mod="disabled"/>
                <DashboardIcon iconId="expand" mod="disabled"/>
                <div className="dashboard-toolbar__control-group">
                    <DashboardIcon iconId="text_editor" mod="green"/>
                    <DashboardIcon iconId="shape_pane" mod="disabled"/>
                    <DashboardIcon iconId="property_pane" mod="disabled"/>
                </div>
                <div className="dashboard-toolbar__control-group">
                    <DashboardIcon iconId="comment" mod="disabled"/>
                    <DashboardIcon iconId="share" mod="disabled"/>
                    <DashboardIcon iconId="user" mod="blue"/>
                    <DashboardIcon iconId="guide" mod="blue"/>
                </div>


            </div>
        </div>);
    }

}

export default DashboardToolbar;
