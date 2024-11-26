import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import db from '../dbConfig.js';




export const register = async (req, res) => {
    const { username, email, password } = req.body;
    const { file } = req;
    console.log({ username, email, password, file });

    if (!username || !email || !password || !file) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        db.connect()
        // Check if user already exists
        console.log("before querying")
        const { rows: existingUsers } = await db.query('SELECT * FROM users WHERE email = $1 OR username = $2', [email, username]);
        console.log("after querying..");
        console.log(existingUsers);

        if (existingUsers.length) {
            console.log("user already exist");
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into the database
        const { rows: newUser } = await db.query(
            'INSERT INTO users (username, email, password, image_path) VALUES ($1, $2, $3, $4) RETURNING *',
            [username, email, hashedPassword, file.path]
        );
        console.log(newUser)
        // Create JWT token
        const token = jwt.sign({ userId: newUser[0].id }, "FGrgsfgw", { expiresIn: '1h' });

        res.status(201).json({ token, user: newUser[0] });
        console.log("User created.........");
    } catch (error) {
        console.error('Error occurred while registering:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


export const login = (req, res) => {
    console.log("Login route is running")
}

export const logout = (req, res) => {
    console.log("login user out")
}