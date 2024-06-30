
document.getElementById("sub").onclick=function(){
const username=document.getElementById("in").value;
if (username) 
document.getElementById("h1id").textContent=  `Hari Om , dear '${username}' `;
else {
    alert("Username cannot be empty. Please enter a username.");
}
const nick=window.prompt('Enter your nick name ' + username+' : ');
if (nick) 
document.getElementById("h2id").textContent=`We prefer calling you '${nick}'`;

}