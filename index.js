document.addEventListener("DOMContentLoaded", function() {
    let grid_number = 16;
    grid_number = window.prompt("set grid lines (currently 16x16)")
    const container = document.querySelector(".container")
    for(i=0;i<grid_number;i++){
        const div1 = document.createElement('div')
        //div1.style.cssText = "border: 2px solid black";
        div1.classList.add('column')
        for(j=0;j<grid_number;j++){
            const div2 = document.createElement('div')
            //div2.style.cssText = "border: 2px solid black";
            div2.classList.add('row')
            div1.appendChild(div2)
        }
        container.appendChild(div1)
    }
    

})

    
    






