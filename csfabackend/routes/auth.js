const router = require("express").Router();
const passport = require("passport");

router.get("/login/succes", (req, res) => {
    if (req.user) {
        res.status(200).json({
            error:false,
            message:"Sign In bem sucedido",
            user: req.user,
        })

    } else {
        res.status(403).json({ error: true, message: "Não autorizado" });
    }
})

router.get("/sign-in?errorr=true", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Sign In Failure",
    })
    console.log(error)
});

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/sign-in?errorr=true",
    })
);

router.get("google", passport.authenticate("google", ["profile", "email"]));