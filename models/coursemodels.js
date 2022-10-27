const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: String,
    picture: String,
    price: String,
    description: String,
    instructor: String,
})

const Courses = mongoose.model('Course', courseSchema)


module.exports = Courses;