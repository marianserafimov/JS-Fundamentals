function roadRadar([currentSpeed, zone]) {
    currentSpeed = Number(currentSpeed);

    function getLimit(zone) {
        switch (zone) {
            case 'motorway' :
                return 130;
            case 'interstate' :
                return 90;
            case 'city' :
                return 50;
            case 'residential' :
                return 20;
        }
    }

    let limit = getLimit(zone);

    function getInfraction(currentSpeed, limit) {
        let overSpeed = currentSpeed - limit;
        if (overSpeed <= 0) {
            return false;
        } else if (overSpeed > 0 && overSpeed <= 20 ) {
            return "speeding"
        }
        else if (overSpeed > 20 && overSpeed <= 40) {
            return "excessive speeding"
        }
        else {
            return "reckless driving"
        }
    }


    let infraction = getInfraction(currentSpeed, limit);

    if (infraction) {
        console.log(infraction);
    }
}



asadasa([1220, 'motorway']);