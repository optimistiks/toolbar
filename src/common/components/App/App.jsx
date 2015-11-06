import 'normalize.css';
import '../../styles/icons.css';
import React from 'react';


class App extends React.Component {

    render() {
        return (<div>
            {this.props.children}
        </div>);
    }

}

export default App;
