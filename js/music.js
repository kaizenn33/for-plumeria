$(document).ready(function () {
    // Center the iframe on the page
    const $iframe = $("#musicIframe");
    const $window = $(window);
    const $loveHeart = $("#loveHeart");
    const $code = $("#code");

    function adjustDimensions() {
        $iframe.css({
            width: $loveHeart.width() * 1.0, // 100% of #loveHeart's width
            height: $loveHeart.height() * 0.6, // 60% of #loveHeart's height
        });
    }

    function centerIframe() {
        const iframeWidth = $iframe.width();
        const windowWidth = $window.width();

        $iframe.css({
            position: "absolute",
            left: (windowWidth - iframeWidth) / 2, // Center horizontally
            top: (windowHeight - iframeHeight) / 3,
        });
    }

    // Adjust dimensions and center iframe on window resize
    $window.resize(function () {
        adjustDimensions();
        centerIframe();
    });

    // Initial adjustments
    adjustDimensions();
    centerIframe();

    // Apply typewriter effect to the #code element
    $code.typewriter();
});

$(document).ready(function () {
    const $iframes = $(".musicIframe");
    let currentIndex = 0;

    // Show the first iframe initially
    function initializeIframes() {
        $iframes.hide(); // Hide all iframes
        $iframes.eq(currentIndex).show(); // Show the first iframe
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

    // Initialize the iframes
    initializeIframes();
});