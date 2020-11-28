$('#select_additions .additions_class')
  .unbind('click')
  .click(function(){
    $(this).toggleClass('selected');
});