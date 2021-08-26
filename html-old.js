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
        }

        .row {
            display: flex;
            justify-content: space-between;
            margin: auto 2%;

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

                </div>

                <div class="img-box">

                </div>
            </div>

            <div class="section">
                <div class="row">
                    <p class="data">
                        <b>APPLICANT FULL NAME</b><br>
                        SEGBORNYA KODZO ADRANYI
                    </p>

                    <p class="data">
                        <b>APPLICANT FULL NAME</b><br>
                        SEGBORNYA KODZO ADRANYI
                    </p>
                </div>
                <div class="separator"></div>
                <div class="row">
                    <p class="data">
                        <b>TYPE</b><br>
                        OFFICERS
                    </p>
                    <p class="data">
                        <b>REFERENCE #</b><br>
                        GIS-602568-21
                    </p>
                    <p class="data">
                        <b>SPECIAL</b><br>
                        YES
                    </p>
                    <p class="data">
                        <b>STATUS</b><br>
                        SELECTED
                    </p>
                </div>
            </div>

        </div>

        <!-- BIO DATA -->
        <div class="section">
            <div class="row">
                <p class="data">
                    <b>FIRST NAME</b><br>
                    SAMUEL
                </p>
                <p class="data">
                    <b>LAST NAME</b><br>
                    ADRANYI
                </p>
                <p class="data">
                    <b>OTHER NAMES</b><br>
                    SEGBORNYA KODZO
                </p>
                <p class="data">
                    <b>HEIGHT (ft)</b><br>
                    5.7
                </p>
                <p class="data">
                    <b>WEIGHT (Kg)</b><br>
                    120
                </p>
            </div>
            <div class="separator"></div>
            <div class="row">
                <p class="data">
                    <b>DATE OF BIRTH</b><br>
                    00-00-0000
                </p>
                <p class="data">
                    <b>PLACE OF BIRTH</b><br>
                    ACCRA
                </p>
                <p class="data">
                    <b>REGION</b><br>
                    GREATER ACCRA
                </p>
                <p class="data">
                    <b>DISTRICT</b><br>
                    AIRPORT
                </p>
                <p class="data">
                    <b>HOMETOWN</b><br>
                    ANLOGA
                </p>
            </div>
            <div class="separator"></div>
            <div class="row">
                <p class="data">
                    <b>GENDER</b><br>
                    MALE
                </p>
                <p class="data">
                    <b>MARITAL STATUS</b><br>
                    MARRIED
                </p>
                <p class="data">
                    <b>BIRTH CERT NO.</b><br>
                    123456795400
                </p>
                <p class="data">
                    <b>EMAIL</b><br>
                    SADRANYI@GMAIL.COM
                </p>
            </div>
            <div class="separator"></div>
            <div class="row">
                <p class="data">
                    <b>DIGITAL ADDRESS</b><br>
                    GA-000-0000
                </p>
                <p class="data">
                    <b>RESIDENTIAL ADDRESS</b><br>
                    No. 0001 KOFI MENSAH STREET, ACCRA
                </p>
                <p class="data">
                    <b>POSTAL ADDRESS</b><br>
                    BOX 000 ACCRA NORTH
                </p>
            </div>
        </div>

        <!-- BECE -->
        <div class="section">
            <div class="row">
                <p class="data">
                    <b>BECE SCHOOL NAME</b><br>
                    ENGLEBERT INT. SCHOOL - AIRPORT
                </p>
                <p class="data">
                    <b>INDEX NUMBER</b><br>
                    101253007
                </p>
                <p class="data">
                    <b>YEAR COMPLETED</b><br>
                    2000
                </p>
                <p class="data">
                    <b>AGGREGATE</b><br>
                    6
                </p>
            </div>
            <div class="separator"></div>
            <div class="row">
                <p class="data">
                    <b>ENGLISH LANGUAGE</b><br>
                    GRADE 1
                </p>
                <p class="data">
                    <b>MATHEMATICS</b><br>
                    GRADE 1
                </p>
                <p class="data">
                    <b>INTEGRATED SCIENCE</b><br>
                    GRADE 1
                </p>
                <p class="data">
                    <b>PRE TECHNICAL SKILLS</b><br>
                    GRADE 1
                </p>
            </div>
            <div class="separator"></div>
            <div class="row">
                <p class="data">
                    <b>SOCIAL STUDIES</b><br>
                    GRADE 1
                </p>
                <p class="data">
                    <b>VOCATIONAL SKILLS</b><br>
                    GRADE 1
                </p>
            </div>
        </div>

        <!-- WASSCE -->
        <div class="section">
            <div class="row">
                <p class="data">
                    <b>SSCE/WASSCE SCHOOL NAME</b><br>
                    ENGLEBERT INT. SCHOOL - AIRPORT
                </p>
                <p class="data">
                    <b>INDEX NUMBER</b><br>
                    101253007
                </p>
                <p class="data">
                    <b>YEAR COMPLETED</b><br>
                    2000
                </p>
                <p class="data">
                    <b>AGGREGATE</b><br>
                    6
                </p>
            </div>
            <div class="separator"></div>
            <div class="row">
                <p class="data">
                    <b>ENGLISH LANGUAGE</b><br>
                    GRADE A
                </p>
                <p class="data">
                    <b>MATHEMATICS</b><br>
                    GRADE A
                </p>
                <p class="data">
                    <b>INTEGRATED SCIENCE</b><br>
                    GRADE A
                </p>
                <p class="data">
                    <b>TECHNICAL DRAWING</b><br>
                    GRADE A
                </p>
            </div>
            <div class="separator"></div>
            <div class="row">
                <p class="data">
                    <b>SOCIAL STUDIES</b><br>
                    GRADE A
                </p>
                <p class="data">
                    <b>ELECTIVE MATHEMATICS</b><br>
                    GRADE A
                </p>
            </div>
        </div>

        <!-- TERTIARY -->
        <div class="section">
            <div class="row">
                <p class="data">
                    <b>TERTIARY INSTITUTION</b><br>
                    UNIVERSITY OF GHANA
                </p>
                <p class="data">
                    <b>INDEX NUMBER</b><br>
                    101256404
                </p>
                <p class="data">
                    <b>YEAR COMPLETED</b><br>
                    2008
                </p>
            </div>
            <div class="separator"></div>
            <div class="row">
                <p class="data">
                    <b>PROGRAMME</b><br>
                    BSC. COMPUTER SCIENCE
                </p>
                <p class="data">
                    <b>CLASS</b><br>
                    2ND UPPER
                </p>
            </div>
        </div>

        <!-- TERTIARY -->
        <div class="section">
            <div class="row">
                <p class="data">
                    <b>INSTITUTION NAME</b><br>
                    NIIT GHANA
                </p>
                <p class="data">
                    <b>REF. NUMBER</b><br>
                    101256404
                </p>
                <p class="data">
                    <b>PROGRAM/CERTIFICATION</b><br>
                    DIPLOMA IN SOFTWARE ENGINEERING
                </p>
                <p class="data">
                    <b>DURATION</b><br>
                    2 YEARS
                </p>
            </div>
        </div>

        <!-- PARENT INFO -->
        <div class="section">
            <div class="row">
                <p class="data">
                    <b>FATHERS FULL NAME</b><br>
                    SAMUEL KODZO ADRANYI SNR.
                </p>
                <p class="data">
                    <b>PHONE NUMBER</b><br>
                    0200000000
                </p>
                <p class="data">
                    <b>ALIVE</b><br>
                    YES
                </p>
            </div>

            <div class="row">
                <p class="data">
                    <b>MOTHERS FULL NAME</b><br>
                    VICENTIA NYTEFE SEBUAVA
                </p>
                <p class="data">
                    <b>PHONE NUMBER</b><br>
                    0200000000
                </p>
                <p class="data">
                    <b>ALIVE</b><br>
                    YES
                </p>
            </div>

            <div class="row">
                <p class="data">
                    <b>GUARDIAN NAME</b><br>
                    KOFI MENSAH
                </p>
                <p class="data">
                    <b>PHONE NUMBER</b><br>
                    0200000000
                </p>
                <p class="data">
                    <b>DIGITAL ADDRESS</b><br>
                    GA-000-0000
                </p>
            </div>

            <div class="row">
                <p class="data">
                    <b>GUARDIAN NAME</b><br>
                    KOFI MENSAH
                </p>
                <p class="data">
                    <b>PHONE NUMBER</b><br>
                    0200000000
                </p>
                <p class="data">
                    <b>DIGITAL ADDRESS</b><br>
                    GA-000-0000
                </p>
            </div>
        </div>

        <br><br>
        <!-- PARENT INFO -->
        <div class="section new-section">
            <div class="row">
                <p class="data">
                    <b>FATHERS FULL NAME</b><br>
                    SAMUEL KODZO ADRANYI SNR.
                </p>
                <p class="data">
                    <b>PHONE NUMBER</b><br>
                    0200000000
                </p>
                <p class="data">
                    <b>ALIVE</b><br>
                    YES
                </p>
            </div>

            <div class="row">
                <p class="data">
                    <b>MOTHERS FULL NAME</b><br>
                    VICENTIA NYTEFE SEBUAVA
                </p>
                <p class="data">
                    <b>PHONE NUMBER</b><br>
                    0200000000
                </p>
                <p class="data">
                    <b>ALIVE</b><br>
                    YES
                </p>
            </div>

            <div class="row">
                <p class="data">
                    <b>GUARDIAN NAME</b><br>
                    KOFI MENSAH
                </p>
                <p class="data">
                    <b>PHONE NUMBER</b><br>
                    0200000000
                </p>
                <p class="data">
                    <b>DIGITAL ADDRESS</b><br>
                    GA-000-0000
                </p>
            </div>

            <div class="row">
                <p class="data">
                    <b>GUARDIAN NAME</b><br>
                    KOFI MENSAH
                </p>
                <p class="data">
                    <b>PHONE NUMBER</b><br>
                    0200000000
                </p>
                <p class="data">
                    <b>DIGITAL ADDRESS</b><br>
                    GA-000-0000
                </p>
            </div>
        </div>
    </div>
</body>

</html>
`;
