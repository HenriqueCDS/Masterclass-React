import { Sparkle } from "phosphor-react";

import './Header.css'
//header

interface HeaderProps {
  title: String

}

export function Header(props:HeaderProps){
    return(
        <div className='timeline-header'>
         {props.title}
          <Sparkle />
        </div>
    )
}