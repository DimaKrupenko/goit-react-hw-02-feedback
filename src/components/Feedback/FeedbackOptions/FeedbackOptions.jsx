import React from 'react';
import styles from './FeedbackOptions.module.css'


const FeedbackOptions = ({goodClick, neutralClick, badClick}) =>  {

        return (<div className={styles.buttonConteiner}>
           
          <button className={styles.button} type="click" onClick={goodClick}>Good</button>
            <button className={styles.button} type="click" onClick={neutralClick}>Neutral</button>
            <button className={styles.button} type="click" onClick={badClick}>Bad</button>
            
      </div>
    );
}
export default FeedbackOptions


