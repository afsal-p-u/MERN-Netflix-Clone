import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { useState } from "react"
import {Link} from 'react-router-dom'

import './userList.css';

import { userRows } from "../../dummyData"; 

const UserList = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { 
            field: "id", 
            headerName: "ID", 
            width: 100 
        },
        { 
            field: "user",
            headerName: "User",
            width: 210,
            renderCell: (params) => {
                return(
                    <div className="userListUser">
                        <img src={params.row.avatar} alt="" className="userListImg" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { 
            field: "email", 
            headerName: "Email", 
            width: 210 
        },
        { 
            field: "status", 
            headerName: "Status", 
            width: 130 
        },
        { 
            field: "transaction", 
            headerName: "Transaction Volume", 
            width: 220 
        },
        { 
            field: "action", 
            headerName: "Action", 
            width: 140,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={"/user/" + params.row.id} >
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline 
                            className='userListDelete' 
                            onclick={handleDelete}
                        />
                    </>
                )
            }
        },
    ]

    return(
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}

export default UserList