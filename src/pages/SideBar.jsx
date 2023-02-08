import React from 'react'
import sbstyle from '../styles/sbstyle.css'
import hslogo from '../assets/hs-logo.png'

const SideBar = () => {
    return (
        <>
            <div class="side-container">

                <div class="center-div">
                    <img src={hslogo} alt="Hotel Swan Logo" className="hslogo" />
                </div>

                <div class="sidebar-options">
                    <div><p><span><ion-icon name="bar-chart-outline"></ion-icon></span>Overview</p></div>
                    <div><p><span><ion-icon name="bar-chart-outline"></ion-icon></span>Calendar</p></div>
                    <div><p><span><ion-icon name="bar-chart-outline"></ion-icon></span>Booking</p></div>
                    <div><p><span><ion-icon name="bar-chart-outline"></ion-icon></span>Earnings</p></div>
                    <div><p><span><ion-icon name="bar-chart-outline"></ion-icon></span>Stuff</p></div>
                </div>

                <div class="settings">
                    <div class="setting-icon"><ion-icon name="bag-add-outline"></ion-icon></div>
                    <div class="setting-text"><p>Settings</p></div>
                </div>

            </div>
        </>
    )
}

export default SideBar