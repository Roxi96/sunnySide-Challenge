import classes from './NavMobile.module.css'
import {useState} from 'react'

function NavMobile() {

    const [open, setOpen] = useState(false)

    return (
        <>
             <nav>
                <div className={classes.container}>
                    <img style={{'width':'176px', 'height':'33px'}} src="../images/logo.svg" alt="" />        
                <div className={classes.container2}>
                <svg 
                width="24" 
                height="18" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={()=> setOpen(!open)}
                >
                <path 
                d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" 
                fill="#FFF" 
                fillRule="evenodd"/>
                </svg>
               
                </div>
                
                </div>
                {open && (            
                      <div className={classes.menuResponsive}>
                            <div className={classes.container2}>
                                <ul className={classes.navbarElements}>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li> <button className={classes.btn}>Contact</button></li>
                                </ul>
                            </div>
                      </div>
                 )}
            </nav>
            
        </>
    )
}

export default NavMobile
