const buildWaecExam = (data, type) => `
<div class="section">
<div class="row col-4">
    <p class="data">
        <b>${type.toUpperCase()} SCHOOL NAME</b><br>
        ${data.schoolName ?? "N/A"}
    </p>
    <p class="data">
        <b>INDEX NUMBER</b><br>
        ${data.indexNo ?? "N/A"}
    </p>
    <p class="data">
        <b>YEAR COMPLETED</b><br>
        ${data.year ?? "N/A"}
    </p>
    <p class="data">
        <b>AGGREGATE</b><br>
        ${data.aggregate ?? "N/A"}
    </p>
</div>
<div class="separator"></div>
<div class="row col-4">
    <p class="data">
        <b>${data.subject1 ?? "SUBJECT"}</b><br>
        ${data.subject1Grade ?? "GRADE N/A"}
    </p>
    <p class="data">
    <b>${data.subject2 ?? "SUBJECT"}</b><br>
    ${data.subject2Grade ?? "GRADE N/A"}
    </p>
    <p class="data">
    <b>${data.subject3 ?? "SUBJECT"}</b><br>
    ${data.subject3Grade ?? "GRADE N/A"}
    </p>
    <p class="data">
    <b>${data.subject4 ?? "SUBJECT"}</b><br>
    ${data.subject4Grade ?? "GRADE N/A"}
    </p>
</div>
<div class="separator"></div>
<div class="row">
    <p class="data">
    <b>${data.subject5 ?? "SUBJECT"}</b><br>
    ${data.subject5Grade ?? "GRADE N/A"}
    </p>
    <p class="data">
    <b>${data.subject6 ?? "SUBJECT"}</b><br>
    ${data.subject6Grade ?? "GRADE N/A"}
    </p>
</div>
</div>
`;

module.exports = buildWaecExam;
