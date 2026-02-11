function getCookie(name) { 
    let cookies = document.cookie.split(";"); 
 
    for (let i = 0; i < cookies.length; i++) { 
        let c = cookies[i].trim(); 
        if (c.startsWith(name + "=")) { 
            return c.substring(name.length + 1); 
        } 
    } 
    return null; 
} 
 
let lastPage = getCookie("last_page"); 
let visitTime = getCookie("visit_time"); 
 
if (lastPage && visitTime) { 
    document.getElementById("activity").innerHTML = 
        "Last Visited Page: <b>" + lastPage + "</b><br>" + 
        "Visit Time: <b>" + visitTime + "</b>"; 
}