document.getElementById('magicButton').addEventListener("click", function() {
    if (document.getElementById('magicButton').innerText === "TEE IMET.") {
        document.getElementById('magicButton').innerText = "IME ON TEHTUD."
    } else {
        document.getElementById('magicButton').innerText = "TEE IMET."
    }
});