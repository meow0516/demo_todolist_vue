$(document).ready(function() {
    
    
    let current_content = '';
    let content_arr = [];

    
    $('li:not(.none)').each(function(){
            li_content = $(this).find('.content').text();
            content_arr.push(li_content);
        }); 
    
    

    $('.add').click(function create_todo() {
        new_todo = $('.addtodo').val();
        new_todo_format = $('.none').clone().removeClass('none');
        new_todo_format.find('.content').text(new_todo);
        $('li.none').before(new_todo_format);
        $('input.addtodo').val('');
        content_arr.push({description:new_todo});
        console.log(content_arr);
        addTask(new_todo);
    });
    
        
        
    $('.todos').on('click','.icon-pencil', function edit_todo() {
        if($(this).siblings().hasClass('icon-check-empty')){
            current_content = $(this).siblings('.content').text();       
            $(this).removeClass('icon-pencil save').addClass('icon-floppy');
            $(this).siblings('.content').attr('contenteditable','true').focus();
        }
    });
    
    $('.todos').on('click','.icon-floppy', function save_todo() {
        $(this).removeClass('icon-floppy save').addClass('icon-pencil');
        $(this).siblings('.content').attr('contenteditable','false');
        let li_index = $(this).closest('li').index();
        edit_todo = $(this).siblings('.content').text();
        content_arr[li_index] = edit_todo;
        console.log(content_arr);

    });
    
    $('.todos').on('mousedown','.icon-floppy', function() {
        $(this).addClass('save');
    });


    $('.todos').on('focusout','.content',function blur_todo (e) { 
        //     // if save->edit_todo
        if(!$(this).siblings().hasClass('save')){       
        $(this).text(current_content);
        $(this).siblings('.edit').removeClass('icon-floppy').addClass('icon-pencil');
        $(this).attr('contenteditable','false');
        }   
    });

    $('.todos').on('click','.complete', function complete_todo() {
        if ($(this).hasClass('icon-check-empty')) 
        {
            $(this).removeClass('icon-check-empty').addClass('icon-check');
        }
        else{
            $(this).removeClass('icon-check').addClass('icon-check-empty');
        }
    });
    

    $('.todos').on('click' , '.delete' , function delete_todo() {
        let li_index = $(this).closest('li').index();
        content_arr.splice(li_index,1);
        $(this).closest('li').remove();
        console.log(content_arr);
    });


});
