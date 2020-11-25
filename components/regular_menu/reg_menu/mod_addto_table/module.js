$('#additions').select2({
    closeOnSelect: false,
    closeOnBlur: true,
});

function hide_desctooltip(){
    console.log('dd');
    $('#desctooltip').tooltip('hide');
}

var desctooltip_template = 
`
<div class="desctooltip_container">
    <div class="desctooltip_close" onclick="hide_desctooltip()">
        <i class="fa fa-times-circle" aria-hidden="true"></i>
    </div>

    <div class="desctooltip_title">Add from Description Templates</div>
    <ul class="desctooltip_saveddescs">
        <li>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur sed ornare neque. Pellentesque finibus felis et nulla euismod, 
            ac scelerisque neque egestas. </p>
        </li>

        <li>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur sed ornare neque. Pellentesque finibus felis et nulla euismod, 
            ac scelerisque neque egestas. </p>
        </li>

        <li>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur sed ornare neque. Pellentesque finibus felis et nulla euismod, 
            ac scelerisque neque egestas. </p>
        </li>

        <li>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur sed ornare neque. Pellentesque finibus felis et nulla euismod, 
            ac scelerisque neque egestas. </p>
        </li>
    </ul>
</div>`;


$('#desctooltip').tooltip({
    trigger:'click',
    placement: 'bottom',
    html:true,
    title: 'Saved Descriptions',
    template: desctooltip_template,

});

$('table tbody').hide();
$('#add_newitem_totable').click(function(){
    $('table tbody').show();
})