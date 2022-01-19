import classes from './Navbar.module.css'
import NavDesktop from './NavDesktop/NavDesktop'
import {useState} from 'react'
import NavMobile from './NavMobile/NavMobile';

function Header() {

    const [open, setOpen] = useState(false);

    return (
        <>  
            
              <div className={classes.navbar}>
                    <NavDesktop />
              </div>
             {/* ============== MOBILE NAVEGATION ============== */}
             <div 
             className={classes.navbarMobile}
             >
                <NavMobile 
                 
                 />
             </div>
            
        </>
    )
}

export default Header
