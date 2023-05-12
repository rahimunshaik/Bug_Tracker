const Project=require('../models/project');
module.exports.home=async function(req,res){
    try{
        const projects=await Project.find({}).sort('-createdAt');
        return res.render('home',{
            title:'Bug Tracker  |  Home',
            projects,
        });
        }catch(error){
            console.log('Error',error);
            return;
        }
}