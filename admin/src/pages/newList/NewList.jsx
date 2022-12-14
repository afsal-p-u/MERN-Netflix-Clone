import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ListContext } from '../../context/listContext/ListContext'
import { MovieContext } from '../../context/movieContext/MovieContext'
import { createMovie, getMovies } from '../../context/movieContext/apiCalls'

import './newList.css'
import { useEffect } from 'react'
import { createList } from '../../context/listContext/apiCalls'

const NewList = () => {

    const navigate = useNavigate()

    const [list, setList] = useState(null)

    const { dispatch } = useContext(ListContext)
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext)

    useEffect(() => {
        getMovies(dispatchMovie)
    }, [dispatchMovie]) 

    const handleChange = (e) => {
        const value = e.target.value

        setList({...list, [e.target.name]:value})
    }

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value)
        setList({...list, [e.target.name]: value})
    }

    console.log(list)

    const handleSubmit = (e) => {
        e.preventDefault()
        createList(list, dispatch)
        navigate('/lists')
    }

    return(
        <div className="newProduct">
            <h1 className="addProductTitle">New Lists</h1>
            <form className="addProductForm">
                <div className="formLeft">
                    <div className="addProductItem">
                        <label>Title</label>
                        <input type="text" placeholder="popular movies"  name='title' onChange={handleChange} />
                    </div>
                    <div className="addProductItem">
                        <label>Genre</label>
                        <input type="text" placeholder="action" name='genre' onChange={handleChange} />
                    </div>
                    <div className="addProductItem">
                        <label>Type</label>
                        <select name="type" onChange={handleChange}>
                            <option>Type</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </div>
                </div>
                <div className="formRight">
                    <div className="addProductItem">
                        <label>Content</label>
                        <select multiple name="content" onChange={handleSelect} style={{height: "280px"}}>
                            {movies.map((movie) => (
                                <option key={movie._id} value={movie._id}>{movie.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
                
                
                <button className="addProductButton" onClick={handleSubmit} >Create</button>

            </form>
        </div>
    )
}

export default NewList