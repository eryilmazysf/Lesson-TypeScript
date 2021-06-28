import React from 'react';
import { TextField } from "./TextField"

const App: React.FC = () => {

  return (
    <div>
      <p>Yusuf</p>
      <TextField text="hello" person={{ firstName: "", lastName: "" }}
      />
    </div>
  )
}

export default App;
