import classes from './Information.module.css'

function Information() {
    return (
        < >
            <div className={classes.box}>
                <div className={classes.boxChild1}>
                    <h2 className={classes.title}>Transform your Brand</h2>
                    <p className={classes.text}>We are a full-service creative agency specializing in helping brands grow fast.
                     Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <a className={classes.learnMore} href="">Learn More</a>
                </div>
                <div className={classes.boxChild2}>
                    <img className={classes.image} src="../images/desktop/image-transform.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Information
