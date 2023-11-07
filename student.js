import express from 'express';
import {addmultiplestudent, addStudent,deletestudent,editstudent, objidfind, students} from './controller/students.js'



const router = express.Router();

// POST
router.post("/addstudent" , async(req,res)=>{
  const newData = req.body;
  const result = await addStudent(newData);

  res.status(200).send(result)


})

// POST MANY
router.post("/addmultiplestudent", async(req,res)=>{
  const manyData = req.body;
  const result = await addmultiplestudent(manyData);
  res.status(200).send(result)

})

// FIND METHODS;

// 1-query and all student
router.get("/",async (req,res)=>{
      if(req.query.age){
        req.query.age = +req.query.age
      }

      const studentsData = await students(req)

      res.status(200).json(studentsData)
})

// 2-params-objectId
router.get("/:id",async(req,res)=>{

  const {id}=req.params;
  const result = await objidfind(id);
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
  const updatedstudent = req.body
  const result = await editstudent(id , updatedstudent);
  res.status(200).send(result)
})

// DELETE:
  router.delete("/:id",async(req,res)=>{
    const {id} = req.params;
    const result= await deletestudent(id)
    res.status(200).send(result)
  })

export const studentsRouter = router


