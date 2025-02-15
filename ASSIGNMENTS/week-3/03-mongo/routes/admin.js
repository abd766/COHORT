const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../db");
const { Admin } = require("../db")
const router = Router();

// router.use(express.json())

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
            msg: "Signup complete"
        }
        )
    } catch (error) {
        msg: "wrong admin format"
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
        msg: "Wrong course detail format"
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
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