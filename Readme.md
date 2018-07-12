## Cold Creek Task

##Instalation

Clone the repository:
``` shell
$ git clone
```
Create DataBase and User:
``` shell
$ mysql -u 'a username' -p
mysql> CREATE DATABASE misspelt;
mysql> CREATE USER 'coldcreek'@'localhost' IDENTIFIED BY 'coldcreek';
mysql> GRANT ALL PRIVILEGES ON misspelt . * TO 'coldcreek'@'localhost';
mysql> exit;
```

Move into the applications directory:
``` shell
$ cd <project folder>
```

Installation dependencies:
``` shell
$ npm i
```
Start the development web server:
``` shell
$ npm run dev
```
Project will be available at localhost:3000

Can change the settings in .env file in project root folder
``` shell
ERROR_SEND=on - error sender trigger
ERROR_VALUE=0 -  value by which is sent alarm mail
COUNT_VALUE_FOR_ERROR=4 - sum values by which is sent alarm mail
MIDNIGHT=0 - hour when mail with chart is sending
```