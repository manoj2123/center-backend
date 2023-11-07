import express from 'express';
import {addmultipleteacher, addTeacher,deleteteacher,editteacher, objidfindteacher, teachers} from './controller/teacher.js'



const router = express.Router();

// POST
router.post("/addteacher" , async(req,res)=>{
  const newData = req.body;
  const result = await addTeacher(newData);

  res.status(200).send(result)


})

// POST MANY
router.post("/addmultipleteacher", async(req,res)=>{
  const manyData = req.body;
  const result = await addmultipleteacher(manyData);
  res.status(200).send(result)

})

// FIND METHODS;

// 1-query and all teacher
router.get("/",async (req,res)=>{
      if(req.query.age){
        req.query.age = +req.query.age
      }

      const teachersData = await teachers(req)

      res.status(200).json(teachersData)
})

// 2-params-objectId
router.get("/:id",async(req,res)=>{

  const {id}=req.params;
  const result = await objidfindteacher(id);
  res.status(200).send(result)

})

// 3-params-id
// router.get("/:id", async (req,res)=>{

//   const {id}=req.params;
//   const result = await idfind(id);
//   res.status(200).send(result)

// })


// PUT

router.put("/:id",async(req,res)=>{

  const {id} = req.params;
  const updatedteacher = req.body
  const result = await editteacher(id , updatedteacher);
  res.status(200).send(result)
})

// DELETE:
  router.delete("/:id",async(req,res)=>{
    const {id} = req.params;
    const result= await deleteteacher(id)
    res.status(200).send(result)
  })

export const teachersRouter = router


