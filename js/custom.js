const data = [{   
    "sNo": 1,
    "project": "Template 101",
    "progress": "47%",
    "description": "Template 101 decsription: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in."
}, 
{
    "sNo": 2,
    "project": "Template 174",
    "progress": "27%",
    "description": "Template 174 decsription: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in."
},
{
    "sNo": 3,
    "project": "Template 256",
    "progress": "71%",
    "description": "Template 256 decsription: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in."
},
{
    "sNo": 4,
    "project": "Template 345",
    "progress": "50%",
    "description": "Template 345 decsription: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in."
}];

$(document).ready(function() {
    const tableBody = document.getElementById("menu1TableBody");
    data.forEach(function(object, index) {
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>" + object.sNo + "</td>" + "<td>" + object.project + "</td>" + "<td>" + object.progress + "</td>" +
        "<td><a class='view-more-link' data-toggle='collapse' aria-expanded='false' aria-controls=descRow" + index + " href=#descRow" + index + ">" +
        "View More v" +
        "<i class='fa fa-angle-down' aria-hidden='true'></i></a></td>";
        tableBody.appendChild(tr);
        var descRow = document.createElement("tr");
        descRow.id = "descRow" + index;
        descRow.className = "collapse";
        descRow.innerHTML = "<td colspan='4'>" + object.description + "</td>";
        tableBody.appendChild(descRow);
    })
});