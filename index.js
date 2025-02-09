
$(document).ready(function() {
    const envelope = $("#envelope");
    const btnOpen = $("#open");
    const btnReset = $("#reset");
    const prompt = $("#bebe-verify");
    const envelopeWrapper = $(".envelope-wrapper");
    const resetSection = $(".reset");
    const header = $(".header");

    // initially hide main content
    envelopeWrapper.hide();
    resetSection.hide();
    header.hide();

    function toggleEnvelope(state) {
        if (state === "open") {
            envelope.addClass("open").removeClass("close");
        } else {
            envelope.addClass("close").removeClass("open");
        }
    }

    envelope.click(function() {
        toggleEnvelope("open");
    });

    btnOpen.click(function() {
        toggleEnvelope("open");
    });

    btnReset.click(function() {
        toggleEnvelope("close");
    });

    $("#yes").click(function() {
        alert("HALLO BEBE COME ON IN!");
        prompt.hide();
        envelopeWrapper.show();
        resetSection.show();
        header.show();
    });

    $("#no").click(function() {
        alert("Don't we all?");
        window.location.href = "https://media.tenor.com/qcduD9P95RgAAAAe/dog-bald-dog.png"; // redirect user to some stupid video
    });

    $("#back").click(function() {
        $(".underBox").hide();
    });
});


// animation for the envelope (open and close)
$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})