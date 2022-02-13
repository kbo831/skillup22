

    $(document).ready(function(){
    
        //정지 & 재생 버튼 텍스트 넣기
        $('.button .pause').text('puase');
        $('.button .play').text('play');
    
        //슬릭 슬라이드 셋팅값
        $('.slide').slick({
    
            slide:'.item',
            autoplay : true,
            autoplaySpeed : 3000,
            arrows : true,
            appendArrows : $('.control .button'),//넣고싶은 위치
            dots:true,
            appendDots : $('.control .control_inner'),//넣고 싶은 위치
            slideToshow:1,
            slideToScroll:1,
            responsive:[
    
            {
                breakpoint: 1280,
                settings:{
    
                    slideToshow:2
                    
    
                }
            }
    
            ]
            
    
        });
    
    //정지 , 재생 버튼 기능의 순서
        $('.button .play').hide();
    //복합 이벤트
        $('.button .pause').on('click',function(){
    
            $('.slide').slick('slickPause');
            $('.button .play').show();
    
        });
    
        $('.button .play').on('click',function(){
    
            $('.button .play').hide();
            $('.slide').slick('slickPlay');
            $('.button .pause').show();
    
        });
    
    
    });
    
    

    