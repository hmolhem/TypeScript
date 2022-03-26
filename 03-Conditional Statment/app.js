{
    var factorState = 1;
    var statefactor = void 0;
    (function (statefactor) {
        statefactor[statefactor["pre"] = 1] = "pre";
        statefactor[statefactor["accept"] = 2] = "accept";
        statefactor[statefactor["final"] = 3] = "final";
    })(statefactor || (statefactor = {}));
    if (factorState === statefactor.pre)
        document.getElementById("factorState").innerText =
            "Pre-invoice registration";
    if (factorState === statefactor.accept)
        document.getElementById("factorState").innerText =
            "Initial invoice approval";
    if (factorState === statefactor.final)
        document.getElementById("factorState").innerText = "sending invoice";
    var flag = true;
    flag == true
        ? (document.getElementById("shipment").innerText = "sending shipment")
        : (document.getElementById("shipment").innerText =
            "The shipment is not ready to be sent");
    if (factorState == 1 && flag) {
        document.getElementById("infoFactor").innerText =
            "ready to be sent";
    }
    else if (factorState == 2 || !flag) {
        document.getElementById("infoFactor").innerText =
            "ready to be sent";
    }
    else {
        document.getElementById("infoFactor").innerText =
            " back to client";
    }
    var today = 'friday';
    switch (today) {
        case 'satarday': {
            document.getElementById('today').innerText = 'today is satarday.';
        }
        case 'sunday': {
            document.getElementById('today').innerText = 'today is sunday.';
        }
        case 'monday': {
            document.getElementById('today').innerText = 'today is monday.';
        }
        case 'tuesday': {
            document.getElementById('today').innerText = 'today is tuesday.';
        }
        case 'wednesday': {
            document.getElementById('today').innerText = 'today is wednesday.';
        }
        case 'thursday': {
            document.getElementById('today').innerText = 'today is thursday.';
        }
        default: {
            document.getElementById('today').innerText = 'today is friday.';
        }
    }
}
