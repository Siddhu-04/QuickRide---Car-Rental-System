document.getElementById("userBtn").addEventListener("click", function() {
    window.location.href = "../Login/login.html"; // Use relative path
});

/*document.getElementById("ownerBtn").addEventListener("click", function() {
    window.location.href = ".../Login/login.html"; // Use relative path
});*/

document.getElementById('ownerBtn').onclick=function(){
    window.location.href="../Login/login.html"
}