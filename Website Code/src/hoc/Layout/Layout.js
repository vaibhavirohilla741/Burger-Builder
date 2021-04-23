import React, {Component} from 'react';
import Aux from '../Auxillary/Auxillary';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css'

class Layout extends Component  {
    state = {
        showSideDrawer: false
    }

    showSideDrawerHandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDrawerTogglerHandler = () => {
        this.setState( (prevState) => {
           return {showSideDrawer:!this.state.showSideDrawer};
        });
    }

    render() {

        return (
            <Aux>
                <Toolbar clicked={this.sideDrawerTogglerHandler} />
                <SideDrawer
                 closed={this.showSideDrawerHandler}
                 open={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
    


        )
    }
}

    


export default Layout;
