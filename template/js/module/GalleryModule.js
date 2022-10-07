export default function gallery() {
    $('.reviews-image-list').each(function () {
      const $this = $(this);
      const $item = $this.find('.image');
      $(function () {
        $this.lightGallery({
          selector: $item,
          thumbnail: true,
          zoom: true,
        });
      });
    });
  
    // lightGallery(document.querySelector('.gallery'), {
    //   selector: '.gItem',
    //   thumbnail: true,
    //       zoom: true,
    // });

    const cmtImg = document.querySelectorAll(".reviews-image-list")
  }
  