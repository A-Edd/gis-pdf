const buildParent = data => `
<div class="section">
            <div class="row col-3">
                <p class="data">
                    <b>FATHERS FULL NAME</b><br>
                    ${data.father.name}
                </p>
                <p class="data">
                    <b>PHONE NUMBER</b><br>
                    ${data.father.phone}
                </p>
                <p class="data">
                    <b>ALIVE</b><br>
                    ${data.father.alive}
                </p>
            </div>
            <div class="separator"></div>
            <div class="row col-3">
                <p class="data">
                    <b>MOTHERS FULL NAME</b><br>
                    ${data.mother.name}
                </p>
                <p class="data">
                    <b>PHONE NUMBER</b><br>
                    ${data.mother.phone}
                </p>
                <p class="data">
                    <b>ALIVE</b><br>
                    ${data.mother.alive}
                </p>
            </div>
        </div>
`;

module.exports = buildParent;
