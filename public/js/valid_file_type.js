const popup = document.getElementById("popup");
const blur = document.getElementById("blur");

function openPopup() {
    popup.classList.add("open_popup");
    blur.classList.add("active");
}

function closePopup() {
    popup.classList.remove("open_popup");
    blur.classList.remove("active");
}

function file_mp3_validation() {
    var file_mp3_input = document.getElementById('music');
    if (file_mp3_input == null){
        return false;
    };
    var file_mp3_path = file_mp3_input.value;
 
    // Allowing file type
    var allowed_mp3_file =
/(\.mp3)$/i;
     
    if (!allowed_mp3_file.exec(file_mp3_path)) {
        openPopup();
        file_mp3_input.value = '';
        setTimeout(() => {
            closePopup();
        }, 4000);
        return false;
    }
    
}

function file_thumbnail_validation() {
    var file_thumbnail_input = document.getElementById('thumbnail');
    var file_thumbnail_path = file_thumbnail_input.value;
 
    // Allowing file type
    var allowed_thumbnail_file =
/(\.png|\.jpg|\.jpeg)$/i;
     
    if (!allowed_thumbnail_file.exec(file_thumbnail_path)) {
        openPopup();
        file_thumbnail_input.value = '';
        setTimeout(() => {
            closePopup();
        }, 4000);
        return false;
    }
}

document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();
    openPopup();
    setTimeout(() => {
        closePopup();
    }, 4000);
})



const successful_popup = document.getElementById("successful_popup");


function open_successful_popup() {
    successful_popup.classList.add("open_popup");
    blur.classList.add("active");
}

function close_successful_popup() {
    successful_popup.classList.remove("open_popup");
    blur.classList.remove("active");
}

document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();
    open_successful_popup();
    setTimeout(() => {
        close_successful_popup();
    }, 4000);
})

