import React, { Component } from 'react';

class Content extends Component {

    constructor() {
        super()
        this.count = 1;
    }

    componentWillReceiveProps() {
        this.count = 1;
    }


    renderLabel(data) {
        return [
            <div className="card__content__label">{this.count++}</div>,
            <b>{data}</b>
        ]
    }

    render() {
        const data = this.props.data;
        // this.props.data.map((object,index) => {
        //     console.log(index);
        // })
        // <span>{data.indexOf(data.color)}</span>
        return (
            <div className="card__content">
                <p>
                    Leaves are {this.renderLabel(data.color)} and  {this.renderLabel(data.nounOne)} is cool {this.renderLabel(data.adjectiveOne)} mother. The best celebrity is {this.renderLabel(data.celebOne)} That is very  {this.renderLabel(data.adjectiveTwo)} knife is cutting {this.renderLabel(data.nounTwo)} for rp+. That is counting {this.renderLabel(data.numberOne)} from one to {this.renderLabel(data.numberTwo)} houses. The {this.renderLabel(data.nounThree)} is better than the{this.renderLabel(data.adjectiveThree)} field. But {this.renderLabel(data.celebTwo)} is going to Moldova and its name is{this.renderLabel(data.celebThree)}, the {this.renderLabel(data.adjectiveFour)} .Celebrity .Cool  {this.renderLabel(data.nounFour)} is the best {this.renderLabel(data.celebFour)} or not. but i think he/she is {this.renderLabel(data.adjectiveFive)}.   
                </p>
            </div>
        )
    }
}

export default Content;