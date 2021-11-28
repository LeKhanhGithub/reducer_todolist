import './App.css';
import { useReducer, useRef } from 'react';

// innitState
const innitState = {
  job: "",
  jobs: []

}

// action

const SETJOB = "SetJob";
const ADDJOB = "AddJob";
const DELETEJOB = "DeleteJob";

const setJob = value => {
  return {
    type: SETJOB,
    value
  }
}

const addJob = value => {
  return {
    type: ADDJOB,
    value
  }
}

const deleteJob = value => {
  return {
    type: DELETEJOB,
    value
  }
}

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SETJOB:
      return {
        ...state,
        job: action.value,
      }

    case ADDJOB:
      return {
        ...state,
        jobs: [...state.jobs, action.value]
      }

    case DELETEJOB:
      const newState = { ...state };
      newState.jobs.splice(action.value, 1);
      return newState
    default:
      throw new Error("invalid action");
  }
}


// dispatch

function App() {

  const [state, dispatch] = useReducer(reducer, innitState);

  const inputRef = useRef();

  const { job, jobs } = state;

  const handleOnchange = (value) => {
    dispatch(setJob(value));
  }

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  }

  const handleDelete = (index) => {
    dispatch(deleteJob(index));
  }

  return (
    <div className="todolist">
      <div>
        <h1>Todolist</h1>
        <input
          ref={inputRef}
          placeholder="enter into here"
          value={job}
          onChange={(e) => { handleOnchange(e.target.value) }}
        ></input>
        <button onClick={handleSubmit}>ADD</button>
        <ul>
          {jobs.map((job, index) => {
            return (
              <li key={index} onClick={() => handleDelete(index)}>{job}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App;
