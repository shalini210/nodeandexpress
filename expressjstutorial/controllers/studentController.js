var studentModel = require("../models/studentModel.js")
exports.getall=()=>
{
    var students = studentModel;
    return students
}