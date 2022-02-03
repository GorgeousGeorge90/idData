const personGenerator = {
    surnameMaleJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    patronymicMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Михайлович",
            "id_2": "Генадьевич",
            "id_3": "Игоревич",
            "id_4": "Дмитриевич",
            "id_5": "Алексеевич",
            "id_6": "Александрович",
            "id_7": "Эмирович",
            "id_8": "Евгеньевич",
            "id_9": "Викторович",
            "id_10": "Андреевич" 
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анна",
            "id_2": "Екатерина",
            "id_3": "Евгения",
            "id_4": "Амалия",
            "id_5": "Анастасия",
            "id_6": "Виктория",
            "id_7": "Ева",
            "id_8": "Александра",
            "id_9": "Мария",
            "id_10": "Карла"
        }
    }`,
    surnameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Окольнова",
            "id_2": "Осипова",
            "id_3": "Андреева",
            "id_4": "Морозова",
            "id_5": "Алябьева",
            "id_6": "Горячева",
            "id_7": "Монахова",
            "id_8": "Манаенкова",
            "id_9": "Комарова",
            "id_10": "Мальцева"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Михайловна",
            "id_2": "Алексеевна",
            "id_3": "Генадьевна",
            "id_4": "Дмитриевна",
            "id_5": "Александровна",
            "id_6": "Эмировна",
            "id_7": "Егорьевна",
            "id_8": "Евгеньевна",
            "id_9": "Викторовна",
            "id_10": "Андреевна" 
        }
    }`,
    dayJson: `{
        "count": 31,
        "list": {
            "id_1": "1",
            "id_2": "2",
            "id_3": "3",
            "id_4": "4",
            "id_5": "5",
            "id_6": "6",
            "id_7": "7",
            "id_8": "8",
            "id_9": "9",
            "id_10": "10",
            "id_11": "11",
            "id_12": "12",
            "id_13": "13",
            "id_14": "14",
            "id_15": "15",
            "id_16": "16",
            "id_17": "17",
            "id_18": "18",
            "id_19": "19",
            "id_20": "20",
            "id_21": "21",
            "id_22": "22",
            "id_23": "23",
            "id_24": "24",
            "id_25": "25",
            "id_26": "26",
            "id_27": "27",
            "id_28": "28",
            "id_29": "29",
            "id_30": "30",
            "id_31": "31"
        }
    }`,
    birthMonthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,
    birthYearJson: `{
        "count": 10,
        "list": {     
            "id_1": "1990",
            "id_2": "1986",
            "id_3": "1977",
            "id_4": "1953",
            "id_5": "1988",
            "id_6": "1948",
            "id_7": "1999",
            "id_8": "2008",
            "id_9": "2001",
            "id_10": "1975"
        }
    }`,
    specMaleJson: `{
        "count": 5,
        "list": {
            "id_1": "дворник",
            "id_2": "шахтер",
            "id_3": "слесарь",
            "id_4": "кочегар",
            "id_5": "плотник" 
        }
    }`,
    specFemaleJson: `{
        "count": 5,
        "list": {
            "id_1": "учительница",
            "id_2": "певица",
            "id_3": "доярка",
            "id_4": "домохозяйка",
            "id_5": "воспитательница" 
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        };
    },

     randomSurname: function() {
        if(this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameMaleJson);
        } else {
            return this.randomValue(this.surnameFemaleJson);
        };
    },

    randomPatronymic: function() {
        if(this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.patronymicMaleJson);
        } else {
            return this.randomValue(this.patronymicFemaleJson);
        };
    },

     randomSpec: function() {
        if(this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.specMaleJson);
        } else {
            return this.randomValue(this.specFemaleJson);
        };
    },

    randomGender: function() {

        return this.randomIntNumber(1,0) === 0 ? this.GENDER_MALE: this.GENDER_FEMALE;

    },

    randomDay: function() {

        return this.randomValue(this.dayJson); 

    },

    randomBirthMonth: function() {
       
        return this.randomValue(this.birthMonthJson); 

    },

    randomBirthYear: function() {

        return this.randomValue(this.birthYearJson); 

    },
    
    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.day = this.randomDay();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthYear = this.randomBirthYear();
        this.person.spec = this.randomSpec();
        return this.person;
    }
};
