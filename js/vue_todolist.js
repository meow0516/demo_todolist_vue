// Vue.directive('focus', {
//     componentUpdated: function (el, binding) {
//       if( binding.value){
//         // console.log(binding.value);  
//         el.focus();
//       }
//     }
//   })


var todoList = new Vue({
    el: '#todolist',
    data: {
        loadingStatus: true,
        input_todo: "",
        editTodoId: null,
        saveStatus: null,
        currentTodo: "",
        todos:[],
    },
    created(){
        this.getAllTasks();
    },
    methods: {
        getAllTasks(){
            axios.get('https://todo-list-api-server.herokuapp.com/api/task')
            .then((response)=>{
                this.loadingStatus = false;
                response.data.forEach(todoData => {
                    this.todos.push(todoData);
                })
            })
        },
 
        createTodo(){
        // add new todo
        this.todos.push({
            id: "",
            description: this.input_todo,
            complete: false,
        });
        // save to databse
        axios.post('https://todo-list-api-server.herokuapp.com/api/task',{
            description: this.input_todo,
        })
        // .then(function(response){
        // console.log(response)});
        

        this.input_todo = "";        
        },

        editTodo(todo, index){
            let id = this.todos[index]['id'];
            // change icon
            // icon = edit now
            if( this.editTodoId !== index){
                if( this.editTodoId === null){
                    // change icon = save
    
                    this.editTodoId = index;    
                    this.currentTodo = todo.description;
    
                    // focus on input
                    var currentEditItem = this;
                    this.$nextTick(function(){
                        currentEditItem.$refs['editItem'][0].focus();
                    })                   
                }

                else{
                    this.todos[this.editTodoId]['description'] = this.currentTodo;
                    
                    this.editTodoId = index;
                    this.currentTodo = todo.description;                    

                    var currentEditItem = this;
                    this.$nextTick(function(){
                        currentEditItem.$refs['editItem'][0].focus();
                    })
                }                
            }

            else{
                // change icon = edit
                this.editTodoId = null;
                                
                // save edit content to database
                axios.put('https://todo-list-api-server.herokuapp.com/api/task/'+id,
                {
                    description: this.todos[index]['description'],
                })              
            }
 
            
        },

        addSaveStatus(index){
            if( this.editTodoId !== index){
                if( this.editTodoId === null){
                    this.saveStatus = null;
                }

                else{
                    this.saveStatus = null;
                }
                
            }
            
            else{
                this.saveStatus = true;                
            }

        },

        blurTodo(){

            if(this.saveStatus === true){
                this.saveStatus = null;                
            }

            else{
                this.todos[this.editTodoId]['description'] = this.currentTodo;
                this.editTodoId = null;
                this.currentTodo = "";
                this.saveStatus = null;
                
            }           
        },

        completeTodo(index){
            let id = this.todos[index]['id'];

            if(this.todos[index].completed == true){

                this.todos[index].completed = false;
                axios.put('https://todo-list-api-server.herokuapp.com/api/task/'+id,
                {completed: false,}
                )
            }

            else{
                this.todos[index].completed = true;
                axios.put('https://todo-list-api-server.herokuapp.com/api/task/'+id,
                {completed: true,}
                );
            
            }
        },

        deleteTodo(index){
            // deleteTask(id);
            let id = this.todos[index]['id'];
            // delet on html
            this.todos.splice(index,1);
            // delete task from database
            axios.delete('https://todo-list-api-server.herokuapp.com/api/task/'+id)
        },
    },
  })