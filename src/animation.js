import React, { Component } from 'react';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';


class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true
         }
        this.toToggle=this.toToggle.bind(this)
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in = {this.state.isShow}
                    timeout={1000}
                    classNames='animation'
                    unmountOnExit
                >
                    <div className={this.state.isShow?'show':'hide'}>hi hello how are you</div>
                </CSSTransition>
                
                <div><button onClick={this.toToggle}>I'm fine,and you?</button></div>
            </div>
         );
    }
    toToggle(){
        this.setState({
            isShow:this.state.isShow? false:true
        })
    }
}
 
export default Animation;