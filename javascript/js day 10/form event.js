let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    //let user= document.querySelector("#user");
    //let pass= document.querySelector("#pass");
    let user= this.elements[0];
    let pass= this.elements[1];
    console.dir(user.value);
    console.log(pass.value);
    alert(`Hii, ${user.value} your password is set to  ${pass.value}`);
});