import React from 'react'
import sbstyle from '../styles/sbstyle.css'
import hslogo from '../assets/hs-logo.png'

const SideBar = () => {
    return (
        <>
        <div class="side-container">

                <div class="center-div">
                <img src={hslogo} alt="Hotel Swan Logo" class="hslogo" />
                </div>

                <div class="sidebar-options">
                    <p><span><ion-icon name="bar-chart-outline"></ion-icon></span>Overview</p>
                    <p><span><ion-icon name="bar-chart-outline"></ion-icon></span>Calendar</p>
                    <p><span><ion-icon name="bar-chart-outline"></ion-icon></span>Booking</p>
                    <p><span><ion-icon name="bar-chart-outline"></ion-icon></span>Earnings</p>
                    <p><span><ion-icon name="bar-chart-outline"></ion-icon></span>Stuff</p>
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