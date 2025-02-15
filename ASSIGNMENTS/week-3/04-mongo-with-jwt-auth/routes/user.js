const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { jwt_secret } = require("../config")
const jwt = require("jsonwebtoken")
// const jwt_secret = "12345"
// User Routes
router.post('/signup', async (req, res) => {
    try { // Implement User signup logic
        //another way to do it is also using const newUser = req.body
        const { username, password } = req.body;
        await User.create({
            username: username,
            password: password
        });
        res.status(201).json({
            message: 'User created successfully'
        }
        )
    } catch (error) {
        msg: "wrong User format"
    }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const response = await User.find({
        username,
        password
    })
    if (!response) {
        res.status(403).json({
            message: "Incorrect Login Credentials"
        })
    } else {
        const token = jwt.sign({
            username,
            password
        }, jwt_secret);
        res.json({
            token: token
        })
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
    // Implement course purchase logic
    try {
        
        const username = req.username;
        const user = await User.updateOne({
            username
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        });
        res.status(200).json({
            message: 'Course purchased successfully'
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error in User Course purchase"
        })
    }

    router.get('/purchasedCourses', userMiddleware, async (req, res) => {
        // Implement fetching purchased courses logic
        try {
            const username = req.username;
            res.json({
                msg: "control reaches here"
            })
            const user = await User.findOne({
                username
            });
            const courses = await Course.find({
                _id: {
                    "$in": user.purchasedCourses
                }
            })
            res.status(200).json(courses)
        }catch(error){
            res.status(500).json({
                msg: "Failed to show purchased courses"
            })
        }

    });
});

    module.exports = router;