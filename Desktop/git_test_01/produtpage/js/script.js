$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


// svg 길이구하기
// $(function(){
//     $('.svgAni').find("#svgAni02").each(function(i,path){
//         var lenght=path.getTotalLength();
//         //alert(lenght)
//     })
// })

// svg 길이구하기
$(function(){
    $('.svgAni2').find("#svgAni02").each(function(i,path){
        var lenght=path.getTotalLength();
        //alert(lenght)
    })
})