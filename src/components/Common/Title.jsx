import React from 'react'
import Separator from './Separator'

const Title = ({title}) => {
  return (
    <div className='section__heading'>
    <h1 className="headtext__title" style={{textAlign:'center'}}>{title}<span className='custom-red'>.</span></h1>
    <Separator />
     </div> 
  )
}

export default Title