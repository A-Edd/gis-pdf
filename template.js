module.exports.html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Document</title>
    <style>
        body {
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }

        h1 {
            text-align: center;
            font-size: 18px;
        }

        #page1-div {
            /* margin: 50px; */
            padding: 30px;
        }

        .section {
            background-color: #f5f6f6;
            border-radius: 10px;
            color: #6d6f8c;
            margin-bottom: 15px;
            border: 2px solid #e5e6e6;
        }

        .data {
            font-size: 13px;
            width: 50%;
        }

        .row {
            display: flex;
            justify-content: space-between;
            margin: auto 2%;
        }

        .col-5 {
            display: flex;
            justify-content: start !important;
            margin: auto 2%;
        }

        .col-5 .data {
            width: 25%;
        }

        .col-4 {
            display: flex;
            justify-content: start !important;
            margin: auto 2%;
        }

        .col-4 .data {
            width: 219.6px;
        }

        .col-3 {
            display: flex;
            justify-content: start !important;
            margin: auto 2%;
        }

        .col-3 .data {
            width: 33%;
        }

        .first-row {
            display: flex;
            justify-content: space-between;
        }

        .img-box-container {
            display: flex;
            justify-content: space-between;
            width: 28%;
            /* margin: 8px auto 8px 0px; */
        }

        .img-box {
            height: 115px;
            width: 115px;
            border: 2px solid #e5e6e6;
            border-radius: 10px;
        }

        .first-row .section {
            width: 70%;
        }

        .separator {
            width: 96%;
            border: 1px solid #e5e6e6;
            margin: auto 2%;
        }

        .header {}

        .new-section {
            margin-top: 8.6%;
        }
    </style>
</head>

<body>

    <div style="height: 10px; background-color: green; margin-top: 0px; width: 960px;"></div>
    <div id="page1-div" style="width:919px;height:1289px;">
        <div class="header">
            <img src="" alt="">
            <h1 style="border-bottom: 1px solid green;">
                GHANA IMMIGRATION SERVICE (GIS)<br>
                2021 E-RECRUITMENT APPLICATION CONFIRMATION
            </h1>
        </div>

        <div class="first-row">
            <div class="img-box-container">
                <div class="img-box">
                    <img src="#" alt="Passport Pic">
                </div>

                <div class="img-box">
                    <img src="#" alt="QR-Code">
                </div>
            </div>

            __shortInfo

        </div>

        <!-- BIO DATA -->
        __bio

        <!-- BECE -->
        __bece

        <!-- WASSCE -->
        __wassce

        <!-- TERTIARY -->
        __tertiary

        <!-- INSTITUTION -->
        __certificate

        <!-- PARENT INFO -->
        __parents
        <br><br><br><br>

        <div class="new-section">
            __guardians
            __other
        </div>



    </div>
</body>

</html>
`;
