import React from 'react'

const PaginationKalam = ({ planningPerPage, totalPlanning, paginate, pageCourrant }) => {
  const nombrePages = []

  for (let i = 1; i <= Math.ceil(totalPlanning / planningPerPage); i++) {
    nombrePages.push(i)
  }
  return (
    <>
      <nav>
        <ul className='flex flex-row my-4 space-x-2'>
          {
            nombrePages.map(nb => (
              <li
                onClick={() => paginate(nb)} key={nb}
                className={`flex items-center justify-center w-8 h-8 
                  rounded-full cursor-pointer
                  ${nb === pageCourrant ? "border-bleue_union_500 bg-bleue_union_500 text-white border" : "text-gray-600  border-gray-400"}
                  hover:bg-bleue_union_500 hover:text-white hover:border-bleue_union_500`}>
                {nb}
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}

export default PaginationKalam
