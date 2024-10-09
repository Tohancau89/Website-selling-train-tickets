let total = 0;

    function updateTotal(amount) {
        total += amount;
        document.getElementById("total-amount").innerText = total.toLocaleString();

        // Enable continue button and change its color
        const continueBtn = document.getElementById("continue-btn");
        continueBtn.classList.remove("disabled");
        continueBtn.classList.add("enabled");

        // Enable button click
        continueBtn.onclick = function() {
            window.location.href = "checkout.html";
        };
    }