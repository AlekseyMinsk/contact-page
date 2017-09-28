 $( document ).ready(function() {

 	
            $( "#search" ).click(function( event ) {
          
            $( "#searchFon" ).removeClass( "hidden" );


        })
            $( "#close" ).click(function( event ) {
          
            $( "#searchFon" ).addClass( "hidden" );


        })
         $( "#addres2" ).click(function( event ) {
          
            $( ".addres2" ).removeClass( "none" );
            $( ".addres1" ).addClass( "none" );
            $( ".addres3" ).addClass( "none" );


        })
          $( "#addres3" ).click(function( event ) {
          
            $( ".addres3" ).removeClass( "none" );
            $( ".addres1" ).addClass( "none" );
            $( ".addres2" ).addClass( "none" );


        })
            $( "#addres1" ).click(function( event ) {
          
            $( ".addres1" ).removeClass( "none" );
            $( ".addres2" ).addClass( "none" );
            $( ".addres3" ).addClass( "none" );


        })
                
        
      
         
});


       

