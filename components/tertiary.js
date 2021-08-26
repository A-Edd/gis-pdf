const buildTertiary = data => `
<div class="section">
    <div class="row">
        <p class="data">
           <span class="fieldName">TERTIARY INSTITUTION</span><br>
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
    </div>
    <div class="separator"></div>
    <div class="row">
        <p class="data">
           <span class="fieldName">PROGRAMME</span><br>
            <span class="fieldValue"> ${data.programme ?? "N/A"}  </span>
        </p>
        <p class="data">
           <span class="fieldName">CLASS</span><br>
            <span class="fieldValue"> ${data.class ?? "N/A"}  </span>
        </p>
    </div>
</div>
`;

module.exports = buildTertiary;
