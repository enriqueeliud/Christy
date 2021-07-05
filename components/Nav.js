import Link from 'next/link';
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
 return (
   <nav className={navStyles.nav}>
     <ul>
       <li>
         <Link href="/">
           <a className="navbar-brand"> The NLF Church</a>
         </Link>
       </li>
       <li>
         <Link href="/">Home</Link>
       </li>
       <li>
         <Link href="/about">About</Link>
       </li>
       <li>
         <Link href="/sermons">Sermons</Link>
       </li>
       <li>
         <Link href="/events">Events</Link>
       </li>
       <li>
         <Link href="/prayer">Prayer&Worship</Link>
       </li>
       <li>
         <Link href="/blog">Blog</Link>
       </li>

       <li>
         <Link href="/movies">Movies</Link>
       </li>
     </ul>
   </nav>
 );
}

export default Nav