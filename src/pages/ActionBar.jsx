import React from 'react'
import abstyle from '../styles/abstyle.css'
import avatar1 from '../assets/avatar-1.png'
import avatar2 from '../assets/avatar-2.png'
import wallpaper from '../assets/wallpaper.png'

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
                        <div>
                            <p>Wade Warren</p>
                            <p>#SGL <ion-icon name="ellipse"></ion-icon> 0 guests</p>
                        </div>
                        <div>
                            <p>01.12-01.14 </p>
                            <button>Paid</button>
                        </div>

                    </div>
                    <div id="flex-items-row">
                        <img src={avatar2} alt="Avatar-2-PFP" class="avatar-2"></img>
                        <div>
                            <p>Jacob Jones</p>
                            <p>#SGL <ion-icon name="ellipse"></ion-icon> 0 guests</p>
                        </div>
                        <div>
                            <p>01.12-01.14 </p>
                            <button>Paid</button>
                        </div>

                    </div>
                    <div id="flex-items-row">
                        <img src={avatar2} alt="Avatar-2-PFP" class="avatar-2"></img>
                        <div>
                            <p>Kathryn Murphy</p>
                            <p>#SGL <ion-icon name="ellipse"></ion-icon> 0 guests</p>
                        </div>
                        <div>
                            <p>01.12-01.14 </p>
                            <button>Paid</button>
                        </div>

                    </div>

                    <div class="view-all">View All</div>

                    <div class="unlock-section">
                        <p>Unlock new features</p>
                        <button>Get Pro Now!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActionBar