const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { User, Admin, Course } = require("../db");
const { jwt_secret } = require("../config")

const jwt = require("jsonwebtoken")
// const jwt_secret = "12345"
// Admin Routes
router.post('/signup', async (req, res) => {
    try { // Implement admin signup logic
        //another way to do it is also using const newAdmin = req.body
        const { username, password } = req.body;
        await Admin.create({
            username: username,
            password: password
        });
        res.status(201).json({
            message: 'Admin created successfully'
        }
        )
    } catch (error) {
        msg: "wrong admin format"
    }
});

router.post('/signin', async (req, res) => {
    const { username } = req.body.username;
    const { password } = req.body.password;
    const response = await Admin.find({
        username,
        password
    })
    if (!response) {
        res.status(403).json({
            message: "Incorrect Login Credentials"
        })
    } else {
        const token = jwt.sign({ username, password }, jwt_secret);
        res.json({
            token: token
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    try {// Implement course creation logic
        const { title, description, price, imageLink } = req.body;
        const course = await Course.create({
            title,
            description,
            price,
            imageLink
        })
        res.status(201).json({
            message: 'Course created successfully',
            courseId: course._id
        })
    } catch (error) {
        res.json(
            {
                msg: "Wrong course detail format"

            })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
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

module.exports = router;