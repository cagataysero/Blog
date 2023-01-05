import {db} from "../db.js";
import jwt from "jsonwebtoken";
export const getPosts = (req,res) => {
    const qry = req.query.tag ? "SELECT * FROM posts WHERE tag= ? " : "SELECT * FROM posts";

    db.query(qry , [req.query.tag],(err,data) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json(data);
    })
}
export const getPost = (req,res) => {

    const qry = "SELECT p.id,`username`, `title`, `desc`,p.img, `tag`,`date`, u.image  FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?"

    db.query(qry , [req.params.id],(err,data) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json(data[0]);
    })


}
export const addPost = (req,res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Access denied!");

    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if (err) return  res.status(403).json("Token is not valid!");

        const qry = "INSERT INTO posts(`title`,`desc`,`tag`,`uid`) VALUES (?)"

        const values = [
            req.body.title,
            req.body.desc,
            req.body.tag,
            userInfo.id,
        ]

        db.query(qry,[values],(err,data) => {
            if(err) return res.status(500).json(err);
            return res.json("Post has been created.")
        })
    })
}
export const deletePost = (req,res) => {
    res.json("from controller");
}
export const updatePost = (req,res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Access denied!");

    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if (err) return  res.status(403).json("Token is not valid!");

        const postId = req.params.id;
        const qry = "UPDATE  posts SET `title`=? ,`desc`=? ,`img`=? ,`tag`=? WHERE `id` = ? AND `uid` = ?"

        const values = [
            req.body.title,
            req.body.desc,
            req.body.tag,
        ]

        db.query(qry,[...values,postId,userInfo.id],(err,data) => {
            if(err) return res.status(500).json(err);
            return res.json("Post has been updated.")
        })
    })
}