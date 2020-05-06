const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/google-books',
    {
       useNewUrlParser: true,
       useUnifiedTopology: true 
    }
)

app.listen(PORT, function(){
    console.log(`Server is listening on port ${PORT}`)
});

