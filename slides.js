var stepForm = {
    init: function() {
        stepForm.build();
        $(".js-step-next").click(stepForm.next);
        $(".js-step-prev").click(stepForm.prev);
        $(".js-step-goto").click(stepForm.goTo);
    },
    build: function() {
        var nextBtn   = "<button class='js-step-next fa fa-long-arrow-right'></button>",
            prevBtn   = "<button class='js-step-prev fa fa-long-arrow-left'></button>",
            container = "<div class='step-controls'></div>";

        $(".step-form .step").append(container);
        $(".step-form .step .step-controls").not(':first').append(prevBtn);
        $(".step-form .step .step-controls").not(':last').append(nextBtn);

        $(".step-form .step").each(stepForm.attrData);

        var gotoWrapper = "<div class='step-goto'></div>";

        $(".step-form").prepend(gotoWrapper);
        $(".step-form .step").each(stepForm.addGoToItems);
        $(".step-form .goto-item").each(stepForm.attrData);
        $(".step-form .goto-item:first").addClass("active");
    },
    addGoToItems: function(index) {
        var gotoLabel = index + 1,
            gotoItem  = "<span class='goto-item js-step-goto'>" + gotoLabel + "</span>";

        $(".step-goto").append(gotoItem);
    },
    attrData: function(index) {
        $(this).attr("data-step", index);
    },
    prev: function() {
        var step = stepForm.getStep($(this).closest(".step")) - 1;
        $(".active").removeClass("active");
        $("[data-step="+step+"]").addClass("active");
        $(".steps").css("transform", "translateX(-" + step + "00vw)");
    },
    next: function() {
        var step = stepForm.getStep($(this).closest(".step")) + 1;
        $(".active").removeClass("active");
        $("[data-step="+step+"]").addClass("active");
        $(".steps").css("transform", "translateX(-" + step + "00vw)");
    },
    goTo: function() {
        var step = stepForm.getStep($(this));
        $(".step-goto .goto-item").removeClass("active");
        $(this).addClass("active");
        $(".steps").css("transform", "translateX(-" + step + "00vw)");
    },
    getStep: function(container) {
        var step = parseInt(container.data("step"));
        return step;
    }
};

$(document).ready(stepForm.init);