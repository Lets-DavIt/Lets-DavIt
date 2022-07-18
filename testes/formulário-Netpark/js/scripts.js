const form = document.getElementById("form");
const companyName = document.getElementById("companyName");
const companyCnpj = document.getElementById("companyCnpj");
const businessName = document.getElementById("businessName");
const businessEmail = document.getElementById("businessEmail");
const businessPhone = document.getElementById("businessPhone");
const financialName = document.getElementById("financialName");
const financialEmail = document.getElementById("financialEmail");
const financialPhone = document.getElementById("financialPhone");
const contract = document.getElementById("contract");
const address = document.getElementById("address");
const addressNumber = document.getElementById("addressNumber");
const city = document.getElementById("city");
const county = document.getElementById("county");
const state = document.getElementById("state");
const zipCode = document.getElementById("zipCode");
const timeDayInitial = document.getElementById("timeDayInitial");
const timeDayFinal = document.getElementById("timeDayFinal");
const qtyGuest = document.getElementById("qtyGuest");
const eventDay = document.getElementById("eventDay");
const payEmail = document.getElementById("payEmail");
const payCompanyName = document.getElementById("payCompanyName");
const payCompanyCnpj = document.getElementById("payCompanyCnpj");
const payContractName = document.getElementById("payContractName");
const payContractEmail = document.getElementById("payContractEmail");
const generalObservations = document.getElementById("generalObservations");

let errorCode;

form.addEventListener("submit", async (e) => {
    try {
        e.preventDefault();

        grecaptcha.ready(function() {
            grecaptcha.execute('6LfgqP0gAAAAAFmOn9EXgfsTDXQqTHwiTwNewNaz', {action: 'submit'}).then(function(token) {
                if(token){
                    return true;
                }
                else {
                    errorCode = "131";
                    throw new Error(errorCode);
                };
            });
        });

        const inputs = await checkInputs();

        let listInputs = JSON.parse(localStorage.getItem("inputs")|| "[]");

        listInputs.push(inputs);

        localStorage.setItem("inputs", JSON.stringify(listInputs));
    } 
    catch (error) {
        if(errorCode == ""){
            errorCode = "450";
            console.log(errorCode);
        }else{
            console.log(error.message);
        };
    };
});

async function checkInputs() {
    try {
        const companyNameValue = companyName.value.trim();
        const companyCnpjValue = companyCnpj.value.trim();
        const businessNameValue = businessName.value.trim();
        const businessEmailValue = businessEmail.value.trim();
        const businessPhoneValue = businessPhone.value.trim();
        const financialNameValue = financialName.value.trim();
        const financialEmailValue = financialEmail.value.trim();
        const financialPhoneValue = financialPhone.value.trim();
        const contractValue = contract.value.trim();
        const addressValue = address.value.trim();
        const addressNumberValue = addressNumber.value.trim();
        const cityValue = city.value.trim();
        const countyValue = county.value.trim();
        const stateValue = state.value.trim();
        const zipCodeValue = zipCode.value.trim();
        const timeDayInitialValue = timeDayInitial.value.trim();
        const timeDayFinalValue = timeDayFinal.value.trim();
        const qtyGuestValue = qtyGuest.value.trim();
        const eventDayValue = eventDay.value.trim();
        const payEmailValue = payEmail.value.trim();
        const payCompanyNameValue = payCompanyName.value.trim();
        const payCompanyCnpjValue = payCompanyCnpj.value.trim();
        const payContractNameValue = payContractName.value.trim();
        const payContractEmailValue = payContractEmail.value.trim();
        const generalObservationsValue = generalObservations.value.trim();

        if (companyNameValue === "") {
            setErrorFor(companyName, "Company name is required.");
        }
        else {
            setSuccessFor(companyName);
        };

        if(companyCnpjValue === "") {
            setErrorFor(companyCnpj, "CNPJ is required.");
        }
        else if (!checkCnpj(companyCnpjValue)){
            setErrorFor(companyCnpj, "Please enter a valid CNPJ.");
        }
        else{
            setSuccessFor(companyCnpj);
        };

        if (businessNameValue === "") {
            setErrorFor(businessName, "Business name is required.");
        }
        else {
            setSuccessFor(businessName);
        };

        if (businessEmailValue === "") {
            setErrorFor(businessEmail, "Business e-mail is required.");
        } 
        else if (!checkEmail(businessEmailValue)) {
            setErrorFor(businessEmail, "Please enter a valid e-mail.");
        } 
        else {
            setSuccessFor(businessEmail);
        };

        if (businessPhoneValue === ""){
            setErrorFor(businessPhone, "Business phone is required.");
        }
        else if (!checkPhone(businessPhoneValue)){
            setErrorFor(businessPhone, "Please enter a valid phone.");
        }
        else {
            setSuccessFor(businessPhone);
        };

        if (financialNameValue === "") {
            setErrorFor(financialName, "Financial name is required.");
        }
        else {
            setSuccessFor(financialName);
        };

        if (financialEmailValue === "") {
            setErrorFor(financialEmail, "Financial e-mail is required.");
        } 
        else if (!checkEmail(financialEmailValue)) {
            setErrorFor(financialEmail, "Please enter a valid e-mail.");
        } 
        else {
            setSuccessFor(financialEmail);
        };

        if (financialPhoneValue === ""){
            setErrorFor(financialPhone, "Financial phone is required.");
        }
        else if (!checkPhone(financialPhoneValue)){
            setErrorFor(financialPhone, "Please enter a valid phone.");
        }
        else {
            setSuccessFor(financialPhone);
        };

        if (contractValue === "") {
            setErrorFor(contract, "Contract is required.");
        }
        else {
            setSuccessFor(contract);
        };

        if (addressValue === "") {
            setErrorFor(address, "Address is required.");
        }
        else {
            setSuccessFor(address);
        };

        if (addressNumberValue === "") {
            setErrorFor(addressNumber, "Address number is required.");
        }
        else {
            setSuccessFor(addressNumber);
        };

        if (cityValue === "") {
            setErrorFor(city, "City is required.");
        }
        else {
            setSuccessFor(city);
        };

        if (countyValue === "") {
            setErrorFor(county, "County is required.");
        }
        else {
            setSuccessFor(county);
        };

        if (stateValue === "") {
            setErrorFor(state, "State is required.");
        }
        else {
            setSuccessFor(state);
        };
        
        if (zipCodeValue === "") {
            setErrorFor(zipCode, "Zip Code is required.");
        }
        else {
            setSuccessFor(zipCode);
        };

        if (timeDayInitialValue === "") {
            setErrorFor(timeDayInitial, "Time Day Initial is required.");
        }
        else {
            setSuccessFor(timeDayInitial);
        };

        if (timeDayFinalValue === "") {
            setErrorFor(timeDayFinal, "Time Day Final is required.");
        }
        else {
            setSuccessFor(timeDayFinal);
        };

        if (qtyGuestValue === "") {
            setErrorFor(qtyGuest, "Quantity Guest is required.");
        }
        else {
            setSuccessFor(qtyGuest);
        };

        if (eventDayValue === "") {
            setErrorFor(eventDay, "Event Day is required.");
        }
        else {
            setSuccessFor(eventDay);
        };

        if (payEmailValue !== "") {
            if (!checkEmail(payEmailValue)) {
                setErrorFor(payEmail, "Please enter a valid e-mail.");
            }
            else {
                setSuccessFor(payEmail);
            };
        };

        if (payCompanyNameValue !== "") {
            setSuccessFor(payCompanyName);
        };

        if(payCompanyCnpjValue !== "") {
            if (!checkCnpj(payCompanyCnpjValue)){
                setErrorFor(payCompanyCnpj, "Please enter a valid CNPJ.");
            }
            else{
                setSuccessFor(payCompanyCnpj);
            };
        };

        if (payContractNameValue !== "") {
            setSuccessFor(payContractName);
        };

        if (payContractEmailValue !== "") {
            if (!checkEmail(payContractEmailValue)) {
                setErrorFor(payContractEmail, "Please enter a valid e-mail.");
            }
            else {
                setSuccessFor(payContractEmail);
            };
        };

        if (generalObservationsValue !== "") {
            setSuccessFor(generalObservations);
        };

        const formControls = form.querySelectorAll(".form-control");

        const formIsValid = [...formControls].every((formControl) => {
            return formControl.className === "form-control success";
        });

        if (formIsValid) {
            console.log("O formulário está 100% válido!");
        };

        if(errorCode === "999999"){
            throw new Error(errorCode);
        };

        const list = {
            companyName: companyNameValue,
            companyCnpjValue: companyCnpjValue,
            businessName: businessNameValue,
            businessEmail: businessEmailValue,
            businessPhone: businessPhoneValue,
            financialName: financialNameValue,
            financialEmail: financialEmailValue,
            financialPhone: financialPhoneValue,
            contract: contractValue,
            address: addressValue,
            addressNumber: addressNumberValue,
            city: cityValue,
            county: countyValue,
            state: stateValue,
            zipCode: zipCodeValue,
            timeDayInitial: timeDayInitialValue,
            timeDayFinal: timeDayFinalValue,
            qtyGuest: qtyGuestValue,
            eventDay: eventDayValue,
            payEmail: payEmailValue,
            payCompanyName: payCompanyNameValue,
            payCompanyCnpj: payCompanyCnpjValue,
            payContractName: payContractNameValue,
            payContractEmail: payContractEmailValue,
            generalObservations: generalObservationsValue
        };

        return list;
    } 
    catch (error) {
        console.log(error.message);
    };
};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    errorCode = "999999";
    
    small.innerText = message;

    formControl.className = "form-control error";
};

function setSuccessFor(input) {
    errorCode = "";
    const formControl = input.parentElement;

    formControl.className = "form-control success";
};

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
};

function checkCnpj(input){
    const b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ];
    const cnpj = String(input).replace(/[^\d]/g, '');

    if(cnpj.length != 14){
        return false;
    };  

    if(/0{14}/.test(cnpj)){
        return false;
    };  
    
    return true;
};

function checkPhone(input){
    input.replace(/ /, "");

    const regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{5})|(9[0-9]{3}-[0-9]{4}))$||^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');

    return regex.test(input);
};