import React from 'react'

function QuestionsContainer(props){
  const { onChange } = props
  return (
    <div className="app-buttons">
    		<button
		    	className="left-button"
		    	id= {props.page === 'unanswered' ? 'active' : null}
          onClick={onChange}
	    	>Unanswered</button>
    		<button
	    		className="right-button"
	    		id= {props.page === 'answered' ? 'active' : null}
          onClick={onChange}
	    	>Answered</button>
    </div>
  )
}

export default QuestionsContainer
