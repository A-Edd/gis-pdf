const buildOtherCert = data => `
<div class="section">
<div class="row">
    <p class="data">
        <b>INSTITUTION NAME</b><br>
        ${data.otherInstitution}
    </p>
    <p class="data">
        <b>REF. NUMBER</b><br>
        ${data.referenceNumber}
    </p>
    <p class="data">
        <b>PROGRAM/CERTIFICATION</b><br>
        ${data.course}
    </p>
    <p class="data">
        <b>DURATION</b><br>
        ${data.durationNumber} ${data.durationType}
    </p>
</div>
</div>
`;

module.exports = buildOtherCert;
