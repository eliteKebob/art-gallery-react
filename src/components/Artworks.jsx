import SingleArtwork from "./SingleArtwork"
import { useState } from "react"
import MiniArtwork from "./MiniArtwork"
import Pagination from "./Pagination"

const Artworks = ({ artworks, page, setPage, setTheme, light, setLight }) => {
  const [currentArt, setCurrentArt] = useState(0)
  return (
    <div className="artworks">
      <div className="artwork-navigation">
        {artworks !== ""
          ? artworks?.data?.map((art, idx) => (
              <MiniArtwork
                art={art}
                key={idx}
                idx={idx}
                currentArt={currentArt}
                setCurrentArt={setCurrentArt}
                setTheme={setTheme}
                setLight={setLight}
              />
            ))
          : ""}
        <div className="pagination">
          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
      <div className="current-artwork">
        {artworks !== ""
          ? artworks?.data?.map((art, idx) => (
              <SingleArtwork
                art={art}
                key={idx}
                idx={idx}
                currentArt={currentArt}
                light={light}
              />
            ))
          : ""}
      </div>
    </div>
  )
}
export default Artworks
