    let yearOfBirth, cityOfResidence, favoriteSport;
    const currentYear = new Date().getFullYear();
    let resultInfo, ageInfo;
    let residenceInfo;
    let cancelResult;
    let sportInfo;

    do {
        yearOfBirth = prompt('Enter your year of birth');
    } while (  isNaN(yearOfBirth) || yearOfBirth === '' );

    do {
        cityOfResidence = prompt('Enter your city of residence');
    } while ( cityOfResidence === '' );

    do {
        favoriteSport = prompt('Enter your favorite sport');
    } while ( favoriteSport === '' );

    if(yearOfBirth !== null) {
        age = currentYear - yearOfBirth;
        ageInfo = `Your age is: ${age}`
    }

    const getCountryFromCities = (cityOfResidence) => {
        const capital = {
            Kyiv: 'Ukraine',
            Washington: 'USA',
            London: 'England',
        }
        return capital[cityOfResidence]
    }

    residenceInfo = getCountryFromCities(cityOfResidence) ? `You live in a capital of: ${getCountryFromCities(cityOfResidence)}` : `You live in a city: ${cityOfResidence}`

    const getSportAndChampion = (favoriteSport) => {
        const sportAndChampion = {
            football: 'Emerson',
            run: 'Fred Curley',
            swimming: 'David Popovich',
        }
        return sportAndChampion[favoriteSport]
    }

    sportInfo = getSportAndChampion(favoriteSport) ? `Cool! Want to become : ${getSportAndChampion(favoriteSport)}`: favoriteSport

    resultInfo = ageInfo + '\r\n' + residenceInfo + '\r\n' + sportInfo

    if (  yearOfBirth === null || cityOfResidence === null || favoriteSport === null){
        cancelResult = 'Шкода, що Ви не захотіли ввести свій(ю) ';
        if ( yearOfBirth === null ) cancelResult += 'year of birth' + '\,';
        if ( cityOfResidence === null ) cancelResult += 'city' + '\,';
        if ( favoriteSport === null ) cancelResult += 'favorite sport';
        alert(cancelResult)
    } else{
        alert(resultInfo)
    }

