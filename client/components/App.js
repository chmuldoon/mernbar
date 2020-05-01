import React from 'react'
import Header from './Header'
export const App = () => {
  console.log("hit")
  return (
    <div>
      <Header/>
      {/* {props.children} */}
    </div>
  )
}
export default App;