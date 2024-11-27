function show (item){
        var imgLink = document.getElementById("img"+item).src
        // set the selected image link
        document.getElementById('showImg').src = imgLink
        // activating show div
        document.getElementById('showContainer').style.display="flex"
        //activating btns
        document.getElementById('btns').style.display= "block"
}
function esc(){
        // deactivating show div
        document.getElementById('showContainer').style.display="none"
        // deactivating btns
        document.getElementById('btns').style.display= "none"
}
function nextImg() {
        var imgLink = document.getElementById('showImg').src
        var itemNumber = Number(imgLink.at(-6))
        if( itemNumber == 6 ){
                show(1)
        }else{
                show(itemNumber +1)
        }
}
function prevImg() {
        var imgLink = document.getElementById('showImg').src
        var itemNumber = Number(imgLink.at(-6))
        if( itemNumber == 1 ){
                show(6)
        }else{
                show(itemNumber - 1)
        }
}
// creating keyboard shortcuts
document.onkeydown = function(e){
        var keyPress = e.key
        switch (keyPress) {
                case 'Escape':
                        esc()
                        break;
                case 'ArrowRight':
                        nextImg()
                        break;
                case 'ArrowLeft':
                        prevImg()
                        break
        }
}