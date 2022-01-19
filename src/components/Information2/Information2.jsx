import classes from './Information2.module.css'

function Information2() {
    return (
        <div className={classes.boxGrid}>
            <div className={classes.boxChild1}>
                <img className={classes.image} src="../images/desktop/image-graphic-design.jpg" alt="cherry image" />
                <div className={classes.boxText}>
                    <h2 >Graphic Design</h2>
                    <p >Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </div>
            </div>
            <div className={classes.boxChild1}>
            <img className={classes.image} src="../images/desktop/image-photography.jpg" alt="orange image" />
            <div className={classes.boxText}>
                    <h2 >Graphic Design</h2>
                    <p >Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </div>
            </div>
        </div>
    )
}

export default Information2
