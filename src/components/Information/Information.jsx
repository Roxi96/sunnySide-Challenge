import classes from './Information.module.css'
import PropTypes from 'prop-types';

function Information({info, info2}) {
    return (
        < >
            <div className={classes.box}>
                <div className={classes.boxChild1}>
                    <h2 className={classes.title}>{info.title}</h2>
                    <p className={classes.text}>{info.text}</p>
                    <a className={classes.learnMore} href="">Learn More</a>
                </div>
                <div className={classes.boxChild2}>
                    <img 
                    className={classes.image} 
                    src={info.image.src} 
                    alt={info.image.alt} />
                </div>
            </div>
            <div className={classes.box2}>
                <div className={classes.boxChild2}>
                    <img 
                    className={classes.image} 
                    src={info2.image.src} 
                    alt={info2.image.alt} />
                </div>
                <div className={classes.boxChild1}>
                    <h2 className={classes.title}>{info2.title}</h2>
                    <p className={classes.text}>{info2.text}</p>
                    <a className={classes.learnMore2} href="">Learn More</a>
                </div>
            </div>
        </>
    )
}

export default Information
