export default function Select2Module() {
    $(document).ready(function() {
        $(".select-1").select2({
            placeholder: "Loại công trình",
            // allowClear: true,
        });
        // .on('select2:open',() => {
        //   $('.select2-dropdown').hide();
        //   setTimeout(function() {
        //     jQuery('.select2-dropdown').slideDown(1000);
        //   });
        // });

        $(".select-2").select2({
            placeholder: "Khu vực",
        });

        $(".select-year").select2({
            placeholder: "Chọn năm",
        });

        $(".select-progress").select2({
            placeholder: "Chọn tiến độ",
        });

        $(".select-place").select2({
            placeholder: "Khu vực",
            // allowClear: true,
        });

        $(".select2choose").each(function(i, v) {
            var placeholder = $(this).attr("data-placeholder");
            $(this).select2({
                width: '100%',
                // placeholder:placeholder
            });
        });
    });
    $(document).ready(function() {
        $(".re-select").select2();
    });
}