    let yearOfBirth, cityOfResidence, favoriteSport;
    let resultInfo, ageInfo, residenceInfo, sportInfo;
    const currentYear = new Date().getFullYear();

    do {
        yearOfBirth = prompt('Enter your year of birth');
        if ( yearOfBirth === null ) {
            alert('It is a pity that you didn\'t want to enter your year of birth')
            break;
        }
    } while ( isNaN(yearOfBirth) || yearOfBirth === '' );

    do {
        cityOfResidence = prompt('Enter your city of residence');
        if ( cityOfResidence  === null ) {
            alert('It is a pity that you didn\'t want to enter your city of residence')
            break;
        }
    } while ( containsNumbers(cityOfResidence) || cityOfResidence === '' );

    do {
        favoriteSport = prompt('Enter your favorite sport');
        if ( favoriteSport  === null ) {
            alert('It is a pity that you didn\'t want to enter your favorite sport')
            break;
        }
    } while ( containsNumbers(favoriteSport) || favoriteSport === '' );

    const getCountryFromCities = (cityOfResidence) => {
        const capital = {
            Kyiv: 'Ukraine',
            Washington: 'USA',
            London: 'England',
        }
        return capital[cityOfResidence]
    }

    const getSportAndChampion = (favoriteSport) => {
        const sportAndChampion = {
            football: 'Emerson',
            run: 'Fred Curley',
            swimming: 'David Popovich',
        }
        return sportAndChampion[favoriteSport]
    }

    ageInfo = yearOfBirth !== null ? `Your age is: ${currentYear - yearOfBirth}`: '';

    residenceInfo = cityOfResidence !== null ? getCountryFromCities(cityOfResidence) ? `You live in a capital of: ${getCountryFromCities(cityOfResidence)}` :
        `You live in a city: ${cityOfResidence}` : '';

    sportInfo = favoriteSport !== null ? getSportAndChampion(favoriteSport) ? `Cool! Want to become : ${getSportAndChampion(favoriteSport)}`:
        `You favorite sport : ${favoriteSport}` : '';

    resultInfo = ageInfo + '\r\n' + residenceInfo + '\r\n' + sportInfo

    if (resultInfo !=='') alert(resultInfo)

    function containsNumbers(str) {
        return  /\d/.test(str);
    }