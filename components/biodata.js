const buildBiodata = data =>
  `
    <div class="section">
    <div class="row col-5">
        <p class="data">
            <b>FIRST NAME</b><br>
            ${data.firstName ?? "N/A"}
        </p>
        <p class="data">
            <b>LAST NAME</b><br>
            ${data.surname ?? "N/A"}
        </p>
        <p class="data">
            <b>OTHER NAMES</b><br>
            ${data.otherNames ?? "N/A"}
        </p>
        <p class="data">
            <b>HEIGHT (ft)</b><br>
            ${data.height ?? "N/A"}
        </p>
        <p class="data">
            <b>WEIGHT (Kg)</b><br>
            ${data.weight ?? "N/A"}
        </p>
    </div>
    <div class="separator"></div>
    <div class="row col-5">
        <p class="data">
            <b>DATE OF BIRTH</b><br>
            ${data.dob ?? "N/A"}
        </p>
        <p class="data">
            <b>PLACE OF BIRTH</b><br>
            ${data.placeOfBirth ?? "N/A"}
        </p>
        <p class="data">
            <b>REGION</b><br>
            ${data.homeRegion ?? "N/A"}
        </p>
        <p class="data">
            <b>DISTRICT</b><br>
            ${data.homeDistrict ?? "N/A"}
        </p>
        <p class="data">
            <b>HOMETOWN</b><br>
            ${data.applicantsHomeTown ?? "N/A"}
        </p>
    </div>
    <div class="separator"></div>
    <div class="row col-4">
        <p class="data">
            <b>GENDER</b><br>
            ${data.gender ?? "N/A"}
        </p>
        <p class="data">
            <b>MARITAL STATUS</b><br>
            ${data.maritalStatus ?? "N/A"}
        </p>
        <p class="data">
            <b>BIRTH CERT NO.</b><br>
            ${data.birthCerticateNumber ?? "N/A"}
        </p>
        <p class="data">
            <b>EMAIL</b><br>
            ${data.emailAddress ?? "N/A"}
        </p>
    </div>
    <div class="separator"></div>
    <div class="row">
        <p class="data">
            <b>DIGITAL ADDRESS</b><br>
            ${data.ghanaPost ?? "N/A"}
        </p>
        <p class="data">
            <b>RESIDENTIAL ADDRESS</b><br>
            ${data.residentialAddress ?? "N/A"}
        </p>
        <p class="data">
            <b>SCREENING REGION</b><br>
            ${data.screenRegion ?? "N/A"}
        </p>
    </div>
</div>
    `;

module.exports = buildBiodata;
