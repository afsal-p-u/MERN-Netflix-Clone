import { 
    Language, 
    NotificationsNone, 
    Settings 
} from "@material-ui/icons";

import './topbar.css'

const Topbar = () => {
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Panel</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <div className="topIconBadge">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <div className="topIconBadge">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img 
                        src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        className="topAvatar"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Topbar;