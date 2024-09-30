const userModel = require("../models/usermodel")

exports.getall=()=>
{
    return userModel;
}
exports.findone=(id)=>
{
    return userModel.users.filter((x)=>x.id==id)
}
exports.insert=(obj)=>
{
    return userModel.users.push(obj)
}