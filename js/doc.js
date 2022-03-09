

    $(document).ready(function(){

        //main_title
        // $(".intro").animate({opacity:"0"},3000,function(){
        //     $(".intro").hide();
        // });
    
        //정지 & 재생 버튼 텍스트 넣기
        $('.button .pause').text('puase');
        $('.button .play').text('play');
    
        //슬릭 슬라이드 셋팅값
        $('#horizontal .slide').slick({
    
            slide:'.slide .item',
            autoplay : true,
            autoplaySpeed : 3000,
            vertical:false,
            arrows : true,
            appendArrows : $('#horizontal .control .button'),//화살표 넣고싶은 위치
            dots:true,
            appendDots : $('#horizontal .control .control_inner'),//현재 위치 넣고 싶은 위치
            slideToshow:1,
            slideToScroll:1,
            responsive:[
    
                {
                    breakpoint: 1280,//1297부터 슬라이드 개수 2개보여주기
                    settings:{
        
                        slideToshow:2,
                        slideToScroll:2//슬라이드 개수 2개씩 넘김 
        
                    }
                }
        
            ]
                
        
        });

         
    //정지 , 재생 버튼 기능의 순서
    $('#horizontal .button .play').hide();
    //복합 이벤트
        $('#horizontal .button .pause').on('click',function(){
    
            $('.slide').slick('slickPause');
            $('#horizontal .button .play').show().focus();
    
        });
    
        $('#horizontal .button .play').on('click',function(){
    
            $('#horizontal .button .play').hide();
            $('.slide').slick('slickPlay');
            $('#horizontal .button .pause').show().focus();
    
        });


        // 수직슬라이드  왜 안되지 
        $(document).ready(function(){

            $('#vertical .slide2').slick({

                slide:'.slide2 .item',
                autoplay : true,
                autoplaySpeed : 1000,
                vertical:true,
                fade:true,
                arrows : true,
                appendArrows : $('.control2 .button'),
                dots:true,
                appendDots : $('.control2 .control_inner'),
                slideToshow:1,
                slideToScroll:1,

                });

        })


      

   

    
    
    
    });
    
    

    