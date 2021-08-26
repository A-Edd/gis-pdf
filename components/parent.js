const buildParent = data => `
<div class="section">
            <div class="row col-3">
                <p class="data">
                   <span class="fieldName">FATHERS FULL NAME</span><br>
                    <span class="fieldValue"> ${
                      data.father.name ?? "N/A"
                    }  </span>
                </p>
                <p class="data">
                   <span class="fieldName">PHONE NUMBER</span><br>
                    <span class="fieldValue"> ${
                      data.father.phone ?? "N/A"
                    }  </span>
                </p>
                <p class="data">
                   <span class="fieldName">ALIVE</span><br>
                    <span class="fieldValue"> ${
                      data.father.alive ?? "N/A"
                    }  </span>
                </p>
            </div>
            <div class="separator"></div>
            <div class="row col-3">
                <p class="data">
                   <span class="fieldName">MOTHERS FULL NAME</span><br>
                    <span class="fieldValue"> ${
                      data.mother.name ?? "N/A"
                    }  </span>
                </p>
                <p class="data">
                   <span class="fieldName">PHONE NUMBER</span><br>
                    <span class="fieldValue"> ${
                      data.mother.phone ?? "N/A"
                    }  </span>
                </p>
                <p class="data">
                   <span class="fieldName">ALIVE</span><br>
                    <span class="fieldValue"> ${
                      data.mother.alive ?? "N/A"
                    }  </span>
                </p>
            </div>
            <div class="separator"></div>
            <div class="row">
                <p class="data">
                   <span class="fieldName">NEXT OF KIN</span><br>
                    <span class="fieldValue"> ${
                      data.fullNameOfNextofKin ?? "N/A"
                    } </span>
                </p>
                <p class="data">
                   <span class="fieldName">NEXT OF KIN'S PHONE NUMBER</span><br>
                    <span class="fieldValue"> ${
                      data.phoneNumberOfNextofKin ?? "N/A"
                    } </span>
                </p>
            </div>
        </div>
`;

module.exports = buildParent;
