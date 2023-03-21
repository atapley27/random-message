const characters = ['Aang','Katara','Sokka','Toph','Zuko','Azula','Iroh','Monk Kiatzu','Kyoshi','Tai Lei','Suki','Momo','Appa','Jet','Hawky'];


    const chooseCharacter = () => {
        let randomNum = Math.floor(Math.random()* (characters.length));
        let character = characters[randomNum];
        return character;
    }

    const whichNation = (character) => {
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
        const quotes =['Hello Zuko here',
         'My girlfriend turned into the moon -Sokka',
         'I don\'t see like you see -Toph',
         'You\'re not the only one who draws power from the moon -Katara',
         'Flameo Hotman! -Aang',
         'I laugh at gravity all the time - Aang',
         'It\'s just hot leaf juice! -Iroh',
         'Sometimes the best way to solve your own problems is to help someone else. -Iroh',
        'It\’s easy to do nothing, it\’s hard to forgive. -Aang',
        'It\’s the quenchiest! -Sokka',
        'You miscalculated. I love Zuko more than I fear you. - Mai',
        'My own mother thought I was a monster… She was right of course, but it still hurt. -Azula',
        'Trust is for fools, fear is the only reliable way. -Azula',
        'I am a 400-foot tall purple platypus bear with pink horns and silver wings. -Azula',
        'True power, the divine right to rule, is something you were born with. -Azula',
        'Bye, space sword. -Sokka',
        'Boomerang! You do always come back! -Sokka'];

        let randomNum = Math.floor(Math.random()* (quotes.length));
        let quote = quotes[randomNum];
        return `Here is the a great quote from Avatar the Last Airbender: ${quote}`

    }

const getAvatar = () =>{
    const character = chooseCharacter();
    const nation = whichNation(character);
    const quote = favQuote();

    console.log(`You're character is ${character}`)
    console.log(nation);
    console.log(quote);
}

const avatar = getAvatar();
