// let button = document.querySelector("input")
// button.addEventListener("input",
// function(e){
//     console.log(e.target.value)
// })

// function hi(){
//     alert("hi");
// }

// 예제12_3_5
document.addEventListener("DOMContentLoaded",
    function (e) {
        let button = document.querySelector("input")
        button.addEventListener("input",
            function (e) {
                console.log(e.target.value)
            })
    })

function hi() {
    alert("hi")
}