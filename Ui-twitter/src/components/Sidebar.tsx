

import twitterLogo from '../assets/logo-twitter.svg'
import {House, Hash, Bell,Envelope,BookmarksSimple,FileText,User,DotsThree,Sparkle} from 'phosphor-react';
import './Sidebar.css';
import { Link, NavLink } from 'react-router-dom';
export function Sidebar(){
    return(
      <aside className='sidebar'>
      <img  className='logo' src={twitterLogo} alt="logo" />
      <nav className='main-navigation'>
         <NavLink to='/'><House weight='fill' /> Home</NavLink>
         <Link to=''><Hash weight='fill' /> Explore</Link>
         <Link to=''><Bell weight='fill' /> Notifications</Link>
         <Link to=''><Envelope weight='fill' /> Messages</Link>
         <Link to=''><BookmarksSimple weight='fill' /> Bookmarks</Link>
         <Link to=''><FileText weight='fill' /> Lists</Link> 
         <Link to=''><User weight='fill' /> Profile</Link>
         <Link to=''><DotsThree weight='fill' /> More</Link>
      </nav>
        <button className='new-tweet' type="button">Tweet</button>
      </aside>
    )

}