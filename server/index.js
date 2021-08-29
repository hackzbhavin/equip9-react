const express = require('express');
const bodyPasrser = require('body-parser')
const cors = require("cors");

const app = express();
var database = require('./Config/DBConnection');

app.use(cors());
app.use(express.json());
app.use(bodyPasrser.urlencoded({extended:true}));

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`SERVER RUNNING ON ${PORT} `)
});




// get business type records
app.get("/api/get/BusinessType",(req,res)=>{
    const getBusinessTypeQuery = "SELECT * FROM businesstype"
    database.query(getBusinessTypeQuery,(err, result)=> {
        if(err) throw err;
        res.send(result);
    });
});

//
app.post("/api/post/BusinessTypeUserCredentials",(req,res)=>{
    const businessTypeId = req.body.businessTypeId
    const deviceTypeId = req.body.deviceTypeId
    const phonenumber = req.body.phonenumber
    const password = req.body.password

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const companyName = req.body.companyName

// insert credentials
    const postBusinessTypeUserCredentialQuery = "INSERT INTO usercredential(BusinessTypeId,DeviceTypeId,MobileNumber,Password) VALUES(?,?,?,?)"
    database.query(postBusinessTypeUserCredentialQuery,[businessTypeId,deviceTypeId,phonenumber,password],(err, result)=> {
        if(err) throw err;
        console.log(result.insertId);
        const lastUserCredentialId  = result.insertId;
        res.send(result);

                    // if operator
                    if(businessTypeId==5){
                        const postBusinessTypeUserDetails ="INSERT INTO operator(UserCredentialId,FirstName,LastName) VALUES (?,?,?) "
                        // insert details
                        database.query(postBusinessTypeUserDetails,[lastUserCredentialId,firstName,lastName],(err, result)=> {
                            if(err) throw err;
                            res.send(result);
                            console.log(result);
                        });
                        }else if(businessTypeId==1){
                            console.log(companyName);
                            const postBusinessTypeUserDetails ="INSERT INTO businessowner(UserCredentialId,EnterpriseName,FirstName,LastName) VALUES (?,?,?,?) "
                            // insert details
                            database.query(postBusinessTypeUserDetails,[lastUserCredentialId,companyName,firstName,lastName],(err, result)=> {
                                if(err) throw err;
                                res.send(result);
                                console.log(result);
                            });
                        }

        return lastUserCredentialId
         

    });


   


});
