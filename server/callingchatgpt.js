const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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"
});

const dbfields=""
const getChatGPTResponse = async (query) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role":"system","content":"you are working with a mysql table called dell with fields { Srno INT, OrderType VARCHAR(10),PRODUCT_ID VARCHAR(20),PRODUCT_PurchasingPrice INT,P_CostPrice INT,P_SellingPrice INT,order_qty INT,Total_CP_SP INT,InventoryCountattheinstantof_placing_order INT,Supplier_id VARCHAR(20),Order_id VARCHAR(20),IsLateDeliveryBecauseOfStockOut VARCHAR(10),CostsOfGoodsSold INT,DOI INT,CountOfInventoryAFTER INT,valueofinv INT,OrderPlacedON DATE,PromisedDelDate DATE,ActualDelDate DATE,DelStatus VARCHAR(20),OFR_SOT VARCHAR(10),Satisfied VARCHAR(5),WhenWereSoldGoodsDeliveredBySupplier DATE}" },
        {"role":"system","content":"you help run an interactive supply chain dashboard, you may or may not have to generate a sql query to extract data from a database, and this sql query may or may not be required to generate a graph"},
        {"role":"system","content":"Minimum values are [1,(Min OrderType value),'P_001',100,120,150,1,6240,0,'S_001','S_1','No',120,0,50,6120,'1/1/2018','1/10/2018','1/6/2018','Early Delivery','No','No','1/6/2018']"},
        {"role":"system","content":"Maximum values are [38390, (Max OrderType value),'P_025',2500,3000,3750,200,497500,274,'S_025','C_38390','Yes',75000,343,274,816000,'12/15/2018','12/27/2018','12/30/2018','Late Delivery','Yes','Yes','1/16/2018']"},
        {"role":"system","content":"return response in the following parsable JSON format {'sqlquery':'sqlquery','response':'your text response','calculationneeded':'true or false','graphneeded':'true or false','graphtype':'line or stackedbar or bar or pie'}"},
        {"role":"system","content":"evaulate the user query to figure whether the user wants a graph or an answer,return graphneeded as true or false acordingly, return calculation as true if sql query is needed to be evaluated instead of a graph, you can only have need for a graph OR a calculation not both at the same time, return graph type as no if not needed"},
        {"role":"system","content":"sometimes the user query might not require either a graph or a sql result, just your response,in that case calculationneeded and graphneeded are both false"},
        {"role":"system","content":"in case a graph is needed, the sql query you give will be used to extract the data to make the graph so MAKE SURE the the sql query OUTPUT is the SAME format as needed by the graph INPUT"},
        {"role":"system","content":"the format of input for a stackedbarchart is [{ id: 'Category 1', element1: element1_value, element2:element2_value,... },{ id: 'Category 2', element1: element1_value, element2:element2_value,...},{ id: 'Category 3', element1: element1_value, element2:element2_value,...},...]; where 'Category 1/2/3 is the x axis of the graph(for example month or country) and elements are the things stacked as bar graphs and element value is the height of each indidivual element in the y axis per category"},
        {"role":"system","content":"the format of input for a pie chart is  [{id:'element1',value:element1_value},{id:'element2',value:element2_value,},{id:'element3',value:element3_value,},...]; MAKE SURE YOUR SQL OUTPUTS'S OUTPUT HAS id AND value keywords in the result"},
        {"role":"system","content":"the format of input for a line chart is [{id: 'Element1',data: [{x:xaxis_value1,y: 101,},{x:xaxis_value2,y: 75,},{x:xaxis_value3,y: 36,},],},{id: 'Element2',data:[{x:xaxis_value1,y: 212,},{x:xaxis_value2,y: 190,},{x:xaxis_value3,y: 270,},],},]; where xaxis_value is the unit on the x axis (such as dates) and y value is the heigh on y axis and each element is an independent line. Make sure you dont miss anything and used grouped by and aggregation into a json array if needed"},
        {"role":"system","content":"never return any field as empty and make sure the sql query specifies FROM dell or it wont work AND USE CORRECT COLUMN NAMES"},
        {"role":"system","content":"if question isnt related to dell table/neither calculation nor graph is needed, reply to the question AND RETURN sqlquery in your response as SELECT * FROM dell LIMIT 1;"},
        {"role":"system","content":"NEVER LEAVE THE sqlquery IN YOUR RESPONSE AS BLANK"},
        {"role":"system","content":"assume the user questions are about the data table dell unless specified explicitly"},
        {"role":"system","content":"Remeber that Dates in MySQL are in YYYY-MM-DD"},
        {"role":"system","content":"ONLY RESPOND IN THE GIVEN PARSABLE JSON FORMAT AND NOTHING ELSE"},
        {"role": "user", "content": query}],
      max_tokens: 2500
    });
    //console.log(chatCompletion.choices[0].message.content)

    const parsableJSONresponse = chatCompletion.choices[0].message.content;
    const parsedResponse=JSON.parse(parsableJSONresponse);
    console.log("sql query is", parsedResponse.sqlquery)
    console.log("rest response is", parsedResponse.response)
    console.log("calculation needed is", parsedResponse.calculationneeded)
    console.log("graph needed is", parsedResponse.graphneeded)
    console.log("graph type is", parsedResponse.graphtype)
    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error('Error communicating with ChatGPT:', error.message);
    throw error;
  }
};

module.exports = {
  getChatGPTResponse,
};
