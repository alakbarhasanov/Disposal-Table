$(document).ready(function () {
    $("#addNewDisposal").click(function(){
        $(".disposal-add-modal").fadeIn();
    })

    $(".disposal-modal-close").click(function () {
        $("#disposal-add-modal").fadeOut();
    });

    $(window).click(function (event) {
        if (event.target.id === "disposal-add-modal") {
            $("#disposal-add-modal").fadeOut();
        }
    });



    $(".updateİcon").click(function(){
        $(".disposal-update-modal").fadeIn();
    })


    $(".disposal-update-modal-close").click(function () {
        $("#disposal-update-modal").fadeOut();
    });


    $(window).click(function (event) {
        if (event.target.id === "disposal-update-modal") {
            $("#disposal-update-modal").fadeOut();
        }
    });

    document.getElementById("printTable").addEventListener("click", function() {
        var table = document.querySelector(".styled-table").outerHTML;
        var printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write(`
            <html>
            <head>
                <title>Cədvəli Çap Et</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                    .operations-icons {
                        display: flex;
                        justify-content: center;
                        gap: 15px;
                    }
                    .operations-icons i {
                        font-size: 20px;
                        cursor: pointer;
                    }
                    .fa-print { color: yellow; }
                    .fa-pen-to-square { color: green; }
                    .fa-trash { color: red; }
                </style>
            </head>
            <body>
                <h2>Cədvəl</h2>
                ${table}
                <script>
                    window.onload = function() {
                        window.print();
                        window.onafterprint = function() { window.close(); }
                    };
                <\/script>
            </body>
            </html>
        `);
        
        printWindow.document.close();
    });




    $(".printİcon").click(function () {
        // Yeni pəncərə açılır
        let printWindow = window.open('', '', 'width=800,height=1100');

        // Burada istədiyin HTML kodunu yazırsan
        let content = `
            <html>
            <head>
                <title>Çap Səhifəsi</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .title { text-align: center; font-size: 24px; font-weight: bold; }
                    .content { margin-top: 20px; font-size: 18px; }
                </style>
            </head>
            <body>
                <div class="title">Çap üçün səhifə</div>
                <div class="content">
                    Buraya istədiyin HTML məzmununu əlavə edə bilərsən.
                </div>
                <script>
                    window.onload = function () {
                        window.print();
                    };
                </script>
            </body>
            </html>
        `;

        // Yeni açılan pəncərəyə HTML məzmunu yazırıq
        printWindow.document.write(content);
        printWindow.document.close();
    });
    
});