import React from 'react'
import DashbordComponent from '../components/DashbordComponent'
import SearchBar  from '../components/SearchBar'
import '../style/styles.css'

const HomePage = () => {
  return (
    <div className='pagesContainer' >
        <div className='dashBordComponent' >
        <DashbordComponent /> 
        </div>
        <div className='searchBarComponent' >
          <SearchBar/> 
        </div>
        <div className='grid3'>Sales Stats 500% </div>
        <div className='grid4'>Sales Stats 500% </div>
        <div className='grid5'>Sales Stats 500% </div>
        <div className='grid6'>Sales Stats 500% </div>
        <div className='grid7'>Sales Stats 500% </div>
    </div>
  )
}

export default HomePage