import React, {Component} from 'react'
import './navigation-header.css'

export default class Navigation extends Component {
    
    birdNames = [
        {name: 'Разминка', id: 0},
        {name: 'Воробьиные', id: 1},
        {name: 'Лесные птицы', id: 2},
        {name: 'Певчие птицы', id: 3},
        {name: 'Хищные птицы', id: 4},
        {name: 'Морские птицы', id: 5},
    ]

    render() {
        const {nowLevel} = this.props
        const creatingButtons = this.birdNames.map(({name, id}) => {
            const clazz = nowLevel === id ? 'nav_element active' : 'nav_element'
            return<article className={clazz} id={id} key={id}>{name}</article>
        })
        return (
            <section className="navigation__group">
                {creatingButtons}
            </section>
        )
    }
}