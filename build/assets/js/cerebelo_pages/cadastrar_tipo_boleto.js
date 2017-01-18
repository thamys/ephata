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
    
    
    // Select2 select
    // ------------------------------

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
    *  # Steps Form
    *
    * ---------------------------------------------------------------------------- */
    
    // Specify custom starting step
    $(".steps-starting-step").steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        startIndex: 0,
        titleTemplate: '<span class="number">#index#</span> #title#',
        autoFocus: true,
        labels: {
            previous: 'Anterior',
            next: 'Próximo',
            finish: 'Salvar'
        },
        onFinished: function (event, currentIndex) {
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
        }
    });

    /* ------------------------------------------------------------------------------
    *
    *  # Modais de Confirmação
    *
    * ---------------------------------------------------------------------------- */

    
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
                    text: "Aluno salvo com sucesso! Deseja efetuar a matrícula?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#EF5350",
                    confirmButtonText: "Sim, ir para matrícula!",
                    cancelButtonText: "Não, cancele por favor!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm){
                    if (isConfirm) {
                        window.location.href = 'efetuar_matricula.html';
                    }
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
    
    
    // Initialize plugins
    // ------------------------------

    // Select2 selects
    $('.select').select2();


    // Simple select without search
    $('.select-simple').select2({
        minimumResultsForSearch: '-1'
    });


    // Styled checkboxes and radios
    $('.styled').uniform({
        radioClass: 'choice'
    });


    // Styled file input
    $('.file-styled').uniform({
        wrapperClass: 'bg-warning',
        fileButtonHtml: '<i class="icon-googleplus5"></i>'
    });
    
});
