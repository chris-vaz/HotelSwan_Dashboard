import React from 'react'
import mbstyle from '../styles/mbstyle.css'

const MainBar = () => {
    return (
        <>
        <div class="main-container">
            <div class="search-section">
                <ion-icon name="search-outline"></ion-icon>
                <p>Search</p>
            </div>
            
            <h1 class="welcome"><span class="grey-shade">Welcome, </span>William</h1>
            <p>You have 9 free rooms at Saint Denis</p>

            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div>

            </div>
        </div>
        </>
    )
}

export default MainBar