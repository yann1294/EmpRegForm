$(function(){
    var stateOptions;
    var districtOptions;
    $.getJSON('indianStates.1.json',function(result){
        $.each(result, function(stateCode,stateName) {
            //<option value='stateCode'>stateName</option>
            stateOptions+="<option value='"
            +stateCode+
            "'>"
            +stateName+
            "</option>";
             });
             $('#state').html(stateOptions);
        });

        $("#state").change(function(){
            if($(this).val()=="MH"){
                    $.getJSON('MHDistricts.json',function(result){
                    $.each(result, function(i,district) {
                        //<option value='districtName'>districtName</option>
                        districtOptions+="<option value='"
                        +district.name+
                        "'>"
                        +district.name+
                        "</option>";
                         });
                         $('#district').html(districtOptions);
                    });
                }
            });
    
});