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
                <hr class="hr-style"></hr>
                <p class="welcome"><span class="grey-shade">Welcome, </span>William</p>
                <p class="statement1">You have <span class="underline">9 free rooms</span> at Saint Denis</p>

                <div id="grid-container">
                    <div class="grid-item1">
                        <span id="icon-fix"><ion-icon name="arrow-up-outline"></ion-icon></span>
                        <p class="percent-text">4%</p>
                        <div id="flexbox">
                            <div>
                                <div class="minibox">31</div>
                                <p class="box-text">Booked</p>
                            </div>
                            <div>
                                <div class="minibox2">19</div>
                                <p class="box-text">Check in</p>
                            </div>
                        </div>
                        <p>Saint Denis</p>
                    </div>
                    <div class="grid-item2">
                        <span id="icon-fix2"><ion-icon name="arrow-down-outline"></ion-icon></span>
                        <p class="percent-text2">6%</p>
                        <div id="flexbox">
                            <div>
                                <div class="minibox">8</div>
                                <p class="box-text">Booked</p>
                            </div>
                            <div id="margin-fix">
                                <div class="minibox2">5</div>
                                <p class="box-text">Check in</p>
                            </div>
                        </div>
                        <p>Blackwater</p>
                    </div>
                    <div class="grid-item3">
                        <div class="add-object">
                            <ion-icon name="add-outline"></ion-icon>
                            <p class="add-text">Add new object</p>
                        </div>
                    </div>
                </div>

                <div class="object-overview">
                    <p class="oo-text">Object Overview</p>
                </div>
            </div>
        </>
    )
}

export default MainBar