import { useGlobalContext } from "../context/hooks"

const HomePagination = () => {
  const { page, setPage, totalPages, totalUsers } = useGlobalContext()

  return (
    <div className="flex justify-between items-center my-4 w-full text-secondary text-2xl p-3">
      <div>
        Total de usuarios: <span className="font-bold">{totalUsers}</span>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className="border border-gray-300 rounded-sm p-2 cursor-pointer h-20"
        >
          &lt;
        </button>
        {totalPages > 0 && (
          <span className="border border-gray-300 rounded-sm p-2 h-20 flex justify-center items-center">
            {page + 1} de {totalPages}
          </span>
        )}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages - 1}
          className="border border-gray-300 rounded-sm p-2 cursor-pointer h-20"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default HomePagination
