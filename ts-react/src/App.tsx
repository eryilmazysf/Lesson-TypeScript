import React from 'react';
import ReducerExample from './ReducerExample';
import { TextField } from "./TextField"

const App: React.FC = () => {

  return (
    <div>
      <p>Yusuf</p>
      <TextField text="hello" person={{ firstName: "", lastName: "" }} />
      <ReducerExample />
    </div>
  )
}

export default App;
