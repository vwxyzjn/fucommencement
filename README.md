# Furman Commencement App 


## High-level objective

* allow any person access to app using web crossplatform

## Back end dev list

* **high-priority**
    * 
* **low-priority**
    * notify staff user via email daily indicating how many submissions and names of submitted applications


## Info-collection front end dev list

* (finished) acquire degree-application information
* (finished) acquire **photos** of students
* acquire **sound** file of student pronouncing name exactly as intended for the event 
    * is it possible to make this requirement optional?
        * **HARD** requirements
    * cross-platform solution for uploading audio files is difficult
        * IOS and andriod, for example, doesn't support related API to various degree
            * http://caniuse.com/#feat=mediarecorder
            * http://caniuse.com/#feat=stream 
        * Chrome requires ``https`` for record audio
            * https://stackoverflow.com/questions/34820578/how-to-capture-audio-in-javascript
    * maybe only a small portion of people would like to have their name pronounced in a specific way.
    * even though desktop always support the audio recording API, the university computers don't have a microphone.
        * it's possible to arrange an event for students to go some specific places with computers that have microphone
    * current workaround is to just use the uploading API. 

## Admin front end dev list

* allow for staff user to review submissions at rest in database; add, delete, modify) records through GUI
* allows for staff user to add or remove data to Honors field = drop-down (summa cum laude, magna cum laude, cum laude, with distinction) through GUI


## Event-use front end dev list

* not priority now.


## Questions

* are we writing an app to automatically read the existing paper application?
    * Is someone going to manually input the data from paper application to our app?
    * Is student going to directly use our app?
* what does this mean?
    * "allow for save and return, date and time stamp submission"
    * especially what does ``return`` mean in this context?
