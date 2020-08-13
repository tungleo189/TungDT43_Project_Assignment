document.getElementById('register').addEventListener('click', check_require);

function check_require() {
    
    if(!document.getElementById('first-name').value.match(/^([^0-9]*)$/) || document.getElementById('first-name').value.length>20 || document.getElementById('first-name').value==""){
        document.getElementById('first-error').innerHTML= "Invalid Format"
    }
    else{
        document.getElementById('first-error').innerHTML= ""
    }
    if(!document.getElementById('last-name').value.match(/^([^0-9]*)$/) || document.getElementById('first-name').value > 20 || document.getElementById('first-name').value==""){
        document.getElementById('last-error').innerHTML= "Invalid Format"
    }
    else{
        document.getElementById('last-error').innerHTML= ""
    }
    if(!document.getElementById('telephone').value.match(/^([^a-zA-Z]*)$/) || document.getElementById('telephone').value.length>11){
        document.getElementById('tele-error').innerHTML= "Invalid Format"
    }
    else{
        document.getElementById('tele-error').innerHTML= ""
    }
    if(!document.getElementById('email').value.match(/^\S+@\S+$/)){
        document.getElementById('email-error').innerHTML= "Invalid Format"
    }
    else{
        document.getElementById('email-error').innerHTML= ""
    }
    if(document.getElementById('description').value.length>200){
        document.getElementById('des-error').innerHTML= "Invalid Format"
    }
    else{
        document.getElementById('des-error').innerHTML= ""
    }
}