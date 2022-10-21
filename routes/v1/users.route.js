const express = require("express");
const router = express.Router();
const userControllers = require("../../controllers/users.Controllers");

router
  .route("/")
  /**
   * @api {get} /services All services
   * @apiDescription Get all the services
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(userControllers.getAllUser)

  /**
   * @api {post} /services save a service
   * @apiDescription post all the service
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(userControllers.postUser);

router
  .route("/:id")
  .get(userControllers.getUserDetails)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = router;
