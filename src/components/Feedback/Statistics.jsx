import React from 'react';

const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return (
        
        <ul> Statistics
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total} </li>
                <li>Positive Feedback: {positiveFeedback}%</li>
            </ul>)
}

export default Statistics