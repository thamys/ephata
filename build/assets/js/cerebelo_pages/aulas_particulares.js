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


// Override defaults
    // ------------------------------

    // Setting datatable defaults
    $.extend( $.fn.dataTable.defaults, {
        autoWidth: false,
        columnDefs: [{ 
            orderable: false,
            width: '100px',
            targets: [ 5 ]
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
    
    
    // ------------------------------
    // ALerts e Modais de Confirmação
    // ------------------------------
    
    // Salvar
    $('.remarcar').on('click', function() {
        swal({
            title: "Tem certeza que deseja remarcar?",
            text: "A aula será remarcada na mesma data e horário cadastrado!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EF5350",
            confirmButtonText: "Sim, desejo remarcar!",
            cancelButtonText: "Não, cancele por favor!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm){
            if (isConfirm) {
                swal({
                    title: "Remarcado!",
                    text: "Aula remarcada com sucesso!",
                    confirmButtonColor: "#66BB6A",
                    type: "success"
                });
            }
            else {
                swal({
                    title: "Cancelado",
                    text: "Esse ação não foi feita.",
                    confirmButtonColor: "#2196F3",
                    type: "error"
                });
            }
        });
    });
    // Fechar
    $('.desmarcar').on('click', function() {
        swal({
            title: "Tem certeza que deseja desmarcar?",
            text: "O horário desmarcado estará disponível para outros alunos e talvez vocÊ não consiga remarcar se necesário!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EF5350",
            confirmButtonText: "Sim, desmarcar aula!",
            cancelButtonText: "Não, cancele por favor!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm){
            if (isConfirm) {
                swal({
                    title: "Desmarcado!",
                    text: "Aula desmarcada com sucesso!",
                    confirmButtonColor: "#66BB6A",
                    type: "success"
                });
            }
            else {
                swal({
                    title: "Cancelado",
                    text: "A aula permanece agendada.",
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
