$(document).ready(function() {

    $('.add').click(function create_todo() {
        new_todo = $('.addtodo').val();
        new_todo_format = $('.none').clone().removeClass('none');
        new_todo_format.find('.content').text(new_todo);
        $('ul').append(new_todo_format);
        $('input.addtodo').val('');
    });

    $('.todos').on('click','.edit', function edit_todo() {
        // change editable
        if($(this).siblings('.content').attr("contentEditable") == "false"){
            $(this).removeClass('icon-pencil').addClass('icon-floppy');
            $(this).siblings('.content').attr('contenteditable','true').focus();
            
        }
        // after edit editable=false
        else{
            $(this).removeClass('icon-floppy').addClass('icon-pencil');
            $(this).siblings('.content').attr('contenteditable','false');
        }
        // blur, editable = false
        
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
        $(this).closest('li').remove();
    });


});





// function todo_create() {          
//     $('li').last().append('123');   
// };

// function todo_complete() {
//     $(this).removeClass('icon-check').addClass('icon-check-empty');
//     console.log('complete');
// }

// function todo_edit(e) {
//     $(".content").attr("contenteditable","true");
//     // console.log('123');
// }

// function todo_delete() {
    
//     console.log('delete');
// }