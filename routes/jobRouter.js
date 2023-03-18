
const express=require( "express" );
const {
  getAllJob,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob} = require( "../controllers/jobController" );

const authController = require("./../controllers/authController");

const jobRouter=express.Router();

//Optimize:   ***** Routes ******


jobRouter.route( '/' ).get(getAllJob).post(createJob);

// Protect all routes after this middleware
jobRouter.use(authController.protect);

jobRouter.route( "/:id" )
   .get( getSingleJob )
//Apply authorization here
jobRouter.route( "/:id" )
   .delete( deleteJob )
   .patch( updateJob )



module.exports=jobRouter;
