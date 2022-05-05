import { Link } from "react-router-dom"

const About = ({ theme }) => {
  return (
    <div className="about" style={{ border: `2px solid ${theme}` }}>
      <p>Basic Artwork Gallery developed with React (version: 1.0.0)</p>
      <p>
        Artwork Source: <Link to="https://www.artic.edu/">ARTIC</Link>(thanks to
        them for great API!)
      </p>
      <p>
        Color Pallette:{" "}
        <Link to="https://brands-color-palette.vercel.app/">Brand's Color</Link>
        (made by me also)
      </p>
      <p>
        Background Remover:{" "}
        <Link to="https://bye-background.herokuapp.com/">AI Bg Remover</Link>
        (made by me also)
      </p>
      <p>
        My GitHub: <Link to="https://github.com/eliteKebob">Elite Kebob</Link>
      </p>
    </div>
  )
}
export default About
