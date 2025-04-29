$(document).ready(function () {
    // Center the iframe on the page
    const $iframe = $("#musicIframe");
    const $window = $(window);
    const $loveHeart = $("#loveHeart");
    const $code = $("#code");
    const $iframes = $(".musicIframe");
    let currentIndex = 0;

    // Adjust iframe dimensions
    function adjustDimensions() {
        $iframe.css({
            width: $loveHeart.width() * 1.0, // 100% of #loveHeart's width
            height: $loveHeart.height() * 0.6, // 60% of #loveHeart's height
        });
    }

    // Center the iframe on the page
    function centerIframe() {
        const iframeWidth = $iframe.width();
        const iframeHeight = $iframe.height();
        const windowWidth = $window.width();
        const windowHeight = $window.height();

        $iframe.css({
            position: "absolute",
            left: (windowWidth - iframeWidth) / 2, // Center horizontally
            top: (windowHeight - iframeHeight) / 3, // Center vertically
        });
    }

    // Show the first iframe initially
    function initializeIframes() {
        $iframes.hide(); // Hide all iframes
        $iframes.eq(currentIndex).fadeIn(); // Show the first iframe
    }

    // Function to show the iframe at a specific index
    function showIframe(index) {
        $iframes.hide(); // Hide all iframes
        $iframes.eq(index).fadeIn(); // Show the iframe at the given index
    }

    // Event listener for the "Next" button
    $("#nextBtn").click(function () {
        currentIndex = (currentIndex + 1) % $iframes.length; // Loop back to the first iframe
        showIframe(currentIndex);
    });

    // Event listener for the "Previous" button
    $("#prevBtn").click(function () {
        currentIndex = (currentIndex - 1 + $iframes.length) % $iframes.length; // Loop back to the last iframe
        showIframe(currentIndex);
    });

    // Adjust dimensions and center iframe on window resize
    $window.resize(function () {
        adjustDimensions();
        centerIframe();
    });

    // Initial adjustments
    adjustDimensions();
    centerIframe();

    // Initialize the iframes
    initializeIframes();

    // Apply typewriter effect to the #code element
    $code.typewriter();
});