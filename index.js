
        $(function(){
            $('#sideBar').mouseenter(function(){
                $('#sideBar').removeClass('side-bar').addClass('side-bar-revealed');
                $('#sideBarButton').removeClass('side-bar-button').addClass('side-bar-button-revealed');
                $('#sideBarContainer').removeClass('side-bar-button-container').addClass('side-bar-button-container-revealed');
            });
            
             $('#peakChange').click(function(){
                $('#sideBar').removeClass('side-bar-revealed').addClass('side-bar');
                $('#sideBarButton').removeClass('side-bar-button-revealed').addClass('side-bar-button');
                $('#sideBarContainer').removeClass('side-bar-button-container-revealed').addClass('side-bar-button-container');
                 
                 
                $('html, body').animate({
                    scrollTop: $("#peak").offset().top
                }, 1500);
                     return false;
             });
             $('#welcomeN').click(function(){
                $('#sideBar').removeClass('side-bar-revealed').addClass('side-bar');
                $('#sideBarButton').removeClass('side-bar-button-revealed').addClass('side-bar-button');
                $('#sideBarContainer').removeClass('side-bar-button-container-revealed').addClass('side-bar-button-container');
                 
                $('html, body').animate({
                    scrollTop: $("#welcomePage").offset().top
                }, 1250);
                     return false;
             });
            //Berthiaume
            $('#boxLeft').mouseenter(function(){
                $('#boxLeft').removeClass('smallBox').addClass('smallBox-revealed');
                $('#boxLeftContent').removeClass('hidden-info').addClass('hidden-info-revealed');
            });
            $('#boxLeft').mouseleave(function(){
                $('#boxLeft').removeClass('smallBox-revealed').addClass('smallBox');
                $('#boxLeftContent').removeClass('hidden-info-revealed').addClass('hidden-info');
            });
            $('#boxLeft').click(function(){
                $('#hackVid').hide();
            });
            
            //hackumass
            $('#hackVid').hide();
            $('#boxLeftCenter').mouseenter(function(){
                $('#boxLeftCenter').removeClass('smallBox').addClass('smallBox-revealed');
                $('#boxLeftCenterContent').removeClass('hidden-info').addClass('hidden-info-revealed');
            });
            $('#boxLeftCenter').mouseleave(function(){
                $('#boxLeftCenter').removeClass('smallBox-revealed').addClass('smallBox');
                $('#boxLeftCenterContent').removeClass('hidden-info-revealed').addClass('hidden-info');
            });
            $('#boxLeftCenter').click(function(){
                $('#bio-content').removeClass().addClass('height-bio-hack allCover');
                $('#hackVid').show();
                $('#hacks').removeClass('font-con').addClass('font-con-revealed');//should turn font color orange.
            });
            
            //ted
            $('#boxRightCenter').mouseenter(function(){
                $('#boxRightCenter').removeClass('smallBox').addClass('smallBox-revealed');
                $('#boxRightCenterContent').removeClass('hidden-info').addClass('hidden-info-revealed');
            });
            $('#boxRightCenter').mouseleave(function(){
                $('#boxRightCenter').removeClass('smallBox-revealed').addClass('smallBox');
                $('#boxRightCenterContent').removeClass('hidden-info-revealed').addClass('hidden-info');
            });
            $('#boxRightCenter').click(function(){
                $('#bio-content').removeClass().addClass('height-bio-ted allCover');
                $('#hackVid').hide();
            });
            
            //about
            $('#boxRight').mouseenter(function(){
                $('#boxRight').removeClass('smallBox').addClass('smallBox-revealed');
                $('#boxRightContent').removeClass('hidden-info').addClass('hidden-info-revealed');
            });
            $('#boxRight').mouseleave(function(){
                $('#boxRight').removeClass('smallBox-revealed').addClass('smallBox');
                $('#boxRightContent').removeClass('hidden-info-revealed').addClass('hidden-info');
            });
            $('#boxRight').click(function(){
                $('#bio-content').removeClass().addClass('height-bio allCover');
                $('#hackVid').hide();
            });
        });
 