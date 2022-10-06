import React, { Component } from 'react';
import {Section} from '../Section/Section'
import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions';
import {Statistics} from '../Statistics/Statistics';

export class App extends Component {

  state = {
     good: 0,
     neutral: 0,
     bad: 0
  }

  handleFeedback = evt => {
     this.setState(prevState => {
     return {
     [evt]: prevState[evt] + 1,
     };
   });
  };

  countTotalFeedback = () => {
     return Object.values(this.state).reduce((sum, current) => sum + current)
  };

  countPositiveFeedbackPercentage = () => {
   const { good, neutral } = this.state

   return Math.round((good + neutral) * 100 / (this.countTotalFeedback()))
  }

  render() {

     return (
       <>
         <Section title = "Please leave feedback">
           <FeedbackOptions
             options={['good', 'neutral', 'bad']}
             onLeaveFeedback={this.handleFeedback}
           />
         </Section>
         <Section title = "Statistics">
           <Statistics
             good={this.state.good}
             neutral={this.state.neutral}
             bad={this.state.bad}
             total={this.countTotalFeedback}
             positivePercentage={this.countPositiveFeedbackPercentage}/>
         </Section>
       </>


       );
   };
}
