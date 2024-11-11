import User from "../models/user.model";

export const signup = (req,res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({error:"Password not matched"});
        }

        const user = User.findOne({username});

        if(user) {
            return res.status(400).json({error: "Username already exists"})
        }

        // Hash password

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        
    } catch (error) {
        
    }
}

export const login = (req,res) => {
    res.send("login")
}

export const logout = (req,res) => {
    res.send("logout")
}