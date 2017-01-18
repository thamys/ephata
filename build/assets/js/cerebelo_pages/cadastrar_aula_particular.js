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
    *  # Fullcalendar
    *
    * ---------------------------------------------------------------------------- */


    
    // Add events
    // ------------------------------

    // Default events
    var events = [
        {
            title: 'All Day Event',
            start: '2014-11-01'
        },
        {
            title: 'Long Event',
            start: '2014-11-07',
            end: '2014-11-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2014-11-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2014-11-16T16:00:00'
        },
        {
            title: 'Conference',
            start: '2014-11-11',
            end: '2014-11-13'
        },
        {
            title: 'Meeting',
            start: '2014-11-12T10:30:00',
            end: '2014-11-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: '2014-11-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: '2014-11-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: '2014-11-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: '2014-11-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: '2014-11-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2014-11-28'
        }
    ];
    
    
        // Agenda view
    $('.fullcalendar-agenda').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2014-11-12',
        defaultView: 'agendaDay',
        editable: true,
        events: events
    });
    
    
    /* ------------------------------------------------------------------------------
    *
    *  # Modals
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


