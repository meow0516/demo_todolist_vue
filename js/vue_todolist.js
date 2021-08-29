var todoList = new Vue({
    el: '#todolist',
    data: {
        input_todo: "",
        todos:[
            {
                id: "",
                description: "123",
                complete: false,
            },
            {
                id: "",
                description: "abc",
                complete: true,
            },
        ],
    },

    methods: {
        createTodo(){
            // console.log('as');
        // add new todo
        this.todos.push({
            id: "",
            description: this.input_todo,
            complete: false,
        });
        // save to databse
        // addTask(new_todo);

        this.input_todo = "";
        },

        completeTodo(index){
            if(this.todos[index].complete == true){
                this.todos[index].complete = false;
            }
            else{
                this.todos[index].complete = true;
            }
        },

        deleteTodo(index){
            // delete task from database
            // deleteTask(id);
            
            // delet on html
            this.todos.splice(index,1);
        },
    }
  })