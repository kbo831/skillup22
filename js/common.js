
             $(document).ready(function(){
     
               var gnb_ov =$(".gnb_in");
               var depth1 = $(".drop_down .depth1");
               var depth2 = $(".drop_down .depth2");
     
               depth2.hide();
               
               depth1.on("mouseover",function(){
     
                 gnb_ov.removeClass("ov")
                 depth1.removeClass("hover")
                 depth2.hide();
     
                 $(this).addClass("hover");
                  gnb_ov.addClass("ov");
                 if($(this).hasClass("hover")){
                   $(this).find(">a").attr("title","2차메뉴열림").next(".depth2").show()
                 }
               });
     
               depth1.on("mouseleave",function(){
                 
                 gnb_ov.removeClass("ov")
                 depth1.removeClass("hover")
                 depth2.hide();
     
               });
     
     
               depth1.on("focusin",function(){
     
                 depth1.removeClass("hover")
                 depth1.find(">a").attr("title","2차메뉴닫힘")
                 depth2.hide();
     
                 $(this).addClass("hover");
                 
                 if($(this).hasClass("hover")){
                     $(this).find(">a").attr("title","2차메뉴열림").next(".depth2").show()
                 }
     
               })
               // 마지막 a 링크 벗어나면 포커스 아웃
               depth2.find("li:last-child a").on("focusout",function(){
               depth1.removeClass("hover")
               depth2.hide();
     
               })
     
     
     
     
             // 움직이는 header scroll event
         
               //1) 윈도우 스크롤 이벤트 기능 선언
               $(window).scroll(function(){
                   
              //2) 윈도우 창의 스크롤 값
               var scroll_bar_top = $(document).scrollTop();
                   //   3) 기준점은 header의 높이값
               var gnb_height = $(".gnb_in").height();
             
           
               console.log(gnb_height ,scroll_bar_top)
     
               var section2 = $(".section2").offsetTop;
           
               if( scroll_bar_top >= gnb_height){
                 gnb_ov.addClass("fixed")
               }else{
                 gnb_ov.removeClass("fixed")
               }
     
               })
     
     
             })
     
