//{graphneeded === true && graphType === 'line' && <LineChart data={graphData} />}
  //{graphneeded === true && graphType === 'bar' && <BarChart data={graphData} />}
  //const renderdynamicgraph = async () =>{
  //  if(graphneeded===true){
    //  if(graphType=='line'){
    //    document.getElementById("chart-container").innerHTML=<LineChart data={graphData}></LineChart>;
    //  }
    //  if(graphType=='bar'){
    //    document.getElementById("chart-container").innerHTML=<BarChart data={graphData}></BarChart>;
    //  }
    //}
  //}
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log("in da func");
      e.preventDefault();
      handleUserQuery();
    //  renderdynamicgraph();
    }
  };