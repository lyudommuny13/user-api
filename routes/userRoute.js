const express = require('express')
const router = express.Router() // function from express
const userModel = require('../models/user');

// req -> request data from front-end
// res -> response data back to front-end
router.get('/', async (req, res) => {
    try {
        const users = await userModel.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const users = await userModel.findById(req.params.id)

        if (!users) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const user = new userModel({
            username: req.body.username,
            age: req.body.age
        })

        await user.save()
        res.status(201).json(user)

    } catch (error) {
        // Mongoose validation error
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: error.message,
                errors: error.errors
            })
        }

        res.status(500).json({ error: error.message })
    }
})


router.put('/:id', async (req, res) => {
    try {
        const userUpdated = await userModel.findByIdAndUpdate(
            req.params.id,
            {
                username: req.body.username,
                age: req.body.age
            },
            { new: true }
        )

        if (!userUpdated) {
            return res.status(404).json({ message: "User not found" })
        }

        res.json(userUpdated)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.json({
            message: "User deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})


module.exports = router;