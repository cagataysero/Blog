import {db} from "../db.js";

export const getPosts = (req,res) => {
    const qry = req.query.tag ? "SELECT * FROM posts WHERE tag= ? " : "SELECT * FROM posts";

    db.query(qry , [req.query.tag],(err,data) => {
        if (err) return res.send(err)
        return res.status(200).json(data);
    })
}
export const getPost = (req,res) => {

    const qry = "SELECT `username`, `title`, `desc`,p.img, `tag`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?"

    db.query(qry , [req.params.id],(err,data) => {
        if (err) return res.send(err)
        return res.status(200).json(data[0]);
    })


}
export const addPost = (req,res) => {
    res.json("from controller");
}
export const deletePost = (req,res) => {
    res.json("from controller");
}
export const updatePost = (req,res) => {
    res.json("from controller");
}