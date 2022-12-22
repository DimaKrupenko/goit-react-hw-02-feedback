import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions'
import React from 'react';
import Statistics  from './Feedback/Statistics/Statistics';
import Section from './Feedback/Section/Section';
import Notification from './Feedback/Notification/Notification'

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
  
   handleClick = (evt) => {
       const id = evt.target.getAttribute('id')
        this.setState((prevState) => {
            return {
                [id]: prevState[id] + 1
            }
        })
        
   }
  

  render() {
    return (
      
      <div
       style={{
        height: '100vh',
        fontSize: 30,
        color: '#010101'
      }}
>
       
        <Section title="Please leave feedback"/>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleClick}
        />
        
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