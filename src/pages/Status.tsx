import {  PaperPlaneRight } from "phosphor-react"
import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status(){
  const [newAnswer,setNewAnswer] = useState('');
  const [answer, setAnswer] = useState([
        'Boa',
        'falo tudo',
        'nada haver'
    ]);

  function createNewAnswer(event:FormEvent){
    event.preventDefault()
    setAnswer([newAnswer, ...answer])
    setNewAnswer('')
 

  }
    return(
        <main className='status'>
        <Header title={"Tweet"} />
       
        <Tweet  content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laudantium hic accusamus voluptate provident, sequi placeat fugit voluptatibus ipsam modi. Repudiandae, reprehenderit impedit deserunt necessitatibus optio nihil in quaerat quos."/>
          <Separator />
          <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
               <img src='https://github.com/henriqueCDS.png' alt = "Henrique Cordeiro" />
               <textarea id='tweet' placeholder="Tweet you answer" 
                value = {newAnswer} onChange={(event)=>{ setNewAnswer(event.target.value)}} /> 
            </label>
            <button type='submit'><PaperPlaneRight /><span>Answer</span></button>
          </form>
          
        

          {
            answer.map( answer =>{
              return <Tweet key={answer} content= {answer} />
            }) 
          }

          
       </main>
    )
}