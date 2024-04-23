import express from "express";
import Connection from "./Connection.js";
import bodyParser from "body-parser";
import cors from "cors"
// bbc7737a04f43fd78eaec1766bff0cfb4d5a347b
// { new: true }
import axios from "axios"

let app = express();
app.use(bodyParser.json());
app.use(cors())

app.get("/", async (req, res) => {
  // let data = await User.find();
  // res.send(data);
  const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const GITHUB_CODE=process.env.GITHUB_CODE;
console.log(GITHUB_CLIENT_ID,"sadasdasd")
  const response = await axios.post('https://github.com/login/oauth/access_token', {
    code:GITHUB_CODE,
    client_id: GITHUB_CLIENT_ID,
    client_secret: GITHUB_CLIENT_SECRET
}, {
    headers: {
        'Accept': 'application/json'
    }
})

     let token=response.data.access_token;
     console.log(response.data)

     setTimeout(()=>{
      if(token){
        let data=axios.get(`https://api.github.com/user`, {
          headers: {
            authorization: `Bearer ${token}`,
          }
        }).then((res)=>{
            console.log(res.data,"some data")
        })
  
      }
     
      console.log("no token")
     },5000)
     
})



// 8127179bcf8355a54fc266b91d89ae6f44766aae

// app.post("/post", async (req, res) => {
//   let body = req.body;

//   let data = await User.find({ email: body.email });
//   if (data.length > 0) {
//     return res.status(401).send({ message: "user already exists" });
//   }

//   try {
//     let value = await User.insertMany(body);
//     res.status(201).send({ message: "data created", value });
//   } catch (error) {
//     console.log(error);
//   }
// });


// app.patch("/update/:id",async (req,res)=>{
//        let body=req.body;
//        let id=req.params.id;

//        try{
//             let value= await User.findByIdAndUpdate(id,body,{ new: true });
//             res.status(201).send({message:"data updated ",value})
         
//        }catch(err){
//           console.log(err)
//        }
       


// })

// app.delete("/delete/:id",async(req,res)=>{
       
//         try{
//              let id=req.params.id;
//              let data=await User.findByIdAndDelete(id);
//              res.status(201).send({message:"data deleted ",data})
//         }catch(err){
//             console.log(err)
//          }
// })


// Connection().then(() => {
  app.listen(8080, () => {
    console.log("connected to port");
  });
// });
