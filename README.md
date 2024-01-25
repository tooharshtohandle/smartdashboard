This is the Readme file

the way this project works is that the user query to generate graphs is sent to chatgpt which returns a sql query to extract data for the graph 

the sql query is then run on the database to extract the data and the data is sent back to the front end

this prototype currently only supports dynamically generated pie charts and bar charts

go through the system prompts in the callingchatgpt file to better understand the workings

those prompts are database specific so modify if needed depending on data changes


