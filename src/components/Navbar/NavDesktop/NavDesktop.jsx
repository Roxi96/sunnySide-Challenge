import classes from './NavDesktop.module.css'

function NavDesktop() {
    return (
        <nav>
             <div className={classes.container}>
            <img style={{'width':'176px', 'height':'33px'}} src="../images/logo.svg" alt="" />
            <div className={classes.container2}>
                <ul className={classes.navbarElements}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li> <button className={classes.btn}>Contact</button></li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavDesktop
