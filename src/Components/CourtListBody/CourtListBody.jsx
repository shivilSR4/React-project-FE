import React from 'react'
import Cards from '../Cards/Cards'


function CourtListBody() {
  return (
    <div className='cout_list_body  d-flex flex-wrap flex-row gap-3 justify-content-center my-3 p-2'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </div>
  )
}

export default CourtListBody