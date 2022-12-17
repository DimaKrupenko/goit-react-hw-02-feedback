import React from 'react';


const FeedbackOptions = ({goodClick, neutralClick, badClick}) =>  {

        return (<div>
           
            <button type="click" onClick={goodClick}>Good</button>
            <button type="click" onClick={neutralClick}>Neutral</button>
            <button type="click" onClick={badClick}>Bad</button>
            
      </div>
    );
    
    
}



export default FeedbackOptions



