const buildShortInfo = data => `
<div class="section">
                <div class="row">
                    <p class="data">
                        <b>APPLICANT FULL NAME</b><br>
                        ${data.fullName ?? "N/A"}
                    </p>

                    <p class="data">
                        <b>PHONE NO.</b><br>
                        ${data.phone ?? "N/A"}
                    </p>
                </div>
                <div class="separator"></div>
                <div class="row">
                    <p class="data">
                        <b>TYPE</b><br>
                        ${data.applicationType ?? "N/A"}
                    </p>
                    <p class="data">
                        <b>REFERENCE #</b><br>
                        ${data.reference ?? "N/A"}
                    </p>
                    <p class="data">
                        <b>SPECIAL</b><br>
                        ${data.special ?? "N/A"}
                    </p>
                    <p class="data">
                        <b>STATUS</b><br>
                        ${data.status ?? "N/A"}
                    </p>
                </div>
            </div>
`;

module.exports = buildShortInfo;
