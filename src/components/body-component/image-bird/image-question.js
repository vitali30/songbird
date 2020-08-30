import React from 'react'
import './image-question.css'

const ImageQuestion = ({image, alt}) => {
    return <img className='image_example' alt={alt} src={image}/>
}

export default ImageQuestion