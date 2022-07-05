(function($) {
    
    var appFeaturesCarouselOptions = {
          interval: 4000,
            /* 
             Leave the pause option empty, we can't hover
             coz carousel is underneath the .screen element.
             No need for extra mouseenter and mouseleave listeners
             on the carousel. We'll add them to the .screen element.
            */
            pause: "",
            wrap: true,
            keyboard: true
        },
        $appFeatures = $("#app-features-row").find(".media"),
        $appFeaturesCarousel = $("#app-features-list-carousel"),
        $iPhoneScreen = $appFeaturesCarousel.next(),
        activeFeatureClass = "active-feature";
    
    function carouselHoverEventHandler(evt) {
        if (evt.type === "mouseenter") {
            $appFeaturesCarousel.carousel("pause");
        } else {
            $appFeaturesCarousel.carousel("cycle");
        }
    }
    
    function aFCSlidEventHandler(evt) {
        var currentIndex = $(evt.relatedTarget).index();
        $appFeatures
            .removeClass(activeFeatureClass)
            .eq(currentIndex)
            .addClass(activeFeatureClass);
    }
    
    $appFeaturesCarousel.carousel(appFeaturesCarouselOptions);
    $appFeaturesCarousel.on("slide.bs.carousel", aFCSlidEventHandler);
    $iPhoneScreen.on("mouseenter mouseleave", carouselHoverEventHandler);

}(jQuery))