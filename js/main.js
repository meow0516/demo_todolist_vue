$(document).ready(function() {
    
    // function blur_todo() {
    //     console.log('blur');
    //     // $(this).text(current_content);
    //     // $(this).siblings('.edit').removeClass('icon-floppy').addClass('icon-pencil');
    //     // $(this).attr('contenteditable','false');
    // }
    let current_content = '';

    $('.add').click(function create_todo() {
        new_todo = $('.addtodo').val();
        new_todo_format = $('.none').clone().removeClass('none');
        new_todo_format.find('.content').text(new_todo);
        $('ul').append(new_todo_format);
        $('input.addtodo').val('');
    });
    
    // $('li').each(function(){
        //     console.log($(this).find('.content').text());
        // });        
        
        
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
        $(this).closest('li').remove();
    });


});
