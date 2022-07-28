> show dbs
admin          0.000GB
config         0.000GB
human_resorse  0.000GB
local          0.000GB
sajaldbs       0.000GB
> use human_resorse
switched to db human_resorse
> db.employee.insertMany([{
...   "firstName": "John",
...   "lastName": "Doe",
...   "salary": "25000",
...   "department": "HR",
...   "lastCompany": "X",
...   "lastSalary": "10000",
...   "overallExp": "2",
...   "contactInfo": "1234567890",
...   "yearGrad": "2016",
...   "gradStream": "CSE"
... },{
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "roh",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... },{
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... },{
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... }])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62e24515f702a5e1b54a6479"),
                ObjectId("62e24515f702a5e1b54a647a"),
                ObjectId("62e24515f702a5e1b54a647b"),
                ObjectId("62e24515f702a5e1b54a647c"),
                ObjectId("62e24515f702a5e1b54a647d"),
                ObjectId("62e24515f702a5e1b54a647e"),
                ObjectId("62e24515f702a5e1b54a647f"),
                ObjectId("62e24515f702a5e1b54a6480"),
                ObjectId("62e24515f702a5e1b54a6481"),
                ObjectId("62e24515f702a5e1b54a6482"),
                ObjectId("62e24515f702a5e1b54a6483"),
                ObjectId("62e24515f702a5e1b54a6484"),
                ObjectId("62e24515f702a5e1b54a6485")
        ]
}
> db.employee.find().pretty()
{ "_id" : ObjectId("62e13c8dff18b6af6a6d1407"), "firstName" : "John" }
{ "_id" : ObjectId("62e13cdaff18b6af6a6d1408"), "firstName" : "John" }
{
        "_id" : ObjectId("62e13cfdff18b6af6a6d1409"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6479"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647a"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647b"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647c"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647d"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647e"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647f"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6480"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6481"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6482"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6483"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6484"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6485"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.find({salary: {$gt:30000}}).pretty()
> db.employee.find({overallExp: {$gt:"2"}}).pretty()
> db.employee.find({$and: [{yearGrad: {$gt: "2015"}}, {overallExp: {$gt:"1"}}]}).pretty()
{
        "_id" : ObjectId("62e13cfdff18b6af6a6d1409"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6479"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647d"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6481"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6485"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.updateMany({salary: {$gt: "30000"}}, {$set: {salary: "28000"}})
{ "acknowledged" : true, "matchedCount" : 6, "modifiedCount" : 6 }
> db.employee.updateMany({salary: {$gt: "30000"}}, {$set: {salary: "28000"}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
> db.employee.find({salary: "28000"}).pretty()
{
        "_id" : ObjectId("62e24515f702a5e1b54a647b"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647d"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647f"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6481"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6483"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6485"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.deleteMany({lastCompany: "Y"})
{ "acknowledged" : true, "deletedCount" : 6 }
> db.employee.find().pretty()
{ "_id" : ObjectId("62e13c8dff18b6af6a6d1407"), "firstName" : "John" }
{ "_id" : ObjectId("62e13cdaff18b6af6a6d1408"), "firstName" : "John" }
{
        "_id" : ObjectId("62e13cfdff18b6af6a6d1409"),
        "firstName" : "john",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6479"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647b"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647d"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a647f"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6481"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6483"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e24515f702a5e1b54a6485"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
>