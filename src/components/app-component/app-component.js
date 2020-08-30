import React, {Component} from 'react'
import './app-component.css'
import Header from '../header-component/app-header'
import Question from '../body-component/app-quwestion'
import AnswerWariant from '../body-component/answers-list'
import DescriptionAnsw from '../body-component/app-description'
import Footer from '../footer-component'
import { birdsData, MAX_STAGE,  NEXT_LEVEL, REPEAT } from '../utilits/constant'
import EndComponent from '../body-component/end-component'
import clearWariantList from '../utilits/clear-arry'
import { playRight, playWrong } from '../utilits/audio'

export default class App extends Component {
   
        state = {
            score: 0,
            isFirstLoad: true,
            isFinishThisLevel: false,
            nowLevel: 0,
            nowQuestion: Math.floor(Math.random() * 6),
            wariantsList: [
                        {id:0, checking: 'none'},
                        {id:1, checking: 'none'},
                        {id:2, checking: 'none'},
                        {id:3, checking: 'none'},
                        {id:4, checking: 'none'},
                        {id:5, checking: 'none'}
                    ],
            trying: 0,
            objectForDescription: null,
        }

    onClickFooter = () => {
        const {nowLevel, score, objectForDescription} = this.state
        if (this.state.isFinishThisLevel || nowLevel === MAX_STAGE) {
            let newNowLevel = nowLevel === MAX_STAGE ? 0 : nowLevel + 1;
            let newScore = nowLevel === MAX_STAGE ? 0 : score;
            let newObjectDescription = nowLevel === MAX_STAGE ? null : objectForDescription;
            this.setState(({ wariantsList }) => {
            return{
                score: newScore,
                isFirstLoad: true,
                isFinishThisLevel: false,
                nowLevel: newNowLevel,
                nowQuestion: Math.floor(Math.random() * MAX_STAGE),
                wariantsList: clearWariantList(wariantsList),
                trying: 0,
                objectForDescription: newObjectDescription,
            }
        })
        }
    }

    setRightAnswer() {
        playRight();
        this.setState(({score, trying}) => {
            return{
                isFinishThisLevel: true,
                score: score += (MAX_STAGE - 1 - trying),
            }
        })
    }

    setWrongAnswer() {
        playWrong();
        this.setState(({trying}) => {
            return{
                trying: trying + 1
            }
        })
    }

    onClickWariant = (id) => {
        const {wariantsList, nowQuestion, nowLevel } = this.state;
        if(!this.state.isFinishThisLevel) {
            const indx = wariantsList.findIndex((el) => el.id === id);
            const currentElement = wariantsList[indx]
            if (id === nowQuestion) {
                this.setRightAnswer()
                currentElement.checking = 'green';
              }
            else if (currentElement.checking !== 'red'){
                this.setWrongAnswer()
                currentElement.checking = 'red';
              }
            const newWariants = [...wariantsList.slice(0, indx), 
                                    currentElement, 
                                    ...wariantsList.slice(indx+1)]
            this.setState({wariantsList: newWariants})
        }
        this.setState(() => {
            const newObjectDescription = birdsData[nowLevel][id]
            return{
                isFirstLoad: false,
                objectForDescription: newObjectDescription
            }
        })
    }

    ResizeBirdsNames = () => birdsData[this.state.nowLevel].map(({name, id}) => {return{name, id}})

    render(){
        const { nowLevel, 
                nowQuestion, 
                score, 
                wariantsList, 
                isFinishThisLevel, 
                isFirstLoad, 
                objectForDescription } = this.state;

        const footerText = nowLevel < MAX_STAGE ? NEXT_LEVEL : REPEAT;
        const gameBody = nowLevel === MAX_STAGE ? <EndComponent score={score} /> : 
            (<main>
                <Question
                    question={birdsData[nowLevel][nowQuestion]}
                    isFinishThisLevel={isFinishThisLevel}
                />
                <div className='flex_container'>
                    <AnswerWariant
                        onClickWariant={this.onClickWariant}
                        wariantsPoints={wariantsList}>
                            {this.ResizeBirdsNames()}
                    </AnswerWariant>

                    <DescriptionAnsw
                        isFirst={isFirstLoad}>
                            {objectForDescription}
                    </DescriptionAnsw>
                </div>
            </main>)

        return(
            <React.Fragment>
                <Header
                    score={score}
                    nowLevel={nowLevel}
                />

               {gameBody}

                <Footer
                    onClick={this.onClickFooter}
                    text={footerText}
                />
            </React.Fragment>
        )
    }
}