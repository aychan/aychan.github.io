
//script to open multiple tabs at once

$().ready(function(){
   
    
    $('.j_noSelect').click(function(){
                
            var isSelected = $(this).attr("jSelected");
   
            if(isSelected == "false"){
                $(this).attr("jSelected", "true");
                $(this).removeClass("j_noSelect").addClass("j_Select");
            }else{
                $(this).attr("jSelected", "false");
                $(this).removeClass("j_Select").addClass("j_noSelect");
            }
            
            
        });

    $('#DTO').click(function(){
       $('.j_Select').each(function(){ 
           var url = $(this).attr("value");
           window.open(url);
       }); 
        
    });
    
    
    
    $('#HCTO').click(function(){//hard coded tab opener

                window.open("http://brandcolors.net/");
                window.open("http://cloford.com/resources/colours/websafe2.htm");
                window.open("http://websafecolors.info/");

            });
});
    
        
 