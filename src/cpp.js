import React from 'react'
import ReactDOM from 'react-dom';
import Router from "./router";
class Children extends React.Component {
    constructor(props) {
        super(props)
    }
    setVal(val) {
        console.log(val);
        this.props.getValues(val)
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setVal('dddd')
                }}>{this.props.aa}</button>
            </div>
        )
    }
}

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            t: 8888
        }
    }

    getTTT(data) {
        console.log('jieshou', data);
    }
    setVal() {
        this.setState({
            t: 999
        })
    }
    render() {
        return (
            <div>

                <button onClick={() => { this.setVal() }}>我是父组件</button>
                <Children getValues={this.getTTT} aa={this.state.t} />
            </div>
        )
    }
}


export default Parent
// ReactDOM.render(<Parent />, document.getElementById("map"));

