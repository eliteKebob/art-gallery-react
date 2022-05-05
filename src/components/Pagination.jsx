const Pagination = ({ page, setPage }) => {
  const handleClick = () => {
    if (page < 20) {
      setPage(20)
    }
    if (page === 20 || page > 20) {
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
