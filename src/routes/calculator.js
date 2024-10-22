const express = require('express');
const router = express.Router();
const sharp = require('sharp');
const { imageDataSchema } = require('../schemas/calculatorSchema');
const { analyzeImage } = require('../utils/calculatorUtils');

// Middleware to validate request body
const validateImageData = (req, res, next) => {
    const { error } = imageDataSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

router.post('/', validateImageData, async (req, res) => {
    try {
        const { image, dict_of_vars } = req.body;

        // Extract base64 data
        const base64Data = image.split(',')[1];  // Assumes data:image/png;base64,<data>
        const imageBuffer = Buffer.from(base64Data, 'base64');

        // Convert buffer to sharp instance (equivalent to PIL Image)
        const sharpImage = sharp(imageBuffer);

        // Analyze image
        const responses = await analyzeImage(sharpImage, dict_of_vars);
        const data = [...responses];

        console.log('response in route: ', responses);

        res.json({
            message: "Image processed",
            data: data,
            status: "success"
        });

    } catch (error) {
        console.error('Error processing image:', error);
        res.status(500).json({
            message: "Error processing image",
            error: error.message,
            status: "error"
        });
    }
});

module.exports = router;