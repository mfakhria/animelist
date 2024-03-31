// Logika Pagination
const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState +1)
        scrollTop()
    }

    const handlePrevPage = () => {
        // Periksa apakah halaman saat ini sudah 1 sebelum mengurangkannya
        if (page > 1) {
        setPage((prevState) => prevState -1)
        scrollTop()
        }
    }
    
    // Button Pagination
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            <button onClick={handlePrevPage} className="hover:text-color-accent transition-all">Prev</button>
            <p>{page} of {lastPage}</p>
            <button onClick={handleNextPage} className="hover:text-color-accent transition-all">Next</button>
        </div>
    )
}

export default Pagination