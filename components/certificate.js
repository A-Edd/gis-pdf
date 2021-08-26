const buildOtherCert = data => `
<div class="section">
<div class="row">
    <p class="data">
       <span class="fieldName">INSTITUTION NAME</span><br>
        <span class="fieldValue"> ${data.otherInstitution}</span>
    </p>
    <p class="data">
       <span class="fieldName">REF. NUMBER</span><br>
        <span class="fieldValue"> ${data.referenceNumber}</span>
    </p>
    <p class="data">
       <span class="fieldName">PROGRAM/CERTIFICATION</span><br>
        <span class="fieldValue"> ${data.course} </span>
    </p>
    <p class="data">
       <span class="fieldName">DURATION</span><br>
        <span class="fieldValue"> ${
          data.durationNumber ?? ""
        } <span class="fieldValue"> ${data.durationType ?? ""} </span>
    </p>
</div>
</div>
`;

module.exports = buildOtherCert;
