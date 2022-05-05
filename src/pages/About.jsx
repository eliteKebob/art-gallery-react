const About = ({ theme }) => {
  return (
    <div className="about" style={{ border: `2px solid ${theme}` }}>
      <p>Basic Artwork Gallery developed with React (version: 1.0.0)</p>
      <p>
        Artwork Source:{" "}
        <a
          href="https://www.artic.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ARTIC
        </a>
        (thanks to them for great API!)
      </p>
      <p>
        Color Pallette:{" "}
        <a
          href="https://brands-color-palette.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brand's Color
        </a>
        (made by me also)
      </p>
      <p>
        Background Remover:{" "}
        <a
          href="https://bye-background.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Bg Remover
        </a>
        (made by me also)
      </p>
      <p>
        My GitHub:{" "}
        <a
          href="https://github.com/eliteKebob"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elite Kebob
        </a>
      </p>
    </div>
  )
}
export default About
