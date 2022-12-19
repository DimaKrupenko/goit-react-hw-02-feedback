import React from 'react';
import styles from './FeedbackOptions.module.css'


const FeedbackOptions = ({good, neutral, bad}) =>  {

        return (<div className={styles.buttonConteiner}>
           
          <button className={styles.button} type="click" onClick={good}>Good</button>
            <button className={styles.button} type="click" onClick={neutral}>Neutral</button>
            <button className={styles.button} type="click" onClick={bad}>Bad</button>
            
      </div>
    );
}
export default FeedbackOptions




