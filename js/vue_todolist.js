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
        input_todo: "",
        editTodoId: null,
        saveStatus: null,
        currentTodo: "",
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
        getAllTasks(){

        },
 
        createTodo(){
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

        editTodo(todo, index){
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
                    // console.log('before'+this.editTodoId+this.currentTodo);
                    
                    this.editTodoId = index;
                    this.currentTodo = todo.description;
                    // console.log('after'+this.editTodoId+this.currentTodo);
                    

                    var currentEditItem = this;
                    this.$nextTick(function(){
                        currentEditItem.$refs['editItem'][0].focus();
                    })

                    

                }
                
            }

            else{
                // change icon = edit
                this.editTodoId = null;
                // this.saveStatus = true;

                
                // save edit content by vmodel

                
            }

           
            // if( !('contenteditable' in this.todos[editTodoId])){
            //     this.todos[editTodoId] = Object.assign({},this.todos[editTodoId],{contenteditable:true});
            //     this.todos.splice(editTodoId,1,this.todos[editTodoId]);

            // }
            // else{
            //     this.$delete(this.todos[editTodoId],'contenteditable');
            //     // this.tods[editTodoId]['description'] = currentTodo;
            //     console.log(this.todos[editTodoId]);
            //     currentTodo = "";
            //     console.log(currentTodo);
            //     console.log(editTodoId);
            // }
 
            
        },

        addSaveStatus(index){
            if( this.editTodoId !== index){
                if( this.editTodoId === null){
                    this.saveStatus = null;
                    console.log('change to edit mode dont add save '+this.saveStatus);
                }

                else{
                    this.saveStatus = null;
                    console.log('channge to other item dont save '+this.saveStatus);
                }
                
            }
            
            else{
                this.saveStatus = true;                
                console.log('change status = save '+this.saveStatus);
            }

        },

        blurTodo(){

            if(this.saveStatus === true){
                console.log('save');
                this.saveStatus = null;
                
            }
            else{
                this.todos[this.editTodoId]['description'] = this.currentTodo;
                this.editTodoId = null;
                this.currentTodo = "";
                console.log('dont save');
                this.saveStatus = null;
                
            }
            
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
    },

  })