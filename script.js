document.querySelector("#text").addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      submit();
    }
})
vowels = ["a","e","i","o","u","ă","î","â","A","E","I","O","U","Ă","Î","Â"];
a = 0
let string = "";
const submit = function(){
    let text = document.querySelector("#text").value;
    for(i of text){
        for(k of vowels){
            if(i === k){
                a++;
                break;
            }
        }
    }
    document.querySelector("#output").innerHTML = "Result: " + a + " vowels";
}