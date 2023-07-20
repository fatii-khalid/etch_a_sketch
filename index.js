document.addEventListener("DOMContentLoaded", function() {
    let grid_number = 16;
    let a=0,b=0,c=0;
    const container = document.querySelector(".container")
    function sketch_pad(){
        for(i=0;i<grid_number;i++){
            const div1 = document.createElement('div')
            //div1.style.cssText = "border: 2px solid black";
            div1.classList.add('column')
            for(j=0;j<grid_number;j++){
                const div2 = document.createElement('div')
                //div2.style.cssText = "border: 2px solid black";
                div2.classList.add('row')
                div1.appendChild(div2)
                div2.addEventListener('mouseover', () => {
                    div2.style.cssText = `background-color: rgb(${a},${b},${c})`
                    rancolor()
                    green()
                    red()
                    purple()
                    pink()
                    blue()
                    orange()
                    yellow()
                    black()
                    any()
                })
            }
            container.appendChild(div1)
        }
    }
    sketch_pad();
    document.querySelector('.myButton').addEventListener('click', () => {
        grid_number = window.prompt("set grid lines, must be less than 90(currently 16x16)")
        container.innerHTML = ''
        if(grid_number<=90){
            sketch_pad();
        }
        else
        {
            window.alert("entered value more than expected")
        }
        
    })
    function rancolor(){document.querySelector('.color').addEventListener('click', () => {

        a = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        c = Math.floor(Math.random() * 255);        
    })}
    function green(){document.querySelector('.color1').addEventListener('click', () => {
        a = 31
        b = 145
        c = 5
    })}
    function red(){document.querySelector('.color2').addEventListener('click', () => {
        a = 204
        b = 43
        c = 43
    })}
    function purple(){document.querySelector('.color3').addEventListener('click', () => {
        a = 232
        b = 100
        c = 210
    })}
    function pink(){document.querySelector('.color4').addEventListener('click', () => {
        a = 221
        b = 78
        c = 133
    })}
    function blue(){document.querySelector('.color5').addEventListener('click', () => {
        a = 100
        b = 181
        c = 232
    })}
    function orange(){document.querySelector('.color6').addEventListener('click', () => {
        a = 226
        b = 95
        c = 62
    })}
    function yellow(){document.querySelector('.color7').addEventListener('click', () => {
        a = 233
        b = 193
        c = 47
    })}
    function black(){document.querySelector('.color8').addEventListener('click', () => {
        a = 37
        b = 37
        c = 37
    })}
    function any(){document.querySelector('.any').addEventListener('click', () => {
        const input = document.querySelector('.myInput').value
        const arr = input.split(',')
        a = arr[0]
        b = arr[1]
        c = arr[2]
    })}
    const lbutton = document.querySelector('.any')
    lbutton.addEventListener('mouseover',()=>{
        const input = document.querySelector('.myInput').value
        const arr = input.split(',')
        a = arr[0]
        b = arr[1]
        c = arr[2]
        lbutton.style.cssText = `background: rgb(${a}, ${b}, ${c});`
    })
    lbutton.addEventListener('mouseout',()=>{
        lbutton.style.cssText = 'background: white);'
    })
})

    






