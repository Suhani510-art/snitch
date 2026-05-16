import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import {config} from "./config/config.js";
import session from "express-session";  



const app=express();

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use (cors ({
    origin:"http://localhost:5173",
    methods: ["GET", "POST" , "PUT" , "DELETE"],
    credentials:true
}))

app.use(session({
    secret:config.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new GoogleStrategy({
    clientID:config.GOOGLE_CLIENT_ID,
    clientSecret:config.GOOGLE_CLIENT_SECRET,   
    callbackURL:"/api/auth/google/callback"
},(accessToken,refreshToken,profile,done)=>{
     return done(null,profile);     
}))

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
})

app.get("/",(_req,res)=>{
    res.status(200).json({message:"Sever is running"})
});

app.use("/api/auth",authRouter)


export default app;