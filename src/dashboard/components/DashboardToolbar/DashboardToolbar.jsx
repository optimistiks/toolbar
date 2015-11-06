import React from 'react';
import fullScreen from '../../../common/modules/app-fullscreen/index';
import DashboardIcon from '../DashboardIcon/DashboardIcon.jsx';
import DashboardDropdown from '../DashboardDropdown/DashboardDropdown.jsx';
import DashboardSearch from '../DashboardSearch/DashboardSearch.jsx';


class DashboardToolbar extends React.Component {

    constructor(props) {

        super(props);

        //set initial state
        this.state = {fullScreen: false, dropdown: false};

        //bind event handlers to class instance
        this.handleFsAttain = this.handleFsAttain.bind(this);
        this.handleFsRelease = this.handleFsRelease.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);

    }

    componentWillMount() {

        /**
         * bind to fullscreen change on mount
         */
        fullScreen.on('attain', this.handleFsAttain);
        fullScreen.on('release', this.handleFsRelease);

    }

    componentWillUnmount() {

        /**
         * unbind on unmount, so we don't create a memory leak
         */
        fullScreen.removeListener('attain', this.handleFsAttain);
        fullScreen.removeListener('release', this.handleFsRelease);

    }

    handleFsAttain() {
        this.setState({fullScreen: true});
    }

    handleFsRelease() {
        this.setState({fullScreen: false});
    }

    /**
     * turn fullscreen on/off based on current fullscreen target
     */
    toggleExpand() {
        fullScreen.target() ? fullScreen.release() : fullScreen.request();
    }

    /**
     * toggle dropdown visibility
     */
    toggleDropdown() {
        this.setState({dropdown: !this.state.dropdown});
    }

    render() {
        return (
            <div className="dashboard-toolbar">

                <img className="dashboard-toolbar__logo" src="static/img/logo.svg"/>

                <div className="dashboard-toolbar__main-controls">
                    <DashboardIcon iconId="new" mod="disabled"/>
                    <DashboardIcon iconId="download" mod="blue"/>
                    <DashboardIcon iconId="favourite" mod="disabled"/>
                    <DashboardSearch />
                    <DashboardIcon iconId="undo" mod="disabled"/>
                    <DashboardIcon iconId="redo" mod="disabled"/>
                    <DashboardIcon iconId="history" mod="disabled"/>
                </div>

                <div className="dashboard-toolbar__controls">

                    <DashboardIcon iconId="play" mod="disabled"/>
                    <span onClick={this.toggleExpand}>
                        <DashboardIcon iconId={this.state.fullScreen ? 'reduce' : 'expand'} mod="disabled"/>
                    </span>

                    <div className="dashboard-toolbar__control-group">
                        <DashboardIcon iconId="text_editor" mod="green"/>
                        <DashboardIcon iconId="shape_pane" mod="disabled"/>
                        <DashboardIcon iconId="property_pane" mod="disabled"/>
                    </div>

                    <div className="dashboard-toolbar__control-group">
                        <DashboardIcon iconId="comment" mod="disabled"/>
                        <DashboardIcon iconId="share" mod="disabled"/>
                        <span onClick={this.toggleDropdown}>
                            <DashboardIcon iconId="user" mod="blue"/>
                        </span>
                        <DashboardIcon iconId="guide" mod="blue"/>
                    </div>

                </div>

                <DashboardDropdown visible={this.state.dropdown}/>

            </div>
        );
    }

}

export default DashboardToolbar;
