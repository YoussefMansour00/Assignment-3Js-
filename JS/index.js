/*     
   <div class="contentOfBooks mt-4">
            <ul class="list-unstyled d-flex justify-content-around">
                <li>Index</li>
                <li>Website Name</li>
                <li>Visit</li>
                <li>Delete</li>
            </ul>
        </div>*/
var BookmarkName = document.getElementById('BookmarkName');
var WebsiteURL = document.getElementById('WebsiteURL');
var btnSubmit = document.getElementById('btnSubmit');
var btnDelete = document.getElementById('btnDelete');
//======================================================

var bookmarks = [];
if(localStorage.getItem('allBookmarks')){
    bookmarks = JSON.parse(localStorage.getItem('allBookmarks') )
    displayBookmarks()
}

function getvalues(){
    object = {
        BookmarkName: BookmarkName.value ,
        WebsiteURL: WebsiteURL.value
    }
    bookmarks.push(object);
    localStorage.setItem('allBookmarks',JSON.stringify(bookmarks));
    clearInputes()
    displayBookmarks()
}
function clearInputes(){
    BookmarkName.value = null;
    WebsiteURL.value = null;
}
function deleteProduct(index){
    bookmarks.splice(index,1);
    localStorage.setItem('allBookmarks',JSON.stringify(bookmarks));
    displayBookmarks()
}
function displayBookmarks(){
    var cartona = ``;
    for(var i=0; i<bookmarks.length; i++){
        cartona += 

        `        <div class="row mt-4 repeatedPart">

            <div class="col-3 text-center">
                ${i+1}
            </div>
            <div class="col-3 text-center">
                ${bookmarks[i].BookmarkName}
            </div>
            <div class="col-3 text-center">
                <a target="_blank" href = "${bookmarks[i].WebsiteURL}">Visit</a>
            </div>
            <div class="col-3">
                <button class="rounded rounded-3" id="btnDelete" onclick="deleteProduct(${i})">Delete</button>
            </div>


        </div>`




        // `<div class="contentOfBooks mt-4">
        //     <ul class="list-unstyled d-flex justify-content-around">
        //         <li>${i+1}</li>
        //         <li>${bookmarks[i].BookmarkName}</li>
        //         <li><a target="_blank" href = "${bookmarks[i].WebsiteURL}">Visit</a></li>
        //         <li><button class="rounded rounded-3" id="btnDelete" onclick="deleteProduct(${i})">Delete</button></li>
        //     </ul>
        // </div>`
    }
    document.getElementById('MainPartOfProject').innerHTML = cartona;
}
