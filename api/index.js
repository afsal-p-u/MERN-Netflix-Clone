const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config(); 

const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

// mongodb atlas connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
.then(() => console.log('DB connection successful'))
.catch((err) => console.log(err));


app.use(express.json())

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/movies', movieRoute); 
app.use('/api/lists', listRoute); 

app.listen(8800, () => {
    console.log('backend server is running');
})