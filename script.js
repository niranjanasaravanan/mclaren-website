// Models
document.getElementById("modelsBtn").onclick = () => {
    document.getElementById("models").scrollIntoView({ behavior: "smooth" });
};

// Bookings
document.getElementById("bookingsBtn").onclick = () => {
    document.getElementById("bookings").scrollIntoView({ behavior: "smooth" });
};

// Racing
document.getElementById("racingBtn").onclick = () => {
    document.getElementById("racing").scrollIntoView({ behavior: "smooth" });
};

// Explore
document.getElementById("exploreBtn").onclick = () => {
    document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
};

//log in

function bookNow() {
    alert("Booking Successful ✅");
}

function loginUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234") {
        alert("Login Successful ✅");
    } else {
        alert("Invalid Username or Password ❌");
    }
}