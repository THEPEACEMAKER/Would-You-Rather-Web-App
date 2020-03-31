import React from 'react'
import { Link } from 'react-router-dom'

function QuestionsContainer(props){
  return (
    <div className="app-buttons">
    	<Link to='/'>
    		<button
		    	className="left-button"
		    	id= {props.page === 'unanswered' ? 'active' : null}
	    	>Unanswered</button>
    	</Link>
    	<Link to='/answered'>
    		<button
	    		className="right-button"
	    		id= {props.page === 'answered' ? 'active' : null}
	    	>Answered</button>
    	</Link>
    </div>
  )
}

export default QuestionsContainer
