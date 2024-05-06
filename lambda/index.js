// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

// Declaracion del uso de la libreria axios - lunes 6 mayo 2024
const axios = require('axios');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome to take five weekly reflections Tuesday april 16 2024, wich weekly reflection or word would you like to try?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        
        //var day_local = handlerInput.requestEnvelope.request.intent.slots.reflection.day.value;
        
        
        const speakOutput = 'Hello World from my reflections!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond-HelloWorldIntent')
            .getResponse();
    }
};

//
const ReflectionHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Reflection';
    },
    handle(handlerInput) {
        
        
        // nuevas inicio
         const{attributesManager} = handlerInput;
        const requestAttributes = attributesManager.getRequestAttributes();
        const intent = handlerInput.requestEnvelope.request.intent;
        //
        const day_local = intent.slots.day_ordinal.value;
        const month_local = intent.slots.month.value;
        //const mi_reflexión = "";
        var mi_reflexión = ""
        
        /*
        // inicia test
        const speakOutput = "entre a ReflectionHandler";
       
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.speak(date_local)
            .reprompt(speakOutput)
            .getResponse();
        // fin test
        */
        
        
        //const month = intent.slots.month.resolutions.resolutionsPerAuthority[0].values[0].value.name;
        const year_local = intent.slots.year.value;
        // nuevas fin
        var date_local = day_local + "/" + month_local + "/" + year_local;
        
        // inicio reflexiones
         if (date_local === '20/september/2023' || date_local === '2023-09-20')
        {
            //aqui poner la reflexión
            //var mi_reflexión = "Your reflection is: Reflexión del 17 de diciembre de 2019"
            mi_reflexión = "The title of reflection is: Get into the Spirit"+ " And the reflection is: On this day in 1990, Sister Thea Bowman, F.S.P.A. died but the voice that nurtured countless thousands was not silenced. Before Sister Thea, black Catholics were expected to give up their music, dance, and spiritual testifying because these were suspiciously “Protestant” customs. She restored their identity, shaped it through the Institute of Black Catholic Studies at Xavier University, and shared it with those of other backgrounds. Shortly before her death, Thea spoke to the U.S. Conference of Catholic Bishops from her wheelchair. In the last five minutes of that talk, Thea led the visibly moved bishops in singing “We Shall Overcome.” Thea called the spirituals she grew up with 'bonfires to warm chilly nights.' Such songs of hope warm a few hearts as well. Today, more than ever, we need a spirit-filled song."
            //date_local = "entro a if";
           
        }
        
         if (date_local === '02/september/2023' || date_local === '2023-09-02')
        {
            //aqui poner la reflexión
            //var mi_reflexión = "Your reflection is: Reflexión del 13 de diciembre de 2019"
            mi_reflexión = "The title of reflection is: Awakening"+ " And the reflection is: The moment of waking from a nightmare is suffused with relief. Whoever was chasing you dissolves, and whatever threatened harm has vanished. Grief and loss, however, can be living nightmares from which we’re unable to shake ourselves awake. Yet as the Scrutiny prayers for our Elect this Sunday affirm, the “horror of sin, which distorts life” is indeed an evil from which we can escape. Death has an end, and love will have its victory. We pray with our Elect for freedom from all paths that lead to death and a greater attraction to the ways that restore life."
            //date_local = "entro a if";
           
        }
         if (date_local === '03/september/2023' || date_local === '2023-09-03')
        {
            //aqui poner la reflexión
            //var mi_reflexión = "Your reflection is: Reflexión del 13 de diciembre de 2019"
            mi_reflexión = "The title of reflection is: The plot thickens"+ " And the reflection is: Next weekend we observe Palm Sunday, ushering in a dramatic week that includes the tragedy of Our Lord’s suffering and death. The gospels describe for us the suspicion and plotting that will lead to his Crucifixion. Among the religious leaders, only Nicodemus gives Jesus the benefit of the doubt and tries to argue his case. This is the same Nicodemus who has already visited Jesus under cover of night to discuss his teachings and who provides the burial spices after Jesus is crucified. How can you be Nicodemus in situations where others are unfairly subjected to suspicion and suffering?"
            //date_local = "entro a if";
           
        }
         if (date_local === '04/september/2023' || date_local === '2023-09-04')
        {
            //aqui poner la reflexión
            //var mi_reflexión = "Your reflection is: Reflexión del 13 de diciembre de 2019"
            mi_reflexión = "The title of reflection is: What price would you pay?"+ " And the reflection is: Today’s gospel, like the latest news reports, has an aura of doom about it. Jesus knows that authorities would like to kill him. The church teaches that “Jesus went up to Jerusalem voluntarily, knowing well that there he would die a violent death because of the opposition of sinners,” as the Catechism of the Catholic Church puts it (569). How far are you willing to go to “do the right thing”? Contemplate today the sacrifices you are making in light of current events.  What would you be willing to do to be true to your beliefs?"
            //date_local = "entro a if";
           
        }
         if (date_local === '05/september/2023' || date_local === '2023-09-05')
        {
            //aqui poner la reflexión
            //var mi_reflexión = "Your reflection is: Reflexión del 13 de diciembre de 2019"
            mi_reflexión = "The title of reflection is: Reflect in your heart"+ " And the reflection is: Many of us are taking a lot of solitary walks these days. Imagine walking with the Lord today. He suddenly stops and looks at you with a question in his eyes. He hesitates, but then goes ahead and asks: “Do you have the love of God in your heart?” You might respond: “I am doing my best to be patient, to think of others first, to be kind and generous. It is Lent after all.” Jesus persists: “But do you have the love of God in your heart?” Take five minutes today and consider that question. Be at peace with whatever thoughts come to mind. Then allow the insights you gain to set the rest of the day's course."
            //date_local = "entro a if";
           
        }
         if (date_local === '06/august/2023' || date_local === '2023-08-06')
        {
            //aqui poner la reflexión
            //var mi_reflexión = "Your reflection is: Reflexión del 13 de diciembre de 2019"
            mi_reflexión = "The title of reflection is: Say yes to God" + " And the reflection is: The Annunciation is a beautiful feast that celebrates Mary’s “yes” to God during her encounter with the angel Gabriel. Mary doesn’t rattle off a quick response but rather pauses and ponders, wondering what this might mean. Her response is a choice not simply to give birth to a child, but to fully embrace her identity and her calling as an intimate companion with God. “Behold, I am the handmaid of the Lord.” It is as if Mary is saying, “Look! My life is fully in God! Everything about who I am is for and with God!” During this day of Annunciation, reflect on your daily “yeses.” How do these reflect your own identity and life in God?. Special note: As a show of solidarity in the fight against the Covid-19 pandemic, Pope Francis has called on all Christians to unite in prayer at noon local time today and say an Our Father."
            //date_local = "entro a if";
           
        }
         if (date_local === '07/august/2023' || date_local === '2023-08-07')
        {
            //aqui poner la reflexión
            //var mi_reflexión = "Your reflection is: Reflexión del 13 de diciembre de 2019"
            mi_reflexión = "The title of reflection is: Be a voice for the voiceless" +  " And the reflection is: Saint Oscar Romero, the archbishop of San Salvador who spoke out against grave social injustice in El Salvador, was assassinated by his opponents while celebrating Mass on this day in 1980, and it is commemorated by the United Nations as International Day for the Right to the Truth. Today is an opportunity for you to honor the memory of human rights victims, pay tribute to those who struggle to protect those rights for all—including the right to health care—remember the important work of Romero, and commit yourself to his values of speaking truth to power, even when it costs you."
            //date_local = "entro a if";
           
        }
         if (date_local === '08/august/2023' || date_local === '2023-08-08')
        {
            //aqui poner la reflexión
            //var mi_reflexión = "Your reflection is: Reflexión del 13 de diciembre de 2019"
            mi_reflexión = "The title of reflection is: Step down to your calling" + "And the reflection is: God must have a great sense of irony. Imagine the head of an important court suddenly being summoned to pastor a far-off land filled with people who speak unknown languages. Such was the destiny of Turibius of Mogrovejo, summoned from his post as chief inquisitor in Granada, Spain to pastor the Lima archdiocese, which included the indigenous Andean communities of 16th-century colonial Peru. Turibius went with the flow admirably, traversing his vast archdiocese three times on foot, alone, ministering to all along his route. He defended those who suffered the greatest injustice under the colonial rule he himself represented. Downward mobility is a pattern in saints’ biographies. Time to evaluate your priorities?"
            //date_local = "entro a if";
           
        }
        // fin reflexiones
        
        
         //day_local = handlerInput.requestEnvelope.request.intent.slots.reflection.day.value;
        
       // const speakOutput = 'Hello World!';
       // speakOutput = 'Fecha: ' + date_local;
       
       
       const speakOutput = mi_reflexión;
       
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.speak(date_local)
            .reprompt(speakOutput)
            .getResponse();
            
    }
};

// inicia DiaAnteriorHandler
//inicio DiaAnteriorIntentHandler
const DiaAnteriorIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'DiaAnteriorIntent';
    },
    handle(handlerInput) {
        // inicia override
        
        // fin override
        
        const{attributesManager} = handlerInput;
        const requestAttributes = attributesManager.getRequestAttributes();
        const intent = handlerInput.requestEnvelope.request.intent;
        
        /*
        return handlerInput.responseBuilder
            
            .speak('entre a DiaAnteriorIntentHandler')
            //.reprompt('I entered the intent the day before, I did not understand you, please try again')
            .reprompt('Do you want to hear another reflection?')
            .getResponse();
        
        */
        
        // Inicia hacer conexión a la base de datos
        var errDB = 'vacio';
        
        //var mysql      = require('mysql');
        /*
        var connection = mysql.createConnection({
            host     : 'rds-mysql-10mintutorial.co4ng5qljzos.us-east-1.rds.amazonaws.com',
            user     : 'masterUsername',
            password : 'pepe_grillo_duende_2020',
            database : 'rds-mysql-10mintutorial'
        });
      
        connection.connect(function(err) {
        if (err) {
          //console.error('error connecting: ' + err.stack);
          //return;
         errDB = 'Error en conexión';
        }
 
          //console.log('connected as id ' + connection.threadId);
          errDB = 'Conexión exitosa';
        });
        // Finaliza hacer conexión a la base de datos
        */
        var fecha = "vacia";
        var section = "vacia";
        var mi_reflexión = "vacia";
        var fecha_any_day;
        var ban_week = 0;
        
        // inicia obtener fecha de hoy
        // para validar cuando piden
        // reflexiones en fechas posteriores
        // al día de hoy
        var today = new Date();
        var y = today.getFullYear();
        var m = today.getMonth() + 1;
        m = (m < 10 ? "0" : "") + m;
        var d = today.getDate();
        d = (d < 10 ? "0" : "") + d;
        
        var today_comp = y+"-"+m+"-"+d;
        // fin obtener fecha de hoy
         
        
         // inicia código valida slot any_day lunes 18 septiembre 2023
        /*
        if (intent.slots.any_day.value !== null)
        {
			    fecha_any_day = handlerInput.requestEnvelope.request.intent.slots.any_day.value;
			  
        return handlerInput.responseBuilder
            
            .speak('entre al if any_day.value')
            //.reprompt('I entered the intent the day before, I did not understand you, please try again')
            .reprompt('Do you want to hear another reflection?')
            .getResponse();
        
        }
        */
        // inicia código valida slot date_possessive martes 20 abril 2021
         if (intent.slots.date_possessive.value !== null)
        {
			    fecha = handlerInput.requestEnvelope.request.intent.slots.date_possessive.value;
			  /*
        return handlerInput.responseBuilder
            
            .speak('entre al if any_day.value')
            //.reprompt('I entered the intent the day before, I did not understand you, please try again')
            .reprompt('Do you want to hear another reflection?')
            .getResponse();
        */
        }
        else
        {
			    fecha = handlerInput.requestEnvelope.request.intent.slots.any_day.value;
			  /*
        return handlerInput.responseBuilder
            
            .speak('entre al if any_day.value')
            //.reprompt('I entered the intent the day before, I did not understand you, please try again')
            .reprompt('Do you want to hear another reflection?')
            .getResponse();
        */
        }
        // inicio reflection_section
        // inicia código valida slot date_possessive martes 20 abril 2021
         if (intent.slots.reflection_section.value !== null)
        {
			    section = handlerInput.requestEnvelope.request.intent.slots.reflection_section.value;
        }
        // fin reflection_section
        
        // fin código valida date_possessive y any_date jueves 8 febrero 2024
        
        // inicio para separar año, mes, día. Siempre y cuando sea fecha válida
        var sSubCadena_año;
        var sSubCadena_mes;
        var sSubCadena_dia;
        sSubCadena_año = fecha.substring(0,4);
        sSubCadena_mes = fecha.substring(5,7);
        sSubCadena_dia = fecha.substring(8,10);
        // fin para separar año, mes, día
            
        //inicia código lunes 20 julio 2020 09:07 hrs
        var date_local;
            
        date_local = sSubCadena_dia + "-" + sSubCadena_mes + "-" + sSubCadena_año;
        // En el periodo de pruebas este if es el tomorrow de la serie. (en mis pruebas el today es el 23 de noviembre 2021) 
        // Cuando este desarrollándose como proyecto hay que crear una base de datos.
            
        // Este es el yesterday (fecha del yesterday en mis últimas pruebas es el 7 junio 2022)
        //if (date_local === '11/22/2021' || date_local === '22/noviembre/2021')
        
        // validar fecha
          //if (fecha === '2000-01-01')
          if (fecha === '2024-W8')
          //test inicio jueves 2 nov 2023
            return handlerInput.responseBuilder
            //.speak(speechText)
            .speak('line 296 fecha='+fecha+"  section="+section)
            .reprompt('Do you want to hear another reflection (line 297)?')
            .getResponse();
          //test fin jueves 2 nov 2023
        {
          //aqui poner la reflexión
          //mi_reflexión = "fecha default 2000/01/01";
          mi_reflexión = "línea 312 variable mi_reflexión= "+fecha+" variable reflexion_section= "+section;
          //mi_reflexión = "The title of the reflection is: May their force be with us"+ " And the reflection is: Today is Teacher Appreciation Day, recognizing teachers as a force for good—especially in this pandemic year. Through John Baptist de La Salle, patron saint of all teachers, we might say the best educators naturally follow a “Lasallian” philosophy of education. “The Lasallian tradition emphasizes the fact that all people, especially the young, have an inherent dignity which comes from their being created in the image of God,” explains St. Mary’s College of Winona. “Education is a means of developing this dignity for the well-being of each student as well as for the well-being of our society.” Thank a teacher today.";
          //date_local = "entro a if";
          ban_week = 1;
        }
        // fin validar fecha
        
        // lineas para atrapar "last monday", siendo hoy monday september 18 2023
        // sería:  septiembre 11 2023    
         //if (fecha === '2023-09-11')
         if (date_local === '2023-10-01')
        {
          //aqui poner la reflexión
          mi_reflexión = "Your last monday reflection, while today is thursday september 21 2023, is: Reflection of last monday is september 11 2023";
          //mi_reflexión = "The title of the reflection is: May their force be with us"+ " And the reflection is: Today is Teacher Appreciation Day, recognizing teachers as a force for good—especially in this pandemic year. Through John Baptist de La Salle, patron saint of all teachers, we might say the best educators naturally follow a “Lasallian” philosophy of education. “The Lasallian tradition emphasizes the fact that all people, especially the young, have an inherent dignity which comes from their being created in the image of God,” explains St. Mary’s College of Winona. “Education is a means of developing this dignity for the well-being of each student as well as for the well-being of our society.” Thank a teacher today.";
          //date_local = "entro a if";
        }
        //fin lineas para atrapar "last monday"
        
        if (fecha === '2023-09-20')
        {
          //aqui poner la reflexión
          mi_reflexión = "The last wednesday reflection - september 20 2023 "+fecha;
          //mi_reflexión = "The title of the reflection is: May their force be with us"+ " And the reflection is: Today is Teacher Appreciation Day, recognizing teachers as a force for good—especially in this pandemic year. Through John Baptist de La Salle, patron saint of all teachers, we might say the best educators naturally follow a “Lasallian” philosophy of education. “The Lasallian tradition emphasizes the fact that all people, especially the young, have an inherent dignity which comes from their being created in the image of God,” explains St. Mary’s College of Winona. “Education is a means of developing this dignity for the well-being of each student as well as for the well-being of our society.” Thank a teacher today.";
          //date_local = "entro a if";
        }
            
        // Este es el today september 21 2023 
            
        //if (date_local === '10/05/2021' || date_local === '10/mayo/2021' || date_local === '2021-05-10')
        if (fecha === '2023-09-21')
        {
          //aqui poner la reflexión
          //mi_reflexión = "Your today reflection is: Reflexión of thursdayday september 21 2023 "+'and errDB is '+ errDB;
          mi_reflexión = "The last thursday reflection - september 21 2023.";
          //mi_reflexión = "The title of the reflection is: Celebrate the dignity of diversity"+ " And the reflection is: Though today’s “Cinco de Mayo” celebrations commemorate but a single Mexican victory over France at the Battle of Puebla on May 5, 1862, in the United States it has become an opportunity to honor the heritage and culture of Mexican people. As folks revel in parades and festivals, enjoying Mexican cuisine and music, we recall these words from the Catechism of the Catholic Church: “Human interdependence is increasing and spreading through the world . . . embracing people who enjoy equal natural dignity.” Celebrate Cinco de Mayo with a prayer of gratitude for the richness of human diversity.";
          //date_local = "entro a if";
        }
        // este es el tomorrow del día actual september 21 2023
        if (fecha === '2023-09-22')
        {
          //aqui poner la reflexión
          //mi_reflexión = "Your tomorrow reflection is: Reflexión of june 9 2022";
          //mi_reflexión = "I'm sorry (line 319). I can only give you reflections up to today (thusday september 21 2023). You'll have to wait for future reflections!"+" "+fecha;
           mi_reflexión = "The last friday reflection - september 22 2023.";
          //date_local = "entro a if";
        }
        
       // Inicio fechas por palabras como "last sunday", "last friday", "last monday", etc
       
       // NOTAS IMPORTANTES.-
       // Alexa maneja estas frases en bloques de semana de monday-a-sunday, esto es, si estamos en un 
       // miércoles, el "last tuesday" hace referencia al martes de la semana ANTERIOR. Si queremos el martes de la semana ACTUAL
       // hay que referirse como "this tuesday"
       // 
       // Para Alexa las frases con "last" son de la semana ANTERIOR como: "last sunday", "last friday",
       // si se quiere invocar a los días de ESTA semana hay que decir "this sunday", "this friday"
       
       // Las palabras como "Sunday's", "Monday's", etc. Alexa las endiende como a futuro a partir del día actual, por eso
       // éstas necesitan validación, de acuerdo al día actual de la consulta
       //
       // las pruebas para el "this monday" lo estoy haciendo a partir de que hoy es martes 19 septiembre 2023
       
       // por lo que last monday es el 18 de septiembre 2023 (si hoy es jueves 21 de septiembre)
        if (fecha === '2023-10-02')
        {
          //aqui poner la reflexión
          //mi_reflexión = "The last monday reflection - may 10 2021."+" today_comp: "+today_comp+" fecha: "+ fecha;
          //nota del jueves 2 de junio 2022: parece que la palabra "this" hace referencia al "próximo" día de la semana
          //                                 esto es, si ahorita es jueves el "this monday" hace referencia al próximo lunes
          mi_reflexión = "The last monday reflection - october 2 2023.";
          //date_local = "entro a if";
        }
       if (fecha === '2023-10-03')
        {
          //aqui poner la reflexión
          mi_reflexión = "The today reflection - "+fecha;
          //date_local = "entro a if";
        }
       // por lo que el this monday es el 25 de septiembre 2023 (si hoy es jueves 21 de septiembre)
        if (fecha === '2023-10-09')
        {
          //aqui poner la reflexión
          mi_reflexión = "The this monday reflection - october 9 2023.";
          //date_local = "entro a if";
        }
        if (fecha === '2023-10-01')
        {
          //aqui poner la reflexión
          //mi_reflexión = "The last sunday reflection - november 14 2021."+" today_comp: "+today_comp;
          mi_reflexión = "The last sunday reflection - october 1 2023.";
          //date_local = "entro a if";
        }
        if (fecha === '2023-09-30')
        {
          //aqui poner la reflexión
          //mi_reflexión = "Your tomorrow reflection is: Reflexión of june 9 2022";
          //mi_reflexión = "I'm sorry (line 319). I can only give you reflections up to today (thusday september 21 2023). You'll have to wait for future reflections!"+" "+fecha;
           mi_reflexión = "The last saturday reflection - october 30 2023.";
          //date_local = "entro a if";
        }
       // por lo que el last sunday es el 17 de septiembre 2023 (si hoy es jueves 21 de septiembre)
        if (fecha === '2023-10-1')
        {
          //aqui poner la reflexión
          //mi_reflexión = "The last sunday reflection - november 14 2021."+" today_comp: "+today_comp;
          mi_reflexión = "The last sunday reflection - october 1 2023.";
          //date_local = "entro a if";
        }
        
         // por lo que el last saturday es el 17 de septiembre 2023
        if (fecha === '2023-09-30')
        {
          //aqui poner la reflexión
          mi_reflexión = "The last saturday reflection - september 30 2023.";
          //date_local = "entro a if";
        }
       
        // por lo que el last friday es el 15 de septiembre 2023
        if (fecha === '2023-09-29')
        {
          //aqui poner la reflexión
          mi_reflexión = "The last friday reflection - september 29 2023.";
          //date_local = "entro a if";
        }
       
        // por lo que el last thursday es el 14 de septiembre 2023
        if (fecha === '2023-09-28')
        {
          //aqui poner la reflexión
          mi_reflexión = "The last thursday reflection - september 28 2023.";
          //date_local = "entro a if";
        }
       
       // por lo que el last wednesday es el 13 de septiembre 2023
        if (fecha === '2023-09-27')
        {
          //aqui poner la reflexión
          mi_reflexión = "The last wednesday reflection - september 27 2023.";
          //date_local = "entro a if";
        }
       
       // por lo que el last tuesday es el 19 de septiembre 2023
        if (fecha === '2023-09-26')
        {
          //aqui poner la reflexión
          mi_reflexión = "The last tuesday reflection - september 26 2023.";
          //date_local = "entro a if";
        }
       // fin fechas por palabras como "last sunday", "last friday", "last monday"
       
       // inicia validar si la fecha del usuario es posterior a hoy
       if (fecha > today_comp && ban_week === 0)
        {
          //aqui poner la reflexión
          //mi_reflexión = "Your yesterday reflection is: Reflexión del 21 de julio de 2020";
         // mi_reflexión = "I'm sorry (line 436). I can only give you reflections up to today. You'll have to wait for future reflections! "+ "fecha "+fecha;
         mi_reflexión = "I'm sorry (line 436). I can only give you reflections up to today. You'll have to wait for future reflections! ";
        }
       
       // fin validar si la fecha del usuario es posterior a hoy
       
       
        const speechText = mi_reflexión + " line 475 variable ban_week=  "  + ban_week;
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('Do you want to hear another reflection (line 470)?')
            .getResponse();
      
    },
};
//fin DiaAnteriorIntentHandler
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye from Weekly Reflections!!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        ReflectionHandler,
        DiaAnteriorIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
