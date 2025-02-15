const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db")
const { Course } = require("../db")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try { // Implement User signup logic
        //another way to do it is also using const newUser = req.body
        const { username, password } = req.body;
        await User.create({
            username: username,
            password: password
        });
        res.status(201).json({
            msg: "User Signup complete"
        }
        )
    } catch (error) {
        msg: "wrong User format"
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const response = await Course.find();
        res.json({
            courses: response
        });
    } catch (error) {
        res.status(411).json({
            msg: "Some error occured in getting courses"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    //Implement course purchase logic
    try {
        const courseId = req.params.courseId;
        const username = req.headers.username;
        await User.updateOne({
            username: username,
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        })
        res.status(200).json({
            message: 'Course purchased successfully'
        })
    } catch (error) {
        res.status(500).json({
            msg: "Some error occured in purchasing the course"
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({
        username: username,
    })
    const course = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json(course)
});

module.exports = router