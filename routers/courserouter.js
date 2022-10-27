const { getCourses, getSingleCourse } = require('../controllers/coursecontroller')

const router = require('express').Router()

router.get('/courses', getCourses)

router.get('/course/:id', getSingleCourse)


module.exports = router;