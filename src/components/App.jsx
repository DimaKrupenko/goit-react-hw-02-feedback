import FeedbackOptions from './Feedback/FeedbackOptions'
import React from 'react';
import Statistics  from './Feedback/Statistics';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification'

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  countTotalFeedback = (state) => {
        let result = 0
        result = this.state.good + this.state.neutral + this.state.bad
        
        return result    
  }
  countPositiveFeedbackPercentage = (state) => {
        if (this.countTotalFeedback() === 0) {
            return 0
        }
        let procent = 0
        procent = Math.round(((this.state.good * 100) / this.countTotalFeedback()) )
        
        return procent
  }
  
   handleGood = () => {
       
        this.setState((prevState) => {
            return {
                good: 3,
            }
        })
        
   }
  
  handleNeutral = () => {
        this.setState((prevState) => {
            return {
                neutral: 2,
            }
        })
  }
  
  handleBad = () => {
          this.setState((prevState) => {
              return {
                  bad: 2,
              }
        })
     }

  render() {
    return (
      
      <div>
        <Section title="Please leave feedback"/>
        <FeedbackOptions goodClick={this.handleGood}
          neutralClick={this.handleNeutral}
          badClick={this.handleBad} />
        
        {this.countTotalFeedback() === 0 ? <Notification message="There is no feedback"/>
         :
       <Statistics good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}/>}
      </div>
    );
  };
}

export default App