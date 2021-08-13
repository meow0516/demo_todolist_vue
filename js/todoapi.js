var logininfo = {
    "url": "https://api-nodejs-todolist.herokuapp.com/user/login",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "email": "meow0516@gmail.com",
      "password": "12345678"
    }),
  };

  let token = null;

$.ajax(logininfo).done(function (response) {
      token = response.token;
      // console.log(response);
      // console.log(token);
});
            
// get all task
function getAllTasks(){
  var getTaskSettings = {
    "url": "https://api-nodejs-todolist.herokuapp.com/task",
    "method": "GET",
    "timeout": 0,
    "headers": {
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY",
      "Authorization": "Bearer "+ token,
      "Content-Type": "application/json"
    },
  };
  
  $.ajax(getTaskSettings).done(function (response) {
    console.log(response);
  });
  
}
            
// add task
function addTask(description){
  var addTaskSettings = {
    "url": "https://api-nodejs-todolist.herokuapp.com/task",
    "method": "POST",
    "timeout": 0,
    "headers": {
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY",
      "Authorization": "Bearer "+ token,
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "completed": "true",
      "description": description,
      // "description": new_todo
    }),
  };

  $.ajax(addTaskSettings).done(function (response) {
    console.log(response);
  });
  
}

// update task
function updateTask(){
  var updateSettings = {
      "url": "https://api-nodejs-todolist.herokuapp.com/task/5ddcd1566b55da0017597239",
      "method": "PUT",
      "timeout": 0,
      "headers": {
          // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY",
          "Authorization": "Bearer "+ token,
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "completed": true
          }),
        };
        
  $.ajax(updateSettings).done(function (response) {
      console.log(response);
    });

}
        
// delete task
function deleteTask(){
  var deleteSettings = {
    "url": "https://api-nodejs-todolist.herokuapp.com/task/6113c8c825480900177c4ecb",
    "method": "DELETE",
    "timeout": 0,
    "headers": {
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY",
      "Authorization": "Bearer "+ token,
      "Content-Type": "application/json",
    },
  };
  
  $.ajax(deleteSettings).done(function (response) {
    console.log(response);
  });
}



  