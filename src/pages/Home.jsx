import axios from "axios"
import { useState, useEffect } from "react"
import Artworks from "../components/Artworks"

const Home = ({ theme, setTheme, setLight, light }) => {
  const [loading, setLoading] = useState(false)
  const [artworks, setArtworks] = useState("")
  const [page, setPage] = useState(20)

  const fetchArts = async () => {
    setLoading(true)
    try {
      let config = {
        method: "get",
        url: `https://api.artic.edu/api/v1/artworks?limit=5&page=${page}`,
      }
      const response = await axios(config)
      if (response.data) {
        setArtworks(response.data)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (page > 0) {
      fetchArts()
    }
    // eslint-disable-next-line
  }, [page])

  if (loading)
    return (
      <>
        <div className="home">
          <p
            style={{ textAlign: "center", fontSize: "5vh", color: `${theme}` }}
          >
            Loading...
          </p>
        </div>
      </>
    )

  return (
    <div className="home">
      <Artworks
        artworks={artworks}
        setArtworks={setArtworks}
        setPage={setPage}
        page={page}
        setTheme={setTheme}
        light={light}
        setLight={setLight}
      />
    </div>
  )
}
export default Home
