import React from 'react';
import styles from './FeedbackOptions.module.css'


const FeedbackOptions = ({options, onLeaveFeedback}) =>  {
const keys = Object.keys(options)
  return (<div className={styles.buttonConteiner}>
           { keys.map(key => (
             <button className={styles.button}
               type="button"
               key={key}
               id={key}
               onClick={onLeaveFeedback}>{key}</button>
          ))} 
          
            
      </div>
    );
}
export default FeedbackOptions




