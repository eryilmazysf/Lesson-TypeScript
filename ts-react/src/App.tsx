import React from 'react';
import { TextField } from "./TextField"

const App: React.FC = () => {

  return (
    <div>
      <p>Yusuf</p>
      <TextField text="hello" person={{ firstName: "", lastName: "" }}
      // handleChange={e => e.target.value}
      />
    </div>
  )
}

export default App;
