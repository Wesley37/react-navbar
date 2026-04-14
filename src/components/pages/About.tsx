import type { CSSProperties } from "react"
import background from "../../assets/img2.png"


const AboutStyle: CSSProperties = {
  margin: '0 auto',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flexbox',
    flexDirection: 'column',
    gap: '25px',
    flexGrow: '1',
    minHeight: '100vh',
}

const H1Style: CSSProperties = {
    color: 'whitesmoke',
    textAlign: 'center',
    textShadow: '5px 5px black',
    margin: '0 auto',
    paddingTop: '5.5rem',
}


function About() {
    return (
      <>
      <div style={AboutStyle}>
        <h1 style={H1Style}>About</h1>
      </div>
      </>
    )
}

export default About;