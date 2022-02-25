var adsloader = {
    initialize: function() {
        var html =
            '<div class="loading-overlay"></div>' +
            '<div class="loading-overlay-image-container">' +
            '<img src="images/loader.GIF" class="loading-overlay-img"/>' +
            '</div>';
        $('body').append(html);
    },
    showLoader: function() {
        jQuery('.loading-overlay').show();
        jQuery('.loading-overlay-image-container').show();
    },
    hideLoader: function() {
        jQuery('.loading-overlay').hide();
        jQuery('.loading-overlay-image-container').hide();
    }
}

adsloader.initialize();
