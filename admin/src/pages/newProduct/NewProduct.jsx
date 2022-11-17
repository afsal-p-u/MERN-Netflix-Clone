import { useState } from 'react'
import './newProduct.css'

const NewProduct = () => {

    const [movie, setMovie] = useState(null)
    const [img, setImg] = useState(null)
    const [imgTitle, setImgTitle] = useState(null)
    const [imgSm, setImgSm] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [video, setVideo] = useState(null)

    const handleChange = (e) => {
        const value = e.target.value

        setMovie({...movie, [e.target.name]:value})
    }

    console.log(movie)
    return(
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="img" name='img' onClick={(e) => setImg(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Title image</label>
                    <input type="file" id="imgTitle" name='imgTitle' onClick={(e) => setImgTitle(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Thumbnail image</label>
                    <input type="file" id="imgSm" name='imgSm' onClick={(e) => setImgSm(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder="John Wick"  name='title' onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input type="text" placeholder="description" name='desc' onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Year</label>
                    <input type="text" placeholder="year" name='year' onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="genre" name='genre'onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Duration</label>
                    <input type="text" placeholder="duration" name='duration' onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Limit</label>
                    <input type="text" placeholder="limit" name='limit' onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Is Series</label>
                    <select name="isSeries" id="isSeries" onChange={handleChange} >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Trailer</label>
                    <input type="file" name='trailer' onClick={(e) => setTrailer(e.target.files[0])} />
                </div>
                <div className="addProductItem">
                    <label>Video</label>
                    <input type="file" name='video' onClick={(e) => setVideo(e.target.files[0])} />
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    )
}

export default NewProduct