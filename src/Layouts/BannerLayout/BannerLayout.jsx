import React from 'react'
import Banner from '../../Components/Banner/Banner'
import { Outlet } from 'react-router-dom'

const BannerLayout = () => {
    return (
        <div>
            <Banner />
            <Outlet />
        </div>
    )
}

export default BannerLayout
