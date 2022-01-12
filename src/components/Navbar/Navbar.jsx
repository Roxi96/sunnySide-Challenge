import classes from './Navbar.module.css'

function Header() {
    return (
        <div className={classes.container}>
            <img style={{'width':'176px', 'height':'33px'}} src="../images/logo.svg" alt="" />
            <div className={classes.container2}>
                <ul className={classes.navbarElements}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
                <button className={classes.btn}>Contact</button>
            </div>
            
        </div>
    )
}

export default Header
