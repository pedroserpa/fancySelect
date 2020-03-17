(function($){
    $.fn.fancySelect=function(options)
    {
        $(this).each(function(){
            var settings=$.extend({
                /*placeholder:'',*/
                target:null,
                data:[]
            },options),
            $element=$(this);
            __init($element,settings);
        });
        function __init($element,settings)
        {
           //var placeholder=settings.placeholder;
           var _html='';
           if(settings.data.length>0){
               var count=0;
               settings.data.forEach(element => {
                _html+='<div class="fancySelect-item'+((count==1)?' selected':'')+'">'+element+'</div>';
                count++;
               });
           }
           var _html='<div class="fancySelect-holder"><div class="fancySelect">'+_html+'</div></div>';
           $element.html(_html);

           $element.find('.fancySelect-item').bind("click", function (e) {
            itemClick(e,$element,settings.target);
           });

           var elmHeight=$element.outerHeight();
           $element.find('.fancySelect').scroll(function() {
            __scrollable($element,elmHeight);
           });
        }
        function __scrollable($element,elmHeight){
            var elmScrolltop=$element.find('.fancySelect').scrollTop();

            //if(elmScrolltop>87){
                $element.find('.fancySelect-item').removeClass('selected');

                $element.find('.fancySelect-item').each(function( index,object ) {
                    console.log( index + ": " + $( object ).offset().top );
                    if($( object ).offset().top>elmHeight+90)
                    {
                        $( object ).addClass('selected');
                        return false;
                    }
                });
            //}
        }
        function itemClick(e,elm,target){
            e.preventDefault();
            elm.find('.fancySelect-item').removeClass('selected');
            $( e.currentTarget ).addClass('selected');
            console.log(  $( e.currentTarget ).text() );
            target.html( $( e.currentTarget ).text() );
            return $( e.currentTarget ).text();
        }
    };
}(jQuery));