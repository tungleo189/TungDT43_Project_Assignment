var data_of_information = [
    {
        first_name: "Tung",
        last_name: "Dinh",
        gender: "Male",
        telephone: "01234995999",
        email: "tunghe@gmail.com",
        place: "Asia",
        hobbies: ["Sport"],
        description: "Goodness boy"
    },
    {
        first_name: "hieu",
        last_name: "Nguyen",
        gender: "Male",
        telephone: "0456789120",
        email: "hieuhe@gmail.com",
        place: "Asia",
        hobbies: ["Swimming"],
        description: "Handsome boy"
    },
    {
        first_name: "Minh",
        last_name: "Dang",
        gender: "Male",
        telephone: "0987654321",
        email: "minhhe@gmail.com",
        place: "Australia",
        hobbies: ["Dance"],
        description: "Baby boy"
    },
    {
        first_name: "Tai",
        last_name: "Truong",
        gender: "Male",
        telephone: "01234567890",
        email: "taihe@gmail.com",
        place: "America",
        hobbies: ["Cooking", "Sport"],
        description: "Play boy"
    },

]
function toDisplay(data) {
    var data_to_show = "";
    data.forEach((element, index) => {
        data_to_show += "<tr id =" + index + "></tr>"
    });
    document.getElementById('toShow').innerHTML = data_to_show;
    data.forEach((element, index) => {

        document.getElementById(index).innerHTML = "<td>" + element.first_name + "</td>" +
            "<td>" + element.last_name + "</td>" +
            "<td>" + element.gender + "</td>" +
            "<td>" + element.telephone + "</td>" +
            "<td>" + element.email + "</td>" +
            "<td>" + element.place + "</td>" +
            "<td>" + element.hobbies + "</td>" +
            "<td>" + element.description + "</td>";
    });
}

toDisplay(data_of_information);

document.getElementById('button-search').addEventListener('click', toSearch)
var array_to_remem = [];
function toSearch() {

    var get_search = document.getElementById('search-first-name').value;
    data_of_information.forEach(element => {
        var all_of_data = element.first_name + element.last_name + element.gender + element.telephone 
                            + element.email + element.place + element.hobbies + element.description +"";
        if(all_of_data.includes(get_search)){
            array_to_remem.push(element);
        }               
    });
    toDisplay(array_to_remem);
    array_to_remem = [];
}



