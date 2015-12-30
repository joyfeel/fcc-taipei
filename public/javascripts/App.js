import React from 'react';
import ReactDOM from 'react-dom';
import Radium, { Style } from 'radium'

//TODO
const styles = {
    base: {

    }
};

@Radium
class App extends React.Component {
    render () {
        return (
            <div className="loginForm">
                <Style 
                    scopeSelector=".loginForm"
                    rules={{
                        '::-webkit-input-placeholder': {
                            textAlign: 'center'
                        },
                        ':-moz-placeholder': {
                            textAlign: 'center'
                        },
                       '::-moz-placeholder': {
                            textAlign: 'center'
                        },
                        ':-ms-input-placeholder': {
                            textAlign: 'center'
                        }
                    }} />
                <div>
                    <input type='text' placeholder='E-mail' /> 
                </div>
                <div>
                    <input type='password' placeholder='Password' /> 
                </div>
            </div>  
        );
    }
}

export default App;