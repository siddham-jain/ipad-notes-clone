# AI-Powered Math Scanner Web App

## Overview
An advanced mathematical expression scanner and solver API inspired by Apple's new iPadOS feature that can scan and solve mathematical problems from handwritten notes. This project uses Google's Gemini AI model to analyze images containing mathematical content and provide detailed solutions.

## 🌟 Features
- **Mathematical Expression Recognition**: Scans and solves various types of mathematical content from images:
  - Simple arithmetic expressions (e.g., 2 + 3 * 4)
  - Complex equations (e.g., x² + 2x + 1 = 0)
  - Variable assignments (e.g., x = 4, y = 5)
  - Graphical math problems (geometry, trigonometry)
  - Abstract mathematical concepts through drawings

- **BEMDAS Compliance**: Follows standard mathematical order of operations:
  - **B**rackets
  - **E**xponents
  - **M**ultiplication and **D**ivision (left to right)
  - **A**ddition and **S**ubtraction (left to right)

- **Variable Support**: Handles pre-defined variables for complex calculations
- **Image Processing**: Processes various image formats containing mathematical content
- **Structured Response**: Returns well-formatted JSON responses with expressions and results

## 🛠️ Technology Stack
- Node.js & Express.js
- Google Gemini AI API
- Sharp (Image Processing)
- Joi (Request Validation)

## 📸 Supported Image Types
- Handwritten mathematical expressions
- Printed mathematical expressions
- Geometric drawings
- Mathematical diagrams
- Abstract mathematical concepts

## 🎯 Use Cases
1. Educational Tools
   - Solving homework problems
   - Checking mathematical solutions
   - Learning mathematical concepts

2. Professional Applications
   - Quick calculations from whiteboard photos
   - Verifying mathematical workings
   - Converting written math to digital format

## ✨ Inspiration
This project is inspired by Apple's innovative mathematical expression scanning feature introduced in iPadOS, which allows users to scan and solve mathematical problems directly from handwritten notes. Our implementation extends this concept by providing a robust API that can be integrated into various applications and platforms.

## ⚠️ Limitations
- Requires clear image quality for accurate recognition
- Complex mathematical notations might need specific formatting
- Processing time may vary based on image complexity
- Dependent on Gemini AI API availability
## 🚀 Getting Started

### Installation
1. Clone the repository:
```bash
git clone https://github.com/siddham-jain/ipad-notes-clone.git
cd ipad-notes-clone
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_api_key_here
PORT=8900
NODE_ENV=development
```

### Running the Application
Development mode:
```bash
npm run dev
```
