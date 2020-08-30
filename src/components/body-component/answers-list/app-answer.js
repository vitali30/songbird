import React, {Component} from 'react'
import './app-answer.css'

export default class AnswerWariant extends Component {

  render() {
    const { onClickWariant, wariantsPoints } = this.props
   
    const creatingElements = this.props.children.map(({name, id}) => {
      let clazz = ''
      if(wariantsPoints[id].checking === 'none') {
        clazz = 'point grey'
      }else if(wariantsPoints[id].checking === 'green') {
        clazz = 'point green'
      }else if(wariantsPoints[id].checking === 'red') {
        clazz = 'point red'
      }

    return (
      <button 
        className="list-group-item list-group-item-action" 
        key={id} 
        id={id}
        onClick={() => onClickWariant(id)}
      >
        <div className={clazz}></div>
          <article>
            {name}
          </article>
      </button>
    )
    })
    return (
      <section className="list-group answer__container">
        {creatingElements}
      </section>
    )
  }
}