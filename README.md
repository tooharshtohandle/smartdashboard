This is the Readme file

the way this project works is that the user query to generate graphs is sent to chatgpt which returns a sql query to extract data for the graph 

the sql query is then run on the database to extract the data and the data is sent back to the front end

this prototype currently only supports dynamically generated pie charts and bar charts (also the data for the Standard KPIs are extracted from the mock data file, we plan to make changes so that the KPI data is extracted directly from the database once actual dynamic database is finalised)

go through the system prompts in the callingchatgpt file to better understand the workings

those prompts are database specific so modify if needed depending on data changes

Datbase info is in the dbqueries file

The sample data is here; https://1drv.ms/x/s!Alrm68gM8UZQilKDFGHcUKv5la0X?e=cdrvgV

The data might be pretty inconsistent and give weird results at times, apologies in advance as that wasnt the main focus of this project as of now and was bound to change :(

Long term fix for this project is using your own personalized LLM instead of CHATGPT and a Dynamic database
