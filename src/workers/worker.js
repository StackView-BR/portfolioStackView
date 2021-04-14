function handleMessage(event) {

    const data = <><div className="renderW" style={{height:"100vh", width:"100vw",background:"green"}}>carai</div></>;

    self.postMessage(data);
  };
  
  self.addEventListener('message', handleMessage);