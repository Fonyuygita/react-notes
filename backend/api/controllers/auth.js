import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import db from '../dbConfig.js';




export const register = async (req, res) => {
    db.connect()

    const { username, email, password } = req.body;
    const { file } = req;
    console.log({ username, email, password, file });

    if (!username || !email || !password || !file) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
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
        // const token = jwt.sign({ userId: newUser[0].id }, "FGrgsfgw", { expiresIn: '1h' });

        res.status(201).json({ user: newUser[0] });
        console.log("User created.........");
    } catch (error) {
        console.error('Error occurred while registering:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


export const login = async (req, res) => {
    db.connect()
    console.log("Login route is running")
    const { username, password: userPassword } = req.body
    console.log({ username, userPassword });;

    try {

        const { rows: foundUser } = await db.query('SELECT * FROM users WHERE  username = $1', [username]);
        if (foundUser.length === 0) {
            console.log("user was not found");
            return res.status(404).json("user not found")
        }

        // if user is found we check the password to  make sure it matches the one in the database
        const isPasswordCorrect = bcrypt.compare(userPassword, foundUser[0].password);

        // if the password is incorrect
        if (!isPasswordCorrect) {
            console.log("incorrect password or username");
            return res.status(400).json("wrong username or password");
        }

        // if everything is okay, you want to sign in the user, but with a signature mark

        const token = jwt.sign({
            id: foundUser[0].id
        }, "MYLOGINKEY")
        console.log(token);

        // NOW WE CAN SEND OUR TOKEN AS COOKIE
        // first remove  the password from the data by destructuring
        const { password, ...otherInfo } = foundUser[0]
        res.cookie("access-token", token, {
            httpOnly: true
        }).status(200).json(otherInfo)

    }
    catch (err) {
        console.log("errr occured", err);
        res.status(500).json({ message: "Error in our server", error: err.message })
    }

}

export const logout = (req, res) => {
    console.log("login user out")
}