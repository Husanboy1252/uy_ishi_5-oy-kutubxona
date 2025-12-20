const AuthorSchema = require("../schema/author.schema");

const getAllAuthors =async (req, res) =>{
   try{
   const authors = await AuthorSchema.find()

   res.status(200).json(authors)
   } catch(error){
console.log(error.message);
   }
}
const addAuthor =async (req, res) =>{
   try{
    const{full_name, brith_year, death_year, image_url, bio, creativity, region} = req.body

    await AuthorSchema.create({full_name, brith_year, death_year, image_url, bio, creativity, region})
    
    res.status(201).json({
        message:"Added author"
    })
   } catch(error){
console.log(error.message);
   }
}


const getOneAuthor =async (req, res) =>{
   try{
    const {id} = req.params
   const author = await AuthorSchema.findById(id)

   if(!author){
    return res.status(404).json({
        message:"Author not found"
    })
   }

   res.status(200).json(authors)
   } catch(error){
console.log(error.message);
   }
}

const updateAuthor =async (req, res) =>{
   try{
    const {id} = req.params
     const{full_name, brith_year, death_year, image_url, bio, creativity, region} = req.body
   const author = await AuthorSchema.findById(id)

   if(!author){
    return res.status(404).json({
        message:"Author not found"
    })
   }


   await AuthorSchema.findByIdAndUpdate(id,
    {full_name, brith_year, death_year, image_url, bio, creativity, region},
    {new:true})


   res.status(200).json({
    message:" author updated"
   })
   } catch(error){
console.log(error.message);
   }
}

const deleteAuthor =async (req, res) =>{
   try{
    const {id} = req.params
   const author = await AuthorSchema.findById(id)

   if(!author){
    return res.status(404).json({
        message:"Author not found"
    })
   }


   await AuthorSchema.findByIdAndUpdate(id)
  


   res.status(200).json({
    message:" author updated"
   })
   } catch(error){
console.log(error.message);
   }
}
module.exports = {
    getAllAuthors,
    addAuthor,
    getOneAuthor,
    updateAuthor
}