opera.isReady(function(){
    var theButton;
    window.addEventListener("load", function(){
        var UIItemProperties = {
          title: "012 - createItem textContent number",
          badge: {
            textContent: 23
          }
        }
        try {
            theButton = opera.contexts.toolbar.createItem( UIItemProperties );
            opera.contexts.toolbar.addItem( theButton );
            MANUAL( "There should badge with a number now." );
        } catch(err){
            FAIL("Error thrown for textContent: 23 " + err);
        }
    }, false);
});