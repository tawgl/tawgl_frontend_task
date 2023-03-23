# Frontend candidate task

## Task description

Task is to integrate upcoming interview API in the upcoming interview widget.

Make your changes in @pages/dashoboard/Dashboard.tsx
You can make use of the abstracted axios interceptor (already imprted in Dashboard.tsx) intstead of native axios.
You are free to use any css libraries of your choice.

Enpoint to be used : http://interview-service-alb-355656776.ap-south-1.elb.amazonaws.com/api/v1/interviews

Apply the below filters to the endpoint to get the list of interviews from the current date

**filter: scheduledTime ge {fromDate}** <br />

**sort: scheduledTime asc** <br />

After retrieving the list of interviews, categorize them into interviews scheduled for today, tomorrow and other dates as in the design attached.
Values to be retirieved are candidate name and scheduledTime
Role detail i.e "Role Senior Developer" can be hard coded

## Installation

Clone the repo and run `yarn install`

## Start

After the successfull installation of the packages: `yarn dev`

## credentials

username : praveesh

password : c0gn!tOD2fault
