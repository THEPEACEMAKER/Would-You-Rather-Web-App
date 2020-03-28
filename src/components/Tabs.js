import React from 'react'

function QuestionsContainer(props){
  return (
    <div className="app-buttons">
    	<a href="unansweredList">
	    	<button
		    	className="left-button"
		    	id= {props.page === 'unanswered' ? 'active' : null}
	    	>Unanswered</button>
    	</a>
    	<a href="answeredList">
	    	<button
	    		className="right-button"
	    		id= {props.page === 'answered' ? 'active' : null}
	    	>Answered</button>
    	</a>
    </div>
  )
}

export default QuestionsContainer
