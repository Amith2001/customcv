function generateCV()
{
    let nameField=document.getElementById("nameField").value;
    let namet=document.getElementById("namet");
    namet.innerHTML=nameField;

   document.getElementById("namet2").innerHTML=nameField;

   document.getElementById("contactt").innerHTML=document.getElementById("contactField").value;

   document.getElementById("addresst").innerHTML=document.getElementById("addressField").value;

   document.getElementById("linkedint").innerHTML=document.getElementById("linkedinField").value;

   document.getElementById("emailt").innerHTML=document.getElementById("emailField").value;

   document.getElementById("objectivet").innerHTML=document.getElementById("objectiveField").value;
   
   document.getElementById("wet").innerHTML=document.getElementById("weField").value;

   document.getElementById("tent").innerHTML=document.getElementById("tenthField").value;

   document.getElementById("put").innerHTML=document.getElementById("puField").value;

   document.getElementById("sgpat").innerHTML=document.getElementById("sgpaField").value;

   document.getElementById("ost").innerHTML=document.getElementById("osField").value;

   document.getElementById("puct").innerHTML=document.getElementById("pucField").value;

   document.getElementById("schoolt").innerHTML=document.getElementById("schoolField").value;

   document.getElementById("enggt").innerHTML=document.getElementById("enggField").value;

   document.getElementById('cv-form').style.display='none';

   document.getElementById('cv-template').style.display='block';

}

function printCV()
{
    window.print();
    return false;
}

window.onload = function() {

    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');


    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                fileDisplayArea.innerHTML = "";

                var img = new Image();
                img.src = reader.result;

                fileDisplayArea.appendChild(img);
            }

            reader.readAsDataURL(file); 
        } else {
            fileDisplayArea.innerHTML = "File not supported!"
        }
    });

}

