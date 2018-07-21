import React from 'react';

import LoginView from './LoginView';
import SignUpView from './SignUpView';
import PasswordResetView from './PasswordResetView';

class AuthView extends React.Component{
        // 1 : login


    constructor(){
        super();

        this.state = {
            currentView : 1
        }
    }

    changeView(newView){
        this.setState({
            currentView: newView
        })
    }

    render(){

        return this.state.currentView === 1 ? <LoginView onViewChange={this.changeView.bind(this)}/>
            : this.state.currentView === 2 ? <SignUpView onViewChange={this.changeView.bind(this)}/>
            : <PasswordResetView onViewChange={this.changeView.bind(this)}/>
    }
}

export default AuthView;