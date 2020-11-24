/**
 * Navigation related scripts
 */

 // Primary menu
 $('#regularmenu_primaryselection button').click(function (e) {
    e.stopPropagation();
    const subcategory_class = $(this).attr('regmenu_subcat_class');
    $('#regularmenu_secondaryselection button').css('display','none');
    $('.'+subcategory_class).css('display','inline-block');

    //Button Selection CSS
    $('#regularmenu_primaryselection button')
        .removeClass('btn-secondary')
        .addClass('btn-light');
    $(this)
        .removeClass('btn-light')
        .addClass('btn-secondary'); 
 });

 load_sub_component('regular_menu','reg_menu');
