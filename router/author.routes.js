const {Router} =require("express")
const { getAllAuthors, addAuthor, getOneAuthor, updateAuthor } = require("../controller/auther.controller")

const authorRouter =Router()

authorRouter.get("/get_all_authors",getAllAuthors)
authorRouter.post("/add_author",addAuthor)
authorRouter.get("/get_one_author/:id",getOneAuthor)
authorRouter.put("/update_author/:id",updateAuthor)


module.exports =authorRouter