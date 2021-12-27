// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

const copyDate = new Date().getFullYear();

class Footer extends Component {
    render() {
        return (
            <footer style={{
                height: '1.5em',
                paddingTop: '1em',
                paddingBottom: '2em',
                display: 'grid',
                justifyContent: 'center',
                width: '100%',
                color: '#CCC',
                backgroundColor: 'rgba(20, 20, 20, 1.0)'
                }}
            >
                &copy; {copyDate} Jennifer Zilar 
                <span style={{fontSize: '0.7em'}}>
                    Created using&nbsp;
                    <a href="https://towardsdatascience.com/lets-create-a-covid-19-tracker-using-react-js-5a3a0265a633"
                    target="_blank"
                    rel="noreferrer"
                    style={{color: 'rgba(23, 206, 175, 0.8)', textDecoration: 'none'}}>Sabesan Sathanathan</a>'s tutorial.</span>
            </footer>
        );
    }
}

export default Footer;