# Eventy : 

Eventy is a website that allows organizations to publish their events and allows users to browse events and join them.

## **The Problem** :no_entry_sign: :-

These days there are several events in different fields that are being organized in Gaza.
Organizations publish the announcements on different social media platforms. As a reason, reaching those announcements and knowing 
about them is so hard. And, it causes a big waste of time. 
So, there is no one place for all events that happen in Gaza.

## **The solution** :bulb: :-

As a solution, we have decided to build the Eventy application which aims to give users the best journey while searching and viewing common and uncommon events in Gaza in a shorter time. So, people have more chances to be more social and attend more events.
On the other hand, giving a good chance for organizations in Gaza to reach more audience. 

## **User Stories**  :books: 

### **User who want to join an event** :book: 
   #### As a user, I can : 

- View the top three events and their location and times
- View all events and their details (location-date-name-sponsors-description-price)
- Filter all the events by (category, city, date, price)
- Can attend any event 
- Receive an email with all the details about the event
- Add a booked event to a calendar as a reminder

### **User who is an Organizer** :1234: 
   #### As an organizer, I can : 
- Create a new account 
- Sign in to my account
- Publish a different kinds of events
- Specify the events details (Name - Sponsor - Price - Description - Time - Location)
- Control my events (delete - edit)
- Know the number of attendance for each published event by me

## **User Journey**  :pencil2:

### **User who want to join an event** :book:
 When the user enters the Event web application home, he/she can view different sections that offer (Top Events - Free events - Online Events) and Organizations view events. He/She can choose the desired section to view by clicking on view all and transferring to the events page. At the event page, she/he can use the filter section above at event page to filter events by categories.
 
If the user clicks on the view organization button on the home page, he will be moved to an organizations page in which he/she can view different organizations in Gaza. Also, users can click on the desired organization to view all events provided by them.
 
When a user clicks on a specific chosen event, he/she will be moved to an event page that contains the whole information about the event and gets a ticket button to book a ticket for an event and add the event to the calendar by clicking on add to calendar button.

### **User who is an organizer** :1234:

An organizer should register in Eventy application to publish different events. When an organizer is logged in to Eventy he/she can view an organization page. 
 Creating an event button that appears on the organization page leads the user to create a form which has to be fulfilled to create an event. 
 The organizer will have an additional tap ' my events ' which presents all his events and can use the 'logout' tap to checkout from his account





## **How to Launch App Locally** :-

*  clone this repo by typing this command in the terminal:  
`https://github.com/GSG-G10/eventy.git`

*  Run `npm i` to install the packages for the app in general.

*  Run `cd client` and `npm i` to install the packages for the client- React Js.

### Database Setup  :clipboard:

> Make sure you have installed PostgreSQL and pgcli 

```sql=
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER  DATABASE {database name} OWNER TO {user name};
```
- Test DB:
- Do the same as before but make sure to change the names.

* Run the following command in the database pgcli terminal  
`\ I server/database/config/build.sql`
and the command 
`\ I server/database/config/fakeData.sql`
to add fake Data

### **Environment variables:**
Environment variables are one of the ways we keep our products safe. If you want to access our app locally you will need to add your own.
- create `.env` file
- add your Environment variables
```shell=
DEV_DB_URL= # Your development PostgreSQL connect
DATABASE_URL= # Your production PostgreSQL connect
```

### Start the App :electric_plug:

To start the App Locally you can start the server First then start client-side or vice versa!
> To run Server, In your terminal Type: 

    `npm run dev` then you should be able to go to (http://localhost:5000/) 
> To run client-side, In your terminal Type:    

    `cd client` => `npm start` then you will be able to run (http://localhost:3000/) 

Now you can view the app live in the Browser!

## **Technologies** :computer: :-

- BackEnd: **Node JS & Express JS**
- FrontEnd: **React JS**
- Database: **PostgreSQL**
- Styling: **CSS**
- Libraries: **TailWind CSS**

## **Lead Mentor** :sunglasses::-

- Muhammad Abdulhadi

## **Team Members** :-

- ```Umar Salah```
- ```Ahmad Sabbah```
- ```Noor Abunamus```

## **Resources** :-

- [Node Js](https://nodejs.org/en/)
- [React Js](https://reactjs.org/)
- [Express](http://expressjs.com/)
- [TailWind](https://tailwindcss.com/)