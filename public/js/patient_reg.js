$(document).ready(function() {
    
    $("#reg-form").submit(function(event){
        event.preventDefault();
        //alert("Hello World");
        var details = {
            name: $("#name").val(),
            date: $("#name").val(),
            contact: $("#contact").val(),
            address: $("#address").val(),
            doc: $("#doc").val(),
            dob: $("#dob").val(),
            complications : $("#comp").val(),
            expectedDate : $("#dod").val(), 
            remarks : $("#rem").val(),
            education : $("#ed").val(),
            bloodGrp : $("#blgrp").val(),
            occupation : $("#occu").val(),
            height : $("#ht").val(),
            weight: $("#wt").val(),
            allergy : $("#alleg").val(),
            delivery_count : $("#noc").val() 
        };

        $.post("/api/signup", details, function(res) {
            console.log(res);
        });
    });
});