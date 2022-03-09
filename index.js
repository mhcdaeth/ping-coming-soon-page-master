var input = document.querySelector("input");
var button = document.querySelector("button");
var msg = document.querySelector(".error")

// console.log(input, button)

button.addEventListener("click", function(){
    var check = input.value === "" 
    var email = input.value.includes("@" && ".com")

    // console.log(email)

    if (check === false && email === true){
        input.classList.remove("input-error")
        msg.classList.remove("msg")
    }else{
        input.classList.add("input-error")
        msg.classList.add("msg")
    }

    setTimeout(function(){
        input.classList.remove("input-error")
        msg.classList.remove("msg")
    }, 10000)
})

var wait = innerWidth > 375

if(innerWidth > 375){
    var social = document.querySelectorAll(".social").length

    for(var i = 0; i < social; i++){
        // console.log(i)
        get(i)
    }
    
    var socials = ["facebook-f", "twitter", "instagram"]
    
    for (var i = 0; i < socials.length; i++){
    
        loops(i)
    }
    
    function loops(number){
        var pop = socials[number]
    }
    
    function get(number){
        
        document.querySelectorAll(".social")[number].addEventListener("mouseover", function(){
            var socials = ["facebook-f", "twitter", "instagram"]
            var pop = socials[number]
            var imageSourceIdentify = document.querySelectorAll(".social img")[number]
            // console.log("hoverd")
            // console.log(socials[number])
            //console.log(imageSourceIdentify.setAttribute("src", "images/social/"+ pop + "-hover.svg"))
            
            imageSourceIdentify.setAttribute("src", "images/social/"+ pop + "-hover.svg")
            
        })
    
        left(number)
    
    }
    
    
    function left(number){
        document.querySelectorAll(".social")[number].addEventListener("mouseleave", function(){
    
            var imageSourceIdentify = document.querySelectorAll(".social img")[number]
            var pop = socials[number]
            imageSourceIdentify.setAttribute("src", "images/social/"+ pop + ".svg")
    
        })
    
    
    }
    
}else{

}
