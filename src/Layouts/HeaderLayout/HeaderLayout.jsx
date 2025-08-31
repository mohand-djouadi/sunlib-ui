import React, { Children } from 'react'
import Header from '../../Components/Header/Header'
import { Outlet } from 'react-router-dom'

const HeaderLayout = () => {
    return (
        <div className="h-[100%]">
            <Header />
            <Outlet />
        </div>
    )
}

export default HeaderLayout
