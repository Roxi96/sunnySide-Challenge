import bg from '../images/desktop/image-header.jpg'

const heroBg={ 
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '91.2vh',
  }

const info={
  title: 'Transform your brand',
  text: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
  image: {
    src: '../images/desktop/image-transform.jpg',
    alt: 'logo image 1'
  }
}
const info2={
  title: 'Stand out to the right audience',
  text: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ',
  image: {
    src: '../images/desktop/image-stand-out.jpg',
    alt: 'logo image 1'
  }
}
  export {heroBg, info, info2} 