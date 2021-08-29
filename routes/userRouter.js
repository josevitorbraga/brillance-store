import { Router } from "express";
import User from "../models/UserSchema.js";
import { generateToken, isAuth } from "../utils/utils.js";

const userRouter = Router();

userRouter.post("/create", isAuth, async (req, res) => {
  const { user, password, name } = req.body;
  const newUser = new User({
    name,
    user,
    password,
  });
  newUser.save(err => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({ message: "User created" });
    }
  });
});

userRouter.post("/signin", async (req, res) => {
  const { user, password } = req.body;

  const userValidation = await User.findOne({ user: user });

  if (userValidation) {
    if (password === userValidation.password) {
      const jwtToken = generateToken(userValidation);
      res.cookie("jwtCookie", jwtToken, {
        httpOnly: true,
      });
      return res.status(200).json({
        _id: userValidation._id,
        name: userValidation.name,
        user: userValidation.user,
        password: userValidation.password,
        token: jwtToken,
      });
    }
  }
  return res.json({
    message: "A combinação de usuário e senha deve coicindir",
  });
});

userRouter.get("/check", isAuth, (req, res) => {
  res.json({ message: "User authenticated" });
});

export default userRouter;
