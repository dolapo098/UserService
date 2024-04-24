// const express = require('express');
// const jwt = require('jsonwebtoken');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();
// const PORT = 3000;

// // Secret key for JWT token
// const JWT_SECRET = 'your_jwt_secret';

// // Middleware to authenticate and authorize requests
// const authenticateUser = (req, res, next) => {
//     // Check if authorization header is present
//     const authHeader = req.headers['authorization'];
//     if (!authHeader) {
//         return res
//             .status(401)
//             .json({ message: 'Authorization header missing' });
//     }

//     // Extract token from authorization header
//     const token = authHeader.split(' ')[1];
//     if (!token) {
//         return res
//             .status(401)
//             .json({ message: 'Token not found in authorization header' });
//     }

//     // Verify JWT token
//     try {
//         const decoded = jwt.verify(token, JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.status(403).json({ message: 'Invalid token' });
//     }
// };

// // API Gateway routes
// app.use(
//     '/user-management',
//     authenticateUser,
//     createProxyMiddleware({
//         target: 'http://user-management-service:4000', // Assuming user management service is running on port 4000
//         changeOrigin: true,
//         pathRewrite: {
//             '^/user-management': '/',
//         },
//     })
// );

// app.use(
//     '/auth',
//     createProxyMiddleware({
//         target: 'http://authentication-service:5000', // Assuming authentication service is running on port 5000
//         changeOrigin: true,
//         pathRewrite: {
//             '^/auth': '/',
//         },
//     })
// );

// // Example route for request aggregation and composition
// app.get('/api/user-profile', authenticateUser, async (req, res) => {
//     try {
//         // Call user management service to get user profile
//         const userProfileResponse = await axios.get(
//             'http://user-management-service:4000/api/user-profile',
//             {
//                 headers: {
//                     Authorization: req.headers['authorization'],
//                 },
//             }
//         );

//         // Call authentication service to get user roles
//         const userRolesResponse = await axios.get(
//             'http://authentication-service:5000/api/user-roles',
//             {
//                 headers: {
//                     Authorization: req.headers['authorization'],
//                 },
//             }
//         );

//         // Aggregate and compose responses
//         const userProfile = userProfileResponse.data;
//         const userRoles = userRolesResponse.data;
//         const user = { ...userProfile, roles: userRoles };

//         // Return composed response
//         res.json(user);
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`API Gateway server running on port ${PORT}`);
// });
