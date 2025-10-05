function getDateDiff() {
    let inputDate1 = moment(document.getElementById("input-date1").value);
    let inputDate2 = moment(document.getElementById("input-date2").value);
    let diffResult = [0, 0, 0];

    if (inputDate1.isValid() && inputDate2.isValid()) {
        let diffMinutes = Math.abs(inputDate1.diff(inputDate2, "minutes"));
        diffResult[0] = diffMinutes;

        if (diffMinutes >= 60) {
            diffResult[0] = diffMinutes % 60;
            diffResult[1] = Math.trunc(diffMinutes / 60);

            if (diffResult[1] > 24) {
                diffResult[2] = Math.trunc(diffResult[1] / 24);
                diffResult[1] = diffResult[1] % 24;
            }
        }

        printResultOfDiff(diffResult);
    }
}

function addTime() {
    let inputDate1 = moment(document.getElementById("input-date1").value);

    if (inputDate1.isValid()) {
        let inputDays = document.getElementById("input-days").value.trim();
        let inputHours = document.getElementById("input-hours").value.trim();
        let inputMinutes = document.getElementById("input-minutes").value.trim();

        if (numberIsValid(inputDays)) inputDate1.add(inputDays, "days");
        if (numberIsValid(inputHours)) inputDate1.add(inputHours, "hours");
        if (numberIsValid(inputMinutes)) inputDate1.add(inputMinutes, "minutes");

        printResultOfAdd(inputDate1);
    }
}

function numberIsValid(str) {
    return isNaN(str) === false && str.length > 0;
}

function printResultOfAdd(momentDate) {
    let resultOfAdd = document.getElementById("result-of-add");
    resultOfAdd.textContent = momentDate.format("YYYY-MM-DD HH:mm:ss");
}

function printResultOfDiff(diffResultArray) {
    let resultOfDiff = document.getElementById("result-of-diff");
    if (diffResultArray.length > 0) {
        resultOfDiff.textContent = `${diffResultArray[2]}d ${diffResultArray[1]}h ${diffResultArray[0]}m`;
    }
}

function clearInputDates() {
    document.getElementById("input-date1").value = "";
    document.getElementById("input-date2").value = "";
    document.getElementById("result-of-diff").textContent = "result of diff";
}

function clearAddValues() {
    document.getElementById("input-days").value = "";
    document.getElementById("input-hours").value = "";
    document.getElementById("input-minutes").value = "";
    document.getElementById("result-of-add").textContent = "result of sum";
}

function setCurrentDate() {
    let inputDate1 = document.getElementById("input-date1");
    inputDate1.value = moment().format("YYYY-MM-DD HH:mm:ss");
}
