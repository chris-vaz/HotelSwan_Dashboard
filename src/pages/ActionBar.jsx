import React from 'react'
import abstyle from '../styles/abstyle.css'
import avatar1 from '../assets/avatar-1.png'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.png'
import avatar4 from '../assets/avatar-4.png'
import wallpaper from '../assets/wallpaper.png'
import nfwallpaper from '../assets/nf-wallpaper.png'

const ActionBar = () => {
    return (
        <>
            <div class="action-container">
                <div>
                    <div class="profile-section">
                        <div class="notification-icon"><ion-icon name="notifications-outline"></ion-icon></div>
                        <div id="align-1">
                            <div class="avatar-name">William Dawson</div>
                            <div><img src={avatar1} alt="Avatar-1 PFP" class="avatar-1" /></div>
                        </div>
                    </div>

                    <div id="center-div"><img src={wallpaper} alt="Wallpaper Display" class="wallpaper" /></div>

                    <div class="list-heading-section">
                        <div class="bl-text">Booking List</div>
                        <div><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                    </div>

                    <div id="flex-items-row">
                        <img src={avatar2} alt="Avatar-2-PFP" class="avatar-2"></img>
                        <div id="flex-secondary">
                            <div id="flex-content">
                                <p class="name">Wade Warren</p>
                                <p class="code1">#QDPL <ion-icon name="ellipse"></ion-icon> 0 guests</p>
                            </div>
                            <div id="flex-content2">
                                <p class="name">01.12-01.13 </p>
                                <p class="code2">Paid</p>
                            </div>
                        </div>
                    </div>
                    <div id="flex-items-row">
                        <img src={avatar3} alt="Avatar-3-PFP" class="avatar-2"></img>
                        <div id="flex-secondary">
                            <div id="flex-content">
                                <p class="name">Jacob Jones</p>
                                <p class="code1">#QDPL <ion-icon name="ellipse"></ion-icon> 0 guests</p>
                            </div>
                            <div id="flex-content2up">
                                <p class="up-name">01.12-01.13 </p>
                                <p class="up-code2">Unpaid</p>
                            </div>
                        </div>
                    </div>

                    <div id="flex-items-row">
                        <img src={avatar4} alt="Avatar-4-PFP" class="avatar-2"></img>
                        <div id="flex-secondary">
                            <div id="flex-content">
                                <p class="name">Kathryn Murphy</p>
                                <p class="code1">#QDPL <ion-icon name="ellipse"></ion-icon> 0 guests</p>
                            </div>
                            <div id="flex-content2">
                                <p class="name">01.12-01.13 </p>
                                <p class="code2">Paid</p>
                            </div>
                        </div>
                    </div>

                    <div class="view-all">View All</div>

                    <div class="unlock-section">
                        <p class="pro-text">UNLOCK NEW FEATURES</p>
                        <button class="get-pro">Get Pro Now!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActionBar