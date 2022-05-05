const MiniArtwork = ({
  art,
  currentArt,
  setCurrentArt,
  idx,
  setTheme,
  setLight,
}) => {
  const handleClick = () => {
    setCurrentArt(idx)
    setTheme(`hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`)
    if (art?.color?.l > 49) {
      setLight(true)
    } else {
      setLight(false)
    }
  }
  return (
    <div
      className={currentArt === idx ? "mini-art-active" : "mini-art"}
      onClick={() => handleClick()}
      style={{
        backgroundColor: `hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
      }}
    >
      <img
        src={`https://www.artic.edu/iiif/2/${art?.image_id}/full/843,/0/default.jpg`}
        alt={art?.title}
      />
    </div>
  )
}
export default MiniArtwork
