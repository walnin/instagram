// document.addEventListener("DOMContentLoaded",
//     function (e) {
//         let keydown = document.querySelector("#keydown")
//         keydown.addEventListener("keydown",
//             function (e) {
//                 console.log(e.target.value)
//             })

//         let change = document.querySelector("#change")
//         change.addEventListener("change",
//             function (e) {
//                 console.log(e.target.value)
//             })

//         let input = document.querySelector("#input")
//         input.addEventListener("input",
//             function (e) {
//                 console.log(e.target.value)
//             })

//     })

// 13_1_2.js 예제 

document.addEventListener("DOMContentLoaded",
    function (e) {
        document.addEventListener("keydown",
            function (e) {
                console.log(e.key)
                if (e.key === "q") {
                    alert("this is Q!")
                }
            })
        let keydown = document.querySelector("#keydown")
        keydown.addEventListener("keydown",
            function(e){
            console.log(e.target.value)
        })

        let change = document.querySelector("#change")
        change.addEventListener("change",
            function(e){
                console.log(e.target.value)
            })

         let input = document.querySelector("#input")
         input.addEventListener("input",
            function(e) {
                console.log(e.target.value)
            })   
        
    }
)
