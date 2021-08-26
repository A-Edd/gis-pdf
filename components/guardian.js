const buildGuardian = data => `
<div class="section">
            <div class="row col-3">
                <p class="data">
                    <b>GUARDIAN NAME</b><br>
                    ${data.name}
                </p>
                <p class="data">
                    <b>PHONE NUMBER</b><br>
                    ${data.phone}
                </p>
                <p class="data">
                    <b>DIGITAL ADDRESS</b><br>
                    ${data.gps}
                </p>
            </div>
</div>
`;

module.exports = buildGuardian;
