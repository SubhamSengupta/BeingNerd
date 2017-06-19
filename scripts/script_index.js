function changePic(){
    if(navigator.onLine)
        document.getElementById("headerlogo").style.backgroundImage = "url(./images/logo_on.png)";
    else
        document.getElementById("headerlogo").style.backgroundImage = "url(./images/logo_gif.gif)";  
}

function showFriends(){
        var element = document.getElementById("chat");
        var m = window.getComputedStyle(element).getPropertyValue("left");
        
        if(m === "450px"){
            element.style.transition = "all 0.5s ease";
            element.style.left = "15px";
            element.style.width = "200px";
            
            setTimeout(function(){
                var el = document.getElementById("friendlist");
                    el.style.transition = "all 0.5s ease";
                    el.style.top = "265px";
                    el.style.height = "330px";
                var n = document.getElementById("searchfriend");
                    n.style.visibility = "visible";
                element.style.top = "265px";
                element.style.transition = "all 0.5s ease";
                element.style.backgroundColor = "greenyellow";
                element.style.textColor = "white";
                element.style.border = "1px transparent solid";
                element.innerHTML = "Active Friends";
                document.getElementById("friendlist").style.visibility = "visible;";
                var n = document.getElementById("tf_demo");
                    n.style.visibility = "visible";
                    n.style.transition = "all 0.5s ease";
                    n.style.top = "255px";
                    n.style.height = "395px";
                var n2 = document.getElementById("searchfriend");
                    n2.style.border = "none";
                var n3 = document.getElementById("chat");
                    n3.style.border = "1px solid transparent";
                var n = document.getElementById("searchfriend");
                    n.style.visibility = "visible";
            },400);
        }
        if(m === "15px"){
            element.style.transition = "top 0.5s ease";
            element.style.top = "610px";
            var n = document.getElementById("tf_demo");
                n.style.transition = "all 0.5s ease";
                n.style.top = "600px";
                n.style.height = "0px";
                n.style.visibility = "hidden";
            var el = document.getElementById("friendlist");
                n.style.visibility = "hidden";
                el.style.transition = "all 0.5s ease";
                el.style.top = "610px";
                el.style.height = "20px";
            setTimeout(function(){
                element.style.transition = "all 0.5s ease";
                element.style.width = "90px";
                element.style.left = "450px";
                element.style.backgroundColor = "white";
                element.style.Color = "black";
                element.style.border = "1px solid transparent";
                element.style.borderBottom = "3px solid #cdbaba";
                element.innerHTML = "Go Online";
                document.getElementById("friendlist").style.visibility = "visible";
            },400);
        }
}
function showList(){
    var el = document.getElementById("friendlist");
    var m = window.getComputedStyle(el).getPropertyValue("top");
    var chat = document.getElementById("chat");
    var chatm = window.getComputedStyle(chat).getPropertyValue("left");

    if(m === "610px"){
        el.style.transition = "all 0.5s ease";
        el.style.top = "265px";
        el.style.height = "330px";
        var n = document.getElementById("searchfriend");
        n.style.visibility = "visible";
    }
    if((m === "265px") && (chatm === "450px")) {
        var n = document.getElementById("searchfriend");
        n.style.visibility = "hidden";
        el.style.transition = "all 0.5s ease";
        el.style.top = "610px";
        el.style.height = "20px";
    }
}

$("document").ready(function() {
    setInterval(changePic,1000);
});