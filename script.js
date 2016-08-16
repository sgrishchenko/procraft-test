import "bootstrap/dist/css/bootstrap.css";
import "flag-icon-css/css/flag-icon.css";
import "jquery-ui/themes/base/all.css";
import "jquery-ui/themes/base/menu.css";
import "jquery-ui/themes/base/autocomplete.css";

import 'jquery.inputmask';
import 'inputmask.phone.extensions';
import 'jquery-ui/ui/widgets/autocomplete';
import 'bootstrap';

$(function () {
    $("#profession").autocomplete({
        source: [
            "Автомеханик",
            "Архитектор",
            "Бухгалтер",
            "Ветеринар",
            "Врач",
            "Дипломат",
            "Журналист"
        ]
    });

    $("#phone").inputmask("phone", {
        url: "node_modules/jquery.inputmask/extra/phone-codes/phone-codes.js"
    });

    $(".dropdown-menu li a").click(function () {
        var $liIcon = $(this).find(".flag-icon");
        var $btnIcon = $(".btn").find(".flag-icon");

        $btnIcon.attr("class", $liIcon.attr("class"))
        $("#phone").val($(this).data("code"))
    }).filter(".selected").click();
});