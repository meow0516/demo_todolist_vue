let token = null;

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




$.ajax(logininfo).done(function (response) {
      token = response.token;
      console.log(response);
      // console.log(token);
      getAllTasks();

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
    // console.log(response);
    taskArray = response.data
    // console.log(taskArray);
    taskArray.forEach(taskList => {

      completeStatus = taskList['completed'];
      taskId = taskList['_id'];
      description = taskList['description'];
      // console.log(completed+id+description);

      new_todo_format = $('.none').clone().removeClass('none');
      new_todo_format.find('.content').text(description);

      content_arr.push({
      id: taskId,
      completed: completeStatus,
      description: description
      });

      $('li.none').before(new_todo_format);
    });
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



  