import React from 'react'

const Title = ({titel,subTitle}) => {
  return (
    <div className='section-title'>
      <h2>{titel}<span>{subTitle}</span></h2>
    </div>
  )
}

export default Title
