const SingleArtwork = ({ art, idx, currentArt, light }) => {
  return (
    <div
      className={currentArt === idx ? "single-art-active" : "single-art"}
      id={idx}
      style={{
        border: `1px solid hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
      }}
    >
      <div
        className="sa-title"
        style={{
          backgroundColor: `hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
        }}
      >
        <p>{art?.title}</p>
      </div>
      <div className="sa-content">
        <div className="sa-img">
          <img
            src={`https://www.artic.edu/iiif/2/${art?.image_id}/full/843,/0/default.jpg`}
            alt={art?.title}
            style={{
              border: `5px solid hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
            }}
          />
          <p>{art?.provenance_text}</p>
          <p style={{ marginTop: "1vh" }}>Dimensions: {art?.dimensions} </p>
        </div>
        <div
          className="sa-info"
          style={{
            borderLeft: `1px solid hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
          }}
        >
          <div
            className="sa-tags"
            style={{
              backgroundColor: `hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
            }}
          >
            <span
              style={{
                borderColor: `hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
              }}
            >
              {art?.artwork_type_title}
            </span>
            <span
              style={{
                borderColor: `hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
              }}
            >
              {art?.department_title}
            </span>
            <span
              style={{
                borderColor: `hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
              }}
            >
              {art?.medium_display}
            </span>
            {art?.style_title ? (
              <span
                style={{
                  borderColor: `hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
                }}
              >
                {art?.style_title}
              </span>
            ) : (
              ""
            )}
          </div>
          <div
            className="sa-artist"
            style={{
              borderTop: `1px solid hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
              borderBottom: `1px solid hsl(${art?.color?.h},${art?.color?.s}%,${art?.color?.l}%)`,
            }}
          >
            <i style={{ padding: "0 1vw", lineHeight: "1.4" }}>Artist</i>
            <p>{art?.artist_title}</p>
            <span>{art?.artist_display}</span>
            <span>
              Start Date:{" "}
              <span style={{ fontSize: "3vh" }}>{art?.date_start}</span>
              End Date: <span style={{ fontSize: "3vh" }}>{art?.date_end}</span>
            </span>
          </div>
          <div className="sa-moreinfo">
            <p style={{ fontSize: "3vh" }}>{art?.title}</p>
            <p>{art?.credit_line}</p>
            <p style={{ fontSize: "3vh" }}>{art?.date_display}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleArtwork
