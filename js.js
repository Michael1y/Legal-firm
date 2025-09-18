document.addEventListener("DOMContentLoaded", function () {
    const menue=document.getElementById("menue");
    const sideBar=document.getElementById("side_bar");
    const contact = document.getElementById("contact");
    let  is_open=false;
    let contact_open=false;

    menue.onclick=function () {
    if(is_open === false) {
        sideBar.style.display = "block";
        is_open = true;
    }else {
        sideBar.style.display = "none";
        document.getElementById("contact_detail").style.height = "0px";
        contact_open=false;
        is_open = false;
    }
        
    };
    contact.onclick =function () {
        if(contact_open === false) {
            document.getElementById("contact_detail").style.height = "150px";
            contact_open = true;
        }else {
            document.getElementById("contact_detail").style.height = "0px";
            contact_open=false;
        }
    }
});


    
