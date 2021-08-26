const buildShortInfo = data => `
<div class="section">
                <div class="row">
                    <p class="data">
                       <span class="fieldName">APPLICANT FULL NAME</span><br>
                        <span class="fieldValue"> ${
                          data.fullName ?? "N/A"
                        }  </span>
                    </p>

                    <p class="data">
                       <span class="fieldName">PHONE NO.</span><br>
                        <span class="fieldValue"> ${
                          data.phone ?? "N/A"
                        }  </span>
                    </p>
                </div>
                <div class="separator"></div>
                <div class="row">
                    <p class="data">
                       <span class="fieldName">TYPE</span><br>
                        <span class="fieldValue"> ${
                          data.applicationType ?? "N/A"
                        } </span>
                    </p>
                    <p class="data">
                       <span class="fieldName">REFERENCE #</span><br>
                        <span class="fieldValue"> ${
                          data.reference ?? "N/A"
                        }  </span>
                    </p>
                    <p class="data">
                       <span class="fieldName">ENTRY</span><br>
                        <span class="fieldValue"> ${
                          data.educationalLevel ?? "N/A"
                        } </span>
                    </p>
                    <p class="data">
                       <span class="fieldName">STATUS</span><br>
                        <span class="fieldValue"> ${
                          data.status ?? "N/A"
                        }  </span>
                    </p>
                </div>
            </div>
`;

module.exports = buildShortInfo;
