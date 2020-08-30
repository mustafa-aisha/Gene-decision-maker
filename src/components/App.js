import React, { Component } from 'react' 
import './App.css'


export class App extends Component {
    state = {
        question: '',
        firstOption : '',
        secondOption : '',
        thirdOption : '',
        fourthOption : '',
        fifthOption : '',
        answer : ''
    }

    handleQuestion = (e) => {
        this.setState({
            question: e.target.value
        })
    }

    handleFirstOption = (e) => {
        this.setState({
            firstOption: e.target.value
        })
    }

    handleSecondOption = (e) => {
        this.setState({
            secondOption: e.target.value
        })
    }

    handleThirdOption = (e) => {
        this.setState({
            thirdOption: e.target.value
        })
    }

    handleFourthOption = (e) => {
        this.setState({
            fourthOption: e.target.value
        })
    }

    handleFifthOption = (e) => {
        this.setState({
            fifthOption: e.target.value
        })
    }

   generateAnswers = (e) => {
    e.preventDefault()
    var answers = [this.state.firstOption,this.state.secondOption,this.state.thirdOption,this.state.fourthOption,this.state.fifthOption]
    var random = Math.floor(Math.random() * 5)
    this.setState({answer: answers[random]})
    }

    render() {
        return (
            <div className = "container">
                <br/>
                <form onSubmit = {this.generateAnswers}>
                    <h1>Question</h1>
                    <div className="form-group">
                        <input type="text" className="form-control" id="question" onChange = {this.handleQuestion} value = {this.state.question}/>   
                    </div>
                    <h1>Options</h1>
                    <div className="form-group">     
                        <input type="text" className="form-control" id="option1" placeholder = 'A' onChange = {this.handleFirstOption} value = {this.state.firstOption}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="option2" placeholder = 'B'  onChange = {this.handleSecondOption} value = {this.state.secondOption}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="option3" placeholder = 'C' onChange = {this.handleThirdOption} value = {this.state.thirdOption}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="option4" placeholder = 'D' onChange = {this.handleFourthOption} value = {this.state.fourthOption}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="option5" placeholder = 'E' onChange = {this.handleFifthOption} value = {this.state.fifthOption}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Generate Answers</button>
                </form><br/>

                <div>
                   <h4>{this.state.question}</h4>
                   <ul>
                       <li style = {{listStyleType: 'none'}}>{this.state.firstOption}</li><br/>
                       <li style = {{listStyleType: 'none'}}>{this.state.secondOption}</li><br/>
                       <li style = {{listStyleType: 'none'}}>{this.state.thirdOption}</li><br/>
                       <li style = {{listStyleType: 'none'}}>{this.state.fourthOption}</li><br/>
                       <li style = {{listStyleType: 'none'}}>{this.state.fifthOption}</li><br/>
                   </ul>
                    <h3 className = "text-center" style = {{color: 'white'}}>{this.state.answer}</h3>
                </div>
            </div>
        )
    }
}
export default App
