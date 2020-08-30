import React from 'react'
import { CHOOSE, LISTEN } from '../../utilits/constant'

const EmptyDescription = () => {

  return (
    <section className='description__container'>
      <div className='descriptio__preview'>
        <div>{LISTEN}</div>
        <article>{CHOOSE}</article>
      </div>
    </section>
  )
}

export default EmptyDescription