/* ------------------------------------------------------------------------------
*
*  # Basic datatables
*
*  Specific JS code additions for datatable_basic.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {

    /* ------------------------------------------------------------------------------
    *
    *  # Form Layouts
    *
    * ---------------------------------------------------------------------------- */

    // Basic
    $('.select').select2();


    //
    // Select with icons
    //

    // Initialize
    $(".select-icons").select2({
        formatResult: iconFormat,
        minimumResultsForSearch: "-1",
        width: '100%',
        formatSelection: iconFormat,
        escapeMarkup: function(m) { return m; }
    });

    // Format icons
    function iconFormat(state) {
        var originalOption = state.element;
        return "<i class='icon-" + $(originalOption).data('icon') + "'></i>" + state.text;
    }

    // Styled form components
    // ------------------------------

    // Checkboxes, radios
    $(".styled").uniform({ radioClass: 'choice' });

    // File input
    $(".file-styled").uniform({
        fileButtonHtml: '<i class="icon-googleplus5"></i>',
        wrapperClass: 'bg-warning'
    });
    
    
    /* ------------------------------------------------------------------------------
    *
    *  # Datatables
    *
    * ---------------------------------------------------------------------------- */

    // Override defaults
    // ------------------------------

    // Setting datatable defaults
    $.extend( $.fn.dataTable.defaults, {
        autoWidth: false,
        columnDefs: [{ 
            orderable: false,
            width: '100px',
            targets: [ 7 ]
        }],
        dom: '<"datatable-header"fTl><"datatable-scroll"t><"datatable-footer"ip>',
        language: {
            search: '<span>Filter:</span> _INPUT_',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
        },
        drawCallback: function () {
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
        },
        preDrawCallback: function() {
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
        }
    });


    // Tabletools defaults
    $.extend(true, $.fn.DataTable.TableTools.classes, {
        "container" : "btn-group DTTT_container", // buttons container
        "buttons" : {
            "normal" : "btn btn-default", // default button classes
            "disabled" : "disabled" // disabled button classes
        },
        "collection" : {
            "container" : "dropdown-menu" // collection container to take dropdown menu styling
        },
        "select" : {
            "row" : "success" // selected row class
        }
    });



    // Table setup
    // ------------------------------

    
        // Individual column searching with text inputs
    $('.datatable-column-search-inputs tfoot td.input-filter').each(function () {
        var title = $('.datatable-column-search-inputs thead th').eq($(this).index()).text();
        $(this).html('<input type="text" class="form-control input-sm" placeholder="Search '+title+'" />');
    });
    
    var table = $('.datatable-column-search-inputs').DataTable({
        tableTools: {
            sRowSelect: "os",
            aButtons: ["select_all", "select_none"]
        },
         initComplete: function () {
            this.api().columns().every( function() {
                var column = this;
                var select = $('<select class="filter-select select" data-placeholder="Filter"><option value=""></option></select>')
                    .appendTo($(column.footer()).not(':last-child').not(".input-filter").empty())
                    .on('change', function() {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    });
 
                column.data().unique().sort().each( function (d, j) {
                    select.append('<option value="'+d+'">'+d+'</option>')
                });
            });
        }
    });
    
    table.columns().every( function () {
        var that = this;
        $('input', this.footer()).on('keyup change', function () {
            that.search(this.value).draw();
        });
    });



    // External table additions
    // ------------------------------

    // Add placeholder to the datatable filter option
    $('.dataTables_filter input[type=search]').attr('placeholder','Type to filter...');


    // Enable Select2 select for the length option
    $('.dataTables_length select').select2({
        minimumResultsForSearch: "-1"
    });
    
    // Default initialization
    $('.select').select2({
        minimumResultsForSearch: "-1"
    });
    
    
    /* ------------------------------------------------------------------------------
    *
    *  # Modais
    *
    * ---------------------------------------------------------------------------- */
    
    // ALerts e Modais de Confirmação
    // ------------------------------
    
    // Salvar
    $('.salvar').on('click', function() {
        swal({
            title: "Tem certeza que deseja salvar?",
            text: "As alterações não poderão ser desfeitas!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EF5350",
            confirmButtonText: "Sim, desejo salvar!",
            cancelButtonText: "Não, cancele por favor!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm){
            if (isConfirm) {
                swal({
                    title: "Salvo!",
                    text: "Registro salvo com sucesso!",
                    confirmButtonColor: "#66BB6A",
                    type: "success"
                });
            }
            else {
                swal({
                    title: "Cancelado",
                    text: "Esse registro não foi salvo.",
                    confirmButtonColor: "#2196F3",
                    type: "error"
                });
            }
        });
    });
    // Fechar
    $('.fechar').on('click', function() {
        swal({
            title: "Tem certeza que deseja fechar?",
            text: "As alterações não salvas serão perdidas!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EF5350",
            confirmButtonText: "Sim, sair dessa tela!",
            cancelButtonText: "Não, cancele por favor!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm){
            if (isConfirm) {
            }
            else {
                swal({
                    title: "Cancelado",
                    text: "Você permanecerá na tela.",
                    confirmButtonColor: "#2196F3",
                    type: "error"
                });
            }
        });
    });
    // Ativar
    $('.ativar').on('click', function() {
        swal({
            title: "Tem certeza deseja ativar esse registro?",
            text: "Essa alteração pode afetar alguns relatórios!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EF5350",
            confirmButtonText: "Sim, ativar registro!",
            cancelButtonText: "Não, cancele por favor!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm){
            if (isConfirm) {
                swal({
                    title: "Ativado!",
                    text: "Registro ativado com sucesso!",
                    confirmButtonColor: "#66BB6A",
                    type: "success"
                });
            }
            else {
                swal({
                    title: "Cancelado",
                    text: "Esse registro está permanece inativo",
                    confirmButtonColor: "#2196F3",
                    type: "error"
                });
            }
        });
    });
    // Inativar
    $('.inativar').on('click', function() {
        swal({
            title: "Tem certeza deseja inativar esse registro?",
            text: "Essa alteração fará com que você não possa manipular esse registro em certas áreas!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EF5350",
            confirmButtonText: "Sim, inative isso!",
            cancelButtonText: "Não, cancele por favor!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm){
            if (isConfirm) {
                swal({
                    title: "Inativado!",
                    text: "Registro inativado com sucesso!",
                    confirmButtonColor: "#66BB6A",
                    type: "success"
                });
            }
            else {
                swal({
                    title: "Cancelado",
                    text: "Esse registro está ativo :)",
                    confirmButtonColor: "#2196F3",
                    type: "error"
                });
            }
        });
    });
    // Excluir
    $('.excluir').on('click', function() {
        swal({
            title: "Tem certeza que deseja excluir?",
            text: "Após a exclusão não será possível recuperar esses dados!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EF5350",
            confirmButtonText: "Sim, exclua isso!",
            cancelButtonText: "Não, cancele por favor!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm){
            if (isConfirm) {
                swal({
                    title: "Excluído!",
                    text: "Registro excluído com sucesso!",
                    confirmButtonColor: "#66BB6A",
                    type: "success"
                });
            }
            else {
                swal({
                    title: "Cancelado",
                    text: "Esse registro está seguro :)",
                    confirmButtonColor: "#2196F3",
                    type: "error"
                });
            }
        });
    });
    
});
