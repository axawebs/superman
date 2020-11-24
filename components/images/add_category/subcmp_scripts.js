var args={
    breakfast:['Eggs', "Salad", "Drinks"],
    day_menu:["Pizza", "Burgers", "Kebabs"],
    daily_offer:["Daily Offer 1", "Daily Offer 2", "Daily Offer 3"],
    just4today:["Just 4 Today A", "Just 4 Today B"],
    threehr_offer:["3Hr Offer A"],
}

function load_suggestions(suggest_title, suggestions){
    $('#suggest_cattitle').html(suggest_title);
    $('#suggest_items').html('');
    
    $(suggestions).each(function(item,value){
        const html = '<li><a href="javascript:void(0);">'+value+'</a></li>';
        $('#suggest_items').append(html);
    });
}
load_suggestions('Breakfast', args.breakfast);


$('#super-category').change(function () {
    let selected_value = $(this).children('option:selected').val();
    const reg_menu_options = 
    `<option value="breakfast">Breakfast</option>
    <option value="day_menu">Day Menu</option>`;
    const offers_options =
    `<option value="daily_offer">Daily Offer</option>
    <option value="just4today">Just 4 Today</option>
    <option value="threehr_offer">3hr Offer</option>`;

    if(selected_value=="reg_menu"){
        $('#category').html(reg_menu_options);
    }else{
        $('#category').html(offers_options);
    }
    $('#category').trigger('change');
});

$('#category').change(function(){
    const selected_value = $(this).children('option:selected').val();
    const selected_text = $(this).children('option:selected').text();

    load_suggestions(selected_text, args[selected_value]);
}); 