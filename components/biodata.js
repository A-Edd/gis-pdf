const buildBiodata = data =>
  `
    <div class="section">
    <div class="row col-5">
        <p class="data">
           <span class="fieldName">FIRST NAME</span><br>
            <span class="fieldValue"> ${data.firstName ?? "N/A"}  </span>
        </p>
        <p class="data">
           <span class="fieldName">LAST NAME</span><br>
            <span class="fieldValue"> ${data.surname ?? "N/A"}  </span>
        </p>
        <p class="data">
           <span class="fieldName">OTHER NAMES</span><br>
            <span class="fieldValue"> ${data.otherNames ?? "N/A"}  </span>
        </p>
        <p class="data">
           <span class="fieldName">HEIGHT (cm)</span><br>
            <span class="fieldValue"> ${data.height ?? "N/A"}  </span>
        </p>
        <p class="data">
           <span class="fieldName">WEIGHT (Kg)</span><br>
            <span class="fieldValue"> ${data.weight ?? "N/A"}  </span>
        </p>
    </div>
    <div class="separator"></div>
    <div class="row col-5">
        <p class="data">
           <span class="fieldName">DATE OF BIRTH</span><br>
            <span class="fieldValue"> ${data.dob ?? "N/A"}  </span>
        </p>
        <p class="data">
           <span class="fieldName">PLACE OF BIRTH</span><br>
            <span class="fieldValue"> ${data.placeOfBirth ?? "N/A"}  </span>
        </p>
        <p class="data">
           <span class="fieldName">REGION</span><br>
            <span class="fieldValue"> ${data.homeRegion ?? "N/A"}  </span>
        </p>
        <p class="data">
           <span class="fieldName">DISTRICT</span><br>
            <span class="fieldValue"> ${data.homeDistrict ?? "N/A"}  </span>
        </p>
        <p class="data">
           <span class="fieldName">HOMETOWN</span><br>
            <span class="fieldValue"> ${
              data.applicantsHomeTown ?? "N/A"
            }  </span>
        </p>
    </div>
    <div class="separator"></div>
    <div class="row">
            <p class="data">
           <span class="fieldName">GENDER</span><br>
            <span class="fieldValue"> ${data.gender ?? "N/A"}  </span>
            </p>
            <p class="data">
               <span class="fieldName">MARITAL STATUS</span><br>
                <span class="fieldValue"> ${
                  data.maritalStatus ?? "N/A"
                }  </span>
            </p>
        
        <p class="data">
           <span class="fieldName">BIRTH CERT NO.</span><br>
            <span class="fieldValue"> ${
              data.birthCerticateNumber ?? "N/A"
            }  </span>
        </p>
        <p class="data">
           <span class="fieldName">EMAIL</span><br>
            <span class="fieldValue"> ${data.emailAddress ?? "N/A"}  </span>
        </p>
    </div>
    <div class="separator"></div>
    <div class="row">
        <p class="data">
           <span class="fieldName">DIGITAL ADDRESS</span><br>
            <span class="fieldValue"> ${data.ghanaPost ?? "N/A"}  </span>
        </p>
        <p class="data">
           <span class="fieldName">RESIDENTIAL ADDRESS</span><br>
            <span class="fieldValue"> ${
              data.residentialAddress ?? "N/A"
            }  </span>
        </p>
        <p class="data">
           <span class="fieldName">SCREENING REGION</span><br>
            <span class="fieldValue"> ${data.screenRegion ?? "N/A"}  </span>
        </p>
    </div>
</div>
    `;

module.exports = buildBiodata;
