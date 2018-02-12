import Auxiliary from "../hoc/Auxiliary";
import layoutClasses from "./Layout.css";
import Toolbar from "../sharedUI/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../sharedUI/Navigation/Sidedrawer/Sidedrawer";
import React, {Component} from "react";


class Layout extends Component {
    state = {
        sideDrawerIsOpen: false
    };

    sideDrawerOpenHandler = () => {
        this.setState({sideDrawerIsOpen: true});
    };

    sideDrawerCloseHandler = () => {
        this.setState({sideDrawerIsOpen: false});
    }

    render() {
        return (
            <Auxiliary>
                <Sidedrawer open={this.state.sideDrawerIsOpen} closeHandler={this.sideDrawerCloseHandler}/>
                <Toolbar drawerOpenHandler={this.sideDrawerOpenHandler}/>
                <main className={layoutClasses.content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
    
};

export default Layout;