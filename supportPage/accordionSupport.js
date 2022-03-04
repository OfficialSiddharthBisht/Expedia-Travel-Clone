let acc = document.getElementsByClassName("accordion");
let i;
for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");

        // toggle between hiding and showing the active panel
        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        }
    });
}