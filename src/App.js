import React from 'react'
import { data } from './data';
import Recursive from './components/Recursive';

const App = () => {
  return (
    <>
      <Recursive data={data} />
    </>
  )
}

export default App
