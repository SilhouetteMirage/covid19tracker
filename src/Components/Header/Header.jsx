import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styles from "./Header.module.css";

class Header extends Component {
    render() {
        return (
            <header style={{height: '4em', paddingTop: '1em', paddingBottom: '1em', display: 'grid', justifyContent: 'center', width: '100%'}}>
                <AppBar style={{color: '#CCC', backgroundColor: 'rgba(20, 20, 20, 1.0)'}}>
                    <Toolbar>
                        <Button className={styles.navButton}
                        href="#"
                        size='medium'
                        variant='outlined'
                        >
                            home
                        </Button>
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}

export default Header;