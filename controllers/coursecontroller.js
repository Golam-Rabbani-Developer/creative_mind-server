const Courses = require("../models/coursemodels")


module.exports = {
    getCourses(req, res) {
        Courses.find({})
            .then(courses => {
                if (courses) {
                    res.status(200).json({
                        courses
                    })
                }
            })
            .catch(err => console.log(err))
    },

    getSingleCourse(req, res) {
        const { id } = req.params;
        console.log(id)
        Courses.find({ _id: id })
            .then(course => {
                if (course) {
                    return res.status(200).json({
                        course
                    })
                }
            })
            .catch(err => console.log(err))
    }
}

