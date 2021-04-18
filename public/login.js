window.onload = () => {
    document.getElementById("myForm").addEventListener("submit", (e) => {
        e.preventDefault();
        
        getAsync()
    });
};

const getAsync = () => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            
        }
    };

    xmlHttp.open("GET", "http://localhost:3000/", true);
    xmlHttp.send()
}