const buildWaecExam = (data, type) => `
<div class="section">
<div class="row col-4">
    <p class="data">
       <span class="fieldName">${type.toUpperCase()} SCHOOL NAME</span><br>
        <span class="fieldValue"> ${data.schoolName ?? "N/A"}  </span>
    </p>
    <p class="data">
       <span class="fieldName">INDEX NUMBER</span><br>
        <span class="fieldValue"> ${data.indexNo ?? "N/A"}  </span>
    </p>
    <p class="data">
       <span class="fieldName">YEAR COMPLETED</span><br>
        <span class="fieldValue"> ${data.year ?? "N/A"}  </span>
    </p>
    <p class="data">
       <span class="fieldName">AGGREGATE</span><br>
        <span class="fieldValue"> ${data.aggregate ?? "N/A"}  </span>
    </p>
</div>
<div class="separator"></div>
<div class="row col-4">
    <p class="data">
       <span class="fieldName">${data.subject1 ?? "SUBJECT"}</span><br>
        <span class="fieldValue"> ${data.subject1Grade ?? "GRADE N/A"} </span>
    </p>
    <p class="data">
   <span class="fieldName">${data.subject2 ?? "SUBJECT"}</span><br>
    <span class="fieldValue"> ${data.subject2Grade ?? "GRADE N/A"} </span>
    </p>
    <p class="data">
   <span class="fieldName">${data.subject3 ?? "SUBJECT"}</span><br>
    <span class="fieldValue"> ${data.subject3Grade ?? "GRADE N/A"} </span>
    </p>
    <p class="data">
   <span class="fieldName">${data.subject4 ?? "SUBJECT"}</span><br>
    <span class="fieldValue"> ${data.subject4Grade ?? "GRADE N/A"} </span>
    </p>
</div>
<div class="separator"></div>
<div class="row">
    <p class="data">
   <span class="fieldName">${data.subject5 ?? "SUBJECT"}</span><br>
    <span class="fieldValue"> ${data.subject5Grade ?? "GRADE N/A"} </span>
    </p>
    <p class="data">
   <span class="fieldName">${data.subject6 ?? "SUBJECT"}</span><br>
    <span class="fieldValue"> ${data.subject6Grade ?? "GRADE N/A"} </span>
    </p>
</div>
</div>
`;

module.exports = buildWaecExam;
