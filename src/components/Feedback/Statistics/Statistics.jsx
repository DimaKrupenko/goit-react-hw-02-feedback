import React from 'react';
import styles from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return (
        
        <ul className={styles.list} > Statistics:
                <li className={styles.list__item}> Good: {good}</li>
                <li className={styles.list__item}> Neutral: {neutral}</li>
                <li className={styles.list__item}> Bad: {bad}</li>
                <li className={styles.list__item}> Total: {total} </li>
                <li className={styles.list__item}> Positive Feedback: {positiveFeedback}%</li>
            </ul>)
}

export default Statistics