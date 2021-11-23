using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController:BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound(){
            return NotFound();
        }
         [HttpGet("bad-request")]
          public ActionResult GetBadRequest(){
            //return BadRequest("This is Bad request.");
            return BadRequest(new ProblemDetails{Title="This is Bad Request"});
        }
        [HttpGet("unauthorized")]
          public ActionResult GetUnauthorized(){
            return Unauthorized();
        }
        [HttpGet("validation-error")]
          public ActionResult GetValidationError(){
            ModelState.AddModelError("Problem1","This is Error 1.");
            ModelState.AddModelError("Problem2","This is Error 2.");
            ModelState.AddModelError("Problem3","This is Error 3.");
            return ValidationProblem();
        }
        [HttpGet("server-error")]
          public ActionResult GetNotServerError(){
            
            throw new Exception("This is Server Error.");
        }
         

    }
}