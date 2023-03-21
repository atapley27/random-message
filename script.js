const characters = ['Aang','Katara','Sokka','Toph','Zuko','Azula','Iroh','Monk Kiatzu','Kyoshi','Tai Lei','Suki','Momo','Appa','Jet','Hawky'];


    const chooseCharacter = () => {
        let randomNum = Math.floor(Math.random()* (characters.length));
        let character = characters[randomNum];
        return `You are ${character}!`
    }

    const nation = (character) => {
        switch (character){
            case 'Aang': case 'Monk Kiatzu': case 'Appa': case 'Momo': 
                return 'You are an Air Nomad!'
                break;
            case 'Katara': case 'Sokka': 
                return 'You are from the Water Tribe!';
                break;
            case 'Toph': case 'Kyoshi': case 'Suki': case 'Jet':
                return 'You are from the Earth Kingdom!'
                break;
            case 'Zuko': case 'Azula': case 'Iroh': case 'Tai Lei':
                return 'You are from the Fire Nation!'
                break;
            case 'Appa': case 'Momo': case 'Hawky':
                return 'You are a lovable animal sidekick!'
            default:
                return 'Go watch Avatar the Last Airbender!';
        }
   
    }

    const favQuote =() =>{
        const quotes =['Hello Zuko here',]

    }


