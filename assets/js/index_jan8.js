
        $(function(){
            $('#Home_Page').show();
            $('#About_Page').hide();
            $('#Resume_Page').hide();
            $('#Experience_Page').hide();
            $('#Contact_Page').hide();
            
            //links to other webpages
            $('#fb').click(function(){window.open( "https://www.facebook.com/anthony.chan.9803")});
            $('#twitter').click(function(){window.open( "https://twitter.com/ay_chanboy")});
            $('#linkedin').click(function(){window.open( "https://www.linkedin.com/in/anthonyychan")});
            $('#insta').click(function(){window.open( "https://instagram.com/ay__chan/")});
            $('#medium').click(function(){window.open( "https://medium.com/@aychan")});
            $('#gitHub').click(function(){window.open( "https://github.com/aychan")});
            //end link functions
            
            
            $('.Nav_Tab_OFF').mouseenter(function(){
                 $(this).hide();
                 $(this).removeClass('Nav_Tab_OFF').addClass('Nav_Tab_ON');
                 $(this).fadeIn(100);
            });
            $('.Nav_Tab_OFF').mouseleave(function(){
                 $(this).removeClass('Nav_Tab_ON').addClass('Nav_Tab_OFF');    
            });
            ///////////////
            $('#Home').click(function(){
                    $('#About_Page').hide();
                    $('#Resume_Page').hide();
                    $('#Experience_Page').hide();   
                    $('#Contact_Page').hide();
                    $('#Home_Page').fadeIn(300);
            });
            $('#About').click(function(){
                    $('#Home_Page').hide();
                    $('#Resume_Page').hide();
                    $('#Experience_Page').hide();   
                    $('#Contact_Page').hide();
                    $('#About_Page').fadeIn(300);
            });
            $('#Resume').click(function(){
                    $('#Home_Page').hide();
                    $('#About_Page').hide();
                    $('#Experience_Page').hide();   
                    $('#Contact_Page').hide();
                    $('#Resume_Page').fadeIn(300);
            });
            $('#Experience').click(function(){
                    $('#Home_Page').hide();
                    $('#About_Page').hide();
                    $('#Contact_Page').hide();
                    $('#Resume_Page').hide();
                    $('#Experience_Page').fadeIn(300);   
            });
            $('#Contact').click(function(){
                    $('#Home_Page').hide();
                    $('#About_Page').hide();
                    $('#Resume_Page').hide();
                    $('#Experience_Page').hide();   
                    $('#Contact_Page').fadeIn(300);
            });
            ///////////////
            
            
        });
 
        
        function DeSelectAll(){
     $('body div.j_Select').each(function(){
            var isSelected = $(this).attr("jSelected"); 
            if(isSelected == "true"){
                $(this).attr("jSelected", "false");
                $(this).removeClass("j_Select").addClass("j_noSelect");
            }
       }); 
}//END DeSelectAll

