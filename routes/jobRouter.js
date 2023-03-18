
const express=require( "express" );
const {
  getAllJob,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob} = require( "../controllers/jobController" );


const jobRouter=express.Router();

//Optimize:   ***** Routes ******


jobRouter.route( '/' ).get(getAllJob).post(createJob);

jobRouter.route( "/:id" )
   .get( getSingleJob )
   .delete( deleteJob )
   .patch( updateJob )



module.exports=jobRouter;
