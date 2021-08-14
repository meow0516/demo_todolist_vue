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
      console.log(response);
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
      "description": description,
    }),
  };

  $.ajax(addTaskSettings).done(function (response) {
    console.log(response);
    taskId = response.data['_id'];
    completeStatus = response.data['completed'];
    content_arr.push({
      id: taskId,
      completed: completeStatus,
      description: description
    });
  });
}

// update task
function updateTask(id){
  var updateSettings = {
      "url": "https://api-nodejs-todolist.herokuapp.com/task/"+id,
      "method": "PUT",
      "timeout": 0,
      "headers": {
          // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY",
          "Authorization": "Bearer "+ token,
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "completed": true,
            // "description":
          }),
        };
        
  $.ajax(updateSettings).done(function (response) {
      console.log(response);
    });

}
        
// delete task
function deleteTask(id){
  var deleteSettings = {
    "url": "https://api-nodejs-todolist.herokuapp.com/task/"+id,
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



  