const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express();
var database = require('./Config/DBConnection');

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser, json());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON ${PORT} `)
});




// get business type records
app.get("/api/get/BusinessType", (req, res) => {
    const getBusinessTypeQuery = "SELECT * FROM businesstype"
    database.query(getBusinessTypeQuery, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get("/api/get/CountryCode", (req, res) => {
    const getBusinessTypeQuery = "SELECT * FROM country where IsActive=1"
    database.query(getBusinessTypeQuery, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


app.get("/api/get/ExisitingPhoneNumber/:phonenumber",(req,res)=>{

    const phonenumber = req.params.phonenumber
    // const phonenumber = req.body.phonenumber
    console.log(phonenumber);

    const checkPhoneNumberQuery ="SELECT MobileNumber FROM usercredential WHERE MobileNumber=?"
    database.query(checkPhoneNumberQuery, phonenumber, (err, result) => {
        res.send(result);
        if(result){
            console.log("yes");
        }
    })

})


// for operator partner
app.post("/api/post/OperatorPartner", (req, res) => {
    const businessTypeId = req.body.businessTypeId
    const deviceTypeId = req.body.deviceTypeId
    const phonenumber = req.body.phonenumber
    const password = req.body.password


    const firstName = req.body.firstName
    const lastName = req.body.lastName
    
    const userTypeId = 2


    // insert credentials
    const postBusinessTypeUserCredentialQuery = "INSERT INTO usercredential(BusinessTypeId,UserTypeId,DeviceTypeId,MobileNumber,Password) VALUES(?,?,?,?,?)"
    database.query(postBusinessTypeUserCredentialQuery, [businessTypeId, userTypeId, deviceTypeId, phonenumber, password], (err, result) => {
        // if(err) throw err;
        console.log(result.insertId);
        const lastUserCredentialId = result.insertId;
        res.send(result);


        const postBusinessTypeUserDetails = "INSERT INTO operator(UserCredentialId,FirstName,LastName) VALUES (?,?,?) "
        // insert details
        database.query(postBusinessTypeUserDetails, [lastUserCredentialId, firstName, lastName], (err, result) => {
            // if(err) throw err;
        });
    });
});

// for Maintenance partner
app.post("/api/post/MaintenancePartner", (req, res) => {
    const businessTypeId = req.body.businessTypeId
    const deviceTypeId = req.body.deviceTypeId
    const phonenumber = req.body.phonenumber
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const companyName = req.body.companyName
    const manageStaff = req.body.manageStaff
    const taxNumber = req.body.taxNumber
    
    // set type id
    if (manageStaff == "Yes") {
    userTypeId = 1
    } else {
    userTypeId = 2
    }
    
    // insert credentials
    const postBusinessTypeUserCredentialQuery = "INSERT INTO usercredential(BusinessTypeId,UserTypeId,DeviceTypeId,MobileNumber,Password) VALUES(?,?,?,?,?)"
    database.query(postBusinessTypeUserCredentialQuery, [businessTypeId, userTypeId, deviceTypeId, phonenumber, password], (err, result) => {
        // if(err) throw err;
        console.log(result.insertId);
        const lastUserCredentialId = result.insertId;
        res.send(result);

        if(userTypeId==1){
            // if Want to Manage Staff 
            const postBusinessTypeUserDetails = "INSERT INTO company(UserCredentialId,GSTINNumber) VALUES (?,?) "
            // insert details
            database.query(postBusinessTypeUserDetails, [lastUserCredentialId, taxNumber], (err, result) => {
                // if(err) throw err;
            });

        }



        const postBusinessTypeUserDetails = "INSERT INTO maintenancepartner(UserCredentialId,EnterpriseName,FirstName,LastName) VALUES (?,?,?,?) "
        // insert details
        database.query(postBusinessTypeUserDetails, [lastUserCredentialId, companyName,firstName, lastName], (err, result) => {
            if(err) throw err;
        });
    });
});

// for Business Owner id is 1
app.post("/api/post/BusinessOwner", (req, res) => {
    const businessTypeId = req.body.businessTypeId
    const deviceTypeId = req.body.deviceTypeId
    const phonenumber = req.body.phonenumber
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const companyName = req.body.companyName
    const manageStaff = req.body.manageStaff
    const taxNumber = req.body.taxNumber
    
    // set type id
    if (manageStaff == "Yes") {
    userTypeId = 1
    } else {
    userTypeId = 2
    }

    // insert credentials
    const postBusinessTypeUserCredentialQuery = "INSERT INTO usercredential(BusinessTypeId,UserTypeId,DeviceTypeId,MobileNumber,Password) VALUES(?,?,?,?,?)"
    database.query(postBusinessTypeUserCredentialQuery, [businessTypeId, userTypeId, deviceTypeId, phonenumber, password], (err, result) => {
        // if(err) throw err;
        console.log(result.insertId);
        const lastUserCredentialId = result.insertId;
        res.send(result);

        if(userTypeId==1){
            // if Want to Manage Staff 
            const postBusinessTypeUserDetails = "INSERT INTO company(UserCredentialId,GSTINNumber) VALUES (?,?) "
            // insert details
            database.query(postBusinessTypeUserDetails, [lastUserCredentialId, taxNumber], (err, result) => {
                // if(err) throw err;
            });

        }
    
        const postBusinessTypeUserDetails = "INSERT INTO businessowner(UserCredentialId,EnterpriseName,FirstName,LastName) VALUES (?,?,?,?) "
        // insert details
        database.query(postBusinessTypeUserDetails, [lastUserCredentialId, companyName,firstName, lastName], (err, result) => {
            if(err) throw err;
        });
    });
});

// for Equipment Owner id is 2
app.post("/api/post/EquipmentOwner", (req, res) => {
    const businessTypeId = req.body.businessTypeId
    const deviceTypeId = req.body.deviceTypeId
    const phonenumber = req.body.phonenumber
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const companyName = req.body.companyName
    const manageStaff = req.body.manageStaff
    const taxNumber = req.body.taxNumber
    
    // set type id
    if (manageStaff == "Yes") {
    userTypeId = 1
    } else {
    userTypeId = 2
    }
    
    // insert credentials
    const postBusinessTypeUserCredentialQuery = "INSERT INTO usercredential(BusinessTypeId,UserTypeId,DeviceTypeId,MobileNumber,Password) VALUES(?,?,?,?,?)"
    database.query(postBusinessTypeUserCredentialQuery, [businessTypeId, userTypeId, deviceTypeId, phonenumber, password], (err, result) => {
        // if(err) throw err;
        console.log(result.insertId);
        const lastUserCredentialId = result.insertId;
        res.send(result);

        if(userTypeId==1){
            // if Want to Manage Staff 
            const postBusinessTypeUserDetails = "INSERT INTO company(UserCredentialId,GSTINNumber) VALUES (?,?) "
            // insert details
            database.query(postBusinessTypeUserDetails, [lastUserCredentialId, taxNumber], (err, result) => {
                // if(err) throw err;
            });
        }
        
        const postBusinessTypeUserDetails = "INSERT INTO equipmentowner(UserCredentialId,EnterpriseName,FirstName,LastName) VALUES (?,?,?,?) "
        // insert details
        database.query(postBusinessTypeUserDetails, [lastUserCredentialId, companyName,firstName, lastName], (err, result) => {
            if(err) throw err;
        });
    });
});


