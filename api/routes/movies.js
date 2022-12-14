const router = require('express').Router();
const Movie = require('../models/Movie');
const verify = require('../verifyToken')

//create
router.post('/', verify, async (req, res) => {
    if(req.user.isAdmin){
       const newMovie = new Movie(req.body);

       try{
        const savedMovie = await newMovie.save();
        res.status(200).json(savedMovie)
       }catch(err){
        res.status(500).json(err);
       }
    }else {
        res.status(403).json('You are not allowed!')
    }
})

//update
router.put('/:id', verify, async (req, res) => {
    if(req.user.isAdmin){
       try{
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, 
            {
                $set: req.body,
            },
            {
                new:true
            }
        );
        res.status(200).json(updatedMovie)
       }catch(err){
        res.status(500).json(err);
       }
    }else {
        res.status(403).json('You are not allowed!')
    }
})

//delete
router.delete('/:id', verify, async (req, res) => {
    if(req.user.isAdmin){
       try{
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json("The movie has been deleted...")
       }catch(err){
        res.status(500).json(err);
       }
    }else {
        res.status(403).json('You are not allowed!')
    }
})

//get
router.get('/find/:id', verify, async (req, res) => {
    try{
     const movie = await Movie.findById(req.params.id);
     res.status(200).json(movie)
    }catch(err){
     res.status(500).json(err);
    }
})

//get random
router.get('/random', verify, async (req, res) => {
    const type = req.query.type;
    const genre = req.query.genre
    let movie;

    try{
     if(type === "series"){
        if(genre){
            movie = await Movie.aggregate([
                { $match: {"$and": [{isSeries:true}, {genre: genre}]} },
                { $sample: {size: 1} }
            ])
        }else{
            movie = await Movie.aggregate([
                { $match: {isSeries:true} },
                { $sample: {size: 1} }
            ])
        }
     }else if(type === 'movie'){
        if(genre){
            movie = await Movie.aggregate([
                { $match: {"$and": [{isSeries:false}, {genre: genre}]} },
                { $sample: {size: 1} }
            ])
        }else{
            movie = await Movie.aggregate([
                { $match: {isSeries:false} },
                { $sample: {size: 1} }
            ])
        }
    }else{
        movie = await Movie.aggregate([
            { $sample: {size: 1} }
        ])
    }

     res.status(200).json(movie)
    }catch(err){
     res.status(500).json(err);
    }
})

//get all
router.get('/', verify, async (req, res) => {
    if(req.user.isAdmin){
       try{
        const movies = await Movie.find();
        res.status(200).json(movies.reverse())
       }catch(err){
        res.status(500).json(err);
       }
    }else {
        res.status(403).json('You are not allowed!')
    }
})

module.exports = router