import { Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

import './widgetSm.css';

const WidgetSm = () => {

    const [newUser, setNewUser] = useState([]) 

    const access = JSON.parse(localStorage.getItem('user'))
    const accessInfo = access.accessToken

    useEffect(() => {
        const getUsers = async () => {
            try{
                const res = await axios.get("/users?new=true", 
                {
                    headers: {
                      token: "Bearer " + accessInfo
                    }  
                })
                setNewUser(res.data) 
            }catch(err){ 
                console.log(err) 
            }
        }
        getUsers()
    }, [])
    return(
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUser.map((user) => (
                    <li className="widgetSmListItem">
                        <img 
                            src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} 
                            alt="" 
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                            <span className="widgetSmUserTitle">Software Engineer</span>
                        </div>
                        <button className="widgetSmButton"> 
                            <Visibility className="widgetSmIcon" /> 
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSm;