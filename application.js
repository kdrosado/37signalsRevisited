//Javascript for 37 Signals Revisited

$(document).ready(function(){

    //Basecamp product hover effect
    $("#basecamp").mouseenter(function(){
        $("#bcHeadline").removeClass("hide");
        $("#mainHeadline").addClass("hide");
    });
    $("#basecamp").mouseleave(function(){
        $("#bcHeadline").addClass("hide");
        $("#mainHeadline").removeClass("hide");
    });
    
    //Highrise product hover effect
    $("#highrise").mouseenter(function(){
        $("#hrHeadline").removeClass("hide");
        $("#mainHeadline").addClass("hide");
    });
    $("#highrise").mouseleave(function(){
        $("#hrHeadline").addClass("hide");
        $("#mainHeadline").removeClass("hide");
    });
    
    //Campfire product hover effect
    $("#campfire").mouseenter(function(){
        $("#cfHeadline").removeClass("hide");
        $("#mainHeadline").addClass("hide");
    });
    $("#campfire").mouseleave(function(){
        $("#cfHeadline").addClass("hide");
        $("#mainHeadline").removeClass("hide");
    });

});