const buildTertiary = data => `
<div class="section">
    <div class="row">
        <p class="data">
            <b>TERTIARY INSTITUTION</b><br>
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
    </div>
    <div class="separator"></div>
    <div class="row">
        <p class="data">
            <b>PROGRAMME</b><br>
            ${data.programme ?? "N/A"}
        </p>
        <p class="data">
            <b>CLASS</b><br>
            ${data.class ?? "N/A"}
        </p>
    </div>
</div>
`;

module.exports = buildTertiary;
