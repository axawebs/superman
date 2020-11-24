$('.station_selection tr td div').click(function () {
    $(this).toggleClass("selected");
    $(this).parent().parent().find('th div').addClass('selected');
    let hasClass = false; 
    $(this).parent().parent().find('td div').each(function(){
        if($(this).hasClass('selected')){
            hasClass = true
        }
    });

    if (!hasClass){
        $(this).parent().parent().find('th div').removeClass('selected');
    }
})