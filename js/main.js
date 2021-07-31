$(document).ready(function() {

    $('.add').click(function create_todo() {
        // new_todo = $('li').first().clone();
        // console.log(new_todo);
        $('ul').append('123');
    });

    $('.icon-pencil').click(function edit_todo() {
        // change editable
        $(this).siblings('.content').attr('contenteditable','true').focus();

        // after edit, blur and editable=false

    });

    $('.complete').click( function complete_todo() {
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