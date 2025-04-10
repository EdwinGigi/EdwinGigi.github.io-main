function splitLines(t) { 
    return t.split(/\r\n|\r|\n/); 
}

function uploadIp() {
    var input = $("#inputIps").val();
    var type = $("#inputType").val();
    var data = {
        "Proxies": input,
        "ProxyType": type
    };
    input = splitLines(input);
    console.log(input);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://95.154.194.76:8080/",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        "processData": false,
        "data": data
        //"data": "{\n\t\"Proxies\":[\"191.232.170.36:80\", \"46.35.183.214:8080\", \"\"],\n\t\"ProxyType\": \"Socks4\" \n}"
    }
      
    $.ajax(settings).done(function(data, status, jqXHR) {
        console.log(status);
        console.log(data);
        $("#outputIps").val(data);
    });
    // $.ajax({
    //     type: "POST",
    //     header: "Access-Control-Allow-Origin: *",
    //     url: "http://95.154.194.76:8080/",
    //     data: input,
    // }).done(function (data, status, jqXHR) {
    //     console.log(status);
    //     console.log(data);
    // }).fail(function (jqXHR,status,err) {
    //     console.log("something went wrong");
    // });
}