const buildGuardian = data => `
<div class="section">
            <div class="row col-3">
                <p class="data">
                   <span class="fieldName">GUARDIAN NAME</span><br>
                    <span class="fieldValue"> ${data.name} </span>
                </p>
                <p class="data">
                   <span class="fieldName">PHONE NUMBER</span><br>
                    <span class="fieldValue"> ${data.phone} </span>
                </p>
                <p class="data">
                   <span class="fieldName">DIGITAL ADDRESS</span><br>
                    <span class="fieldValue"> ${data.gps} </span>
                </p>
            </div>
</div>
`;

module.exports = buildGuardian;
