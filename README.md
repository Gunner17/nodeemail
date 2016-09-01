# nodeemail
Trying to build an email app with node js and mongoDB

### Installation Steps

1. Clone repository https://github.com/Gunner17/nodeemail.git
2. Go inside nodeemail/email/
3. Install the dependencies - npm install
4. start the server : nodemon app.js
5. The app would run in http://localhost:3000/api/setupEmails in the browser.
7. we can delete, fetch, search for the existing records (for now).

Set Up/Add Email Records
------------------------
http://localhost:3000/api/setupEmails


Delete Email Record
-------------------
To delete record, I am sending a POST request through PostMan.

Content-Type: application/json

type : DELETE

body > raw > JSON(application/json) >
{
    "id": "57c7e1c01d54948b534b953a"
}

Search record using from address
--------------------------------
Can search records using the sender's address.
http://localhost:3000/email/search/anamitra@example.com


Search All Records
------------------
http://localhost:3000/email/search
