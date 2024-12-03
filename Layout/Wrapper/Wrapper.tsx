import React, { ReactNode } from 'react'
// import Header from '../Header'
// import Footer from '../Footer'
import Header from '../Header'
import Footer from '../Footer'
interface props{
    children:ReactNode
}
const Wrapper:React.FC<props>= ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Wrapper