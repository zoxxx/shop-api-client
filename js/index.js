var app = {
    // Application Constructor
    initialize: function() {
        article.init();
        if (user.isLoggedIn()) {
            //book.showBookPage();
            user.dispatchLoggedInEvent();
        } else {
            user.showAuthButtons();
        }
    }
};
    
app.initialize();