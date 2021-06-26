import React, { Component } from 'react';
class CounterInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            erroMsg:'',
            maxVal: props.max ? props.max : 1000,
            minVal: props.min ? props.min : 1,
            value: props.startVal ? props.startVal : 1,
        }
    }
    onValueChange(e)
    {
        const re = /^[0-9\b]+$/;
        let value = e.target.value;
        if (value === '' || re.test(value)) {
           this.setState({value: value});
        }
    }
    updateValue(isIncrement)
    {
        let value = this.state.value;
        if(isIncrement)
        {
            value++;
        }
        else
        {
            value--;
        }
        value = this.validateValue(value);
        this.setState({value});
    }
    validateInput()
    {
        let value = this.state.value;
        value = this.validateValue(value);
        this.setState({value});
    }
    validateValue(value)
    {
        if(value > this.state.maxVal)
        {
            this.setState({erroMsg:'Value Exceeds the maximum limit'});
            return this.state.maxVal;
        }
        else if(value < this.state.minVal)
        {
            this.setState({erroMsg:'Value is lower than minimum allowed'});
            return this.state.minVal;
        }
        if(this.state.erroMsg)
        {
            this.setState({erroMsg:''});
        }
        return value;
    }
    render() {
        const decClass = this.state.value <= this.state.minVal ? "decrement-button disabled" : "decrement-button";
        const incClass = this.state.value >= this.state.maxVal ? "increment-button disabled" : "increment-button";
        return (
            <div className="counter-input-container">
                <div className="counter-input-wrapper d-flex">
                    <div className={decClass} onClick={this.updateValue.bind(this,false)}>
                        <span>-</span>
                    </div>
                    <input type="text" value={this.state.value} onChange={this.onValueChange.bind(this)} onBlur={this.validateInput.bind(this)}/>
                    <div className={incClass} onClick={this.updateValue.bind(this,true)}>
                        <span>+</span>
                    </div>
                </div>
                <div className="error-lable">
                {this.state.erroMsg ? <span> {this.state.erroMsg}</span> : null}
                </div>
            </div>
        );
    }
}
export default CounterInput;
