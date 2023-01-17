const myForm=document.querySelector('form');
const inputs=document.querySelectorAll('input');
const required=["name","email","message_"];

myForm.addEventListener("submit",formValidation);

function formValidation(e) {
    console.log("dani")
    e.preventDefault();
    //let data={};
    let error=false;
    inputs.forEach(function (el) {
        let temp = el.getAttribute("id");
        if (temp != null) {
            if (temp === "name") {
                let exp = /[A-Za-z]+$/;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "must be valid", temp);
                    error = true;
                }
                else {
                    let text = el.nextElementSibling;
                    text.innerHTML = '';
                }
            }
            if (temp === "email") {
                let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "must be valid", temp);
                    error = true;
                }
                else {
                    let text = el.nextElementSibling;
                    text.innerHTML = '';
                }
            }
            if (el.value.length === 0 && required.includes(temp)) {
              addError(el, "Required Field", temp);
              error = true;
            } else {
              let text = el.nextElementSibling;
              text.innerHTML = "";
            }
        }
    })
    if (!error) {
        let succss = document.createElement('div');
        let set = document.querySelector(".submit_button");
        let section2 = document.querySelector(".sectionform");
        let section = document.querySelector(".form_container");
        section2.insertBefore(succss,section)
        succss.textContent="Registerd Successfully!";
        succss.style.margin=" ";
        succss.style.backgroundColor = "green";
        succss.style.padding = "1vw";
        succss.style.color = "white"; 
        Array.prototype.forEach.call(section.querySelectorAll("input"), inp => {
            inp.addEventListener("focus", () => succss.style.display = "none")
        })

    }
}
function addError(el ,message,fieldName) {
    let errorText=el.nextElementSibling;
    errorText.innerHTML=fieldName + " " + message;
    errorText.style.color="red";
    el.focus();
}
