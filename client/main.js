import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/Header'
import Link_create from './components/Link_create'

const App = () => {
  return (
   <div>
      <Header />
      <Link_create />
   </div>
  )
}

Meteor.startup(() => {
  ReactDom.render(<App />, document.querySelector('.render-target'))
})
