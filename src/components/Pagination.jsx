const Pagination = ({ page, setPage }) => {
  const handleClick = () => {
    if (page < 1) {
      setPage(1)
    }
    if (page === 1 || page > 1) {
      setPage(page + 1)
    }
  }
  return (
    <div className="pagination">
      <button onClick={() => handleClick()}>More Artworks</button>
    </div>
  )
}
export default Pagination
