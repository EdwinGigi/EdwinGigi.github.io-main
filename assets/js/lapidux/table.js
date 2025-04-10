$(document).ready(function() {
    
    var table;

    // for (var i = 0; i < testData.length; i++) {
    //     testData[i].push("");
    // }
    $(document).ready(function() {
        table = $('#table_id').DataTable({
            data: testData,
            columns: [
                { data: 'ranking' },
                { data: 'country' },
                { data: 'ping' },
                { data: 'ip' },
                { data: 'port' },
                { "defaultContent": "<button class=\"btn btn-primary\">Copy</button>" }
            ]
        });
    });

    $('#table_id').on('click','button', function(){
        var data = table.row($(this).parents('tr')).data();
        console.log(data);
        copyContent = data['ip'] + ":" + String(data['port']);
        navigator.clipboard.writeText(copyContent);
    });
});