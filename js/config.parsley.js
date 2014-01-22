$(document).ready(function () {
    $('form[data-parsley-validate]').parsley({
        successClass: 'has-success',
        errorClass: 'has-error',
        errors: {
            classHandler: function (el) {
                return $(el).closest('.form-group');
            },
            errorsWrapper: '<div class=\"help-block\"></div>',
            errorElem: '<p></p>'
        }
    });
});
