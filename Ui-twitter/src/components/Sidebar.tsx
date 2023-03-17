

import twitterLogo from '../assets/logo-twitter.svg'
import {House, Hash, Bell,Envelope,BookmarksSimple,FileText,User,DotsThree,Sparkle, Pencil} from 'phosphor-react';
import './Sidebar.css';
import { Link, NavLink } from 'react-router-dom';
export function Sidebar(){
    return(
      <aside className='sidebar'>
      <img  className='logo' src={twitterLogo} alt="logo" />
      <nav className='main-navigation'>
         <NavLink to='/'><House weight='fill' /><span>Home</span> </NavLink>
         <Link to=''><Hash weight='fill' /> <span>Explore</span></Link>
         <Link to=''><Bell weight='fill' /> <span>Notifications</span></Link>
         <Link to=''><Envelope weight='fill' /><span>Messages</span> </Link>
         <Link to=''><BookmarksSimple weight='fill' /> <span>Bookmarks</span></Link>
         <Link to=''><FileText weight='fill' /><span>Lists</span> </Link> 
         <Link to=''><User weight='fill' /> <span>Profile</span></Link>
         <Link to=''><DotsThree weight='fill' /> <span>More</span></Link>
      </nav>
        <button className='new-tweet' type="button"><Pencil /><span>Tweet</span></button>
      </aside>
    )

}