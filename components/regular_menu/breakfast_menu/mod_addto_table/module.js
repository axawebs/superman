$('#additions').select2({
    closeOnSelect: false,
    closeOnBlur: true,
});

load_module('modal_additions','regular_menu/additions/mod_add_additions');

$('#btn_createinrow_item').click(function(){

    let newrow_html =
    `<tr>
        <td class="text-center">
          <img src="assets/img/no-image.jpg" alt="" />
        </td>
        <td><input type='text' class="form-control"/></td>
        <td><input type='text' class="form-control"/></td>
        <td>
            <button type="button" class="btn btn-light">
                <i class="fa fa fa-times"></i>
              </button>
        </td>
        <td><input type='text' class="form-control"/></td>
        <td><textarea type='text' class="form-control" style="height:60px; resize:none"></textarea></td>
        <td><input type='text' class="form-control"/></td>
        <td>
            
        </td>
        <td></td>
        <td>
          <button type="button" class="btn btn-secondary">
            <i class="fa fa fa-eye"></i>
          </button>
          <button type="button" class="btn btn-success">
            <i class="fa fa-check"></i>
          </button>
          <button type="button" class="btn btn-danger">
            <i class="fa fa-times"></i>
          </button>
        </td>
      </tr>`;

      $('#results_table_placeholder tbody').prepend(newrow_html);
});

$('#btn_addtorow_image').click(function(){
    $('.carousel-inner').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 7,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
      autoplay:false
    });
  });
