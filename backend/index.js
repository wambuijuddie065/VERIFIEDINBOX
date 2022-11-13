const express=require('express')
const multer=require('multer')
const cors=require('cors')
const bodyparser=require('body-parser')
const path=require('path')
const app=express()
app.use(express.static('uploads'))

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
const stripe = require("stripe")("sk_test_51M3Ev6JDFSNuGHIxlGFobn3hSCYoK8Z950ViCZ7L1mXkMQsdQKrNTqWextbIBRCuS4sK4GwKIo3uaJBoUv5Ym5KM00CtfEbxU6");
app.use(cors())
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
  
  var upload = multer({ storage: storage }).single('file');


app.post('/file',(req,res)=>{
    upload(req,res,(err)=>{
        if (err) {
            console.log(err);
        }
        console.log(req.file.path);
        res.json({path:req.file.path})
    })
})
app.post('/checkout', async(req, res) => {
  try {
      console.log(req.body);
      token = req.body.token
    const customer = stripe.customers
      .create({
        email: res.email,
        source: token.id
      })
      .then((customer) => {
        console.log(customer);
        return stripe.charges.create({
          amount: 1000,
          description: "Validating emails using Verified Inbox",
          currency: "USD",
          customer: customer.id,
        });
      })
      .then((charge) => {
        console.log(charge);
          res.json({
            data:"success"
        })
      })
      .catch((err) => {
          res.json({
            data: "failure",
          });
      });
    return true;
  } catch (error) {
    return false;
  }
})

app.listen(3000,()=>{
    console.log('App is running');
})