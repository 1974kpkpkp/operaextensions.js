opera.isReady(function(){
    var timer = null, counter = 0;
    var theButton;

    window.addEventListener("load", function(){
        var UIItemProperties = {
          disabled: false,
          title: "000 - exists",
          icon: "./oex/icon.png",
          onclick: function(){
            if( timer ){
              window.clearInterval( timer );
              timer = null;
            } else {
              timer = window.setInterval( function(){
                  MANUAL( "Changing theButton.badge.textContent to Counter = " + counter );
                  theButton.badge.textContent = "" + counter;
                  counter++;
              }, 500);
            }
          },
          badge: {
            textContent: 'Description',
            backgroundColor: '#ffeedd',
            color: '#404040',
            display: 'hidden'
          }
        }
        theButton = opera.contexts.toolbar.createItem( UIItemProperties );
        opera.contexts.toolbar.addItem( theButton );
        MANUAL( "If there is an enabled button with a title and favicon, click the button to change badge.textContent" );
    }, false);

});