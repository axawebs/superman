/**
 * Sub component specific script
 */
var placeholder_id = 'table_placeholder';

//Load breakfast menu by default
load_module(placeholder_id, 'images/offer_menu/mod_daily_offer');

// Event listner for menu change
$('#regular_menu_categories select').change(function(){
    const select = $(this).val();
    if(select=='dailyoffer'){
        remove_module(placeholder_id,'images/regular_menu/mod_lunch_menu');
        load_module(placeholder_id, 'images/offer_menu/mod_daily_offer');
    }
});