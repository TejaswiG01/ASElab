const fs =  require('fs');

var fetchNodes = () => {
  try {                          
    var nodesString = fs.readFileSync('customer-data.json')
    return JSON.parse(nodesString);
  } catch(e){
    return [];
  }
};

var saveNodes = (nodes) => {
  fs.writeFileSync('customer-data.json',JSON.stringify(nodes));
};



var addNode = (fn,ln,id,ph,em) => {   
    var nodes = fetchNodes();
    var node = {fn,ln,id,ph,em}
    var duplicateNodes =  nodes.filter((node) => { 
      return node.id === id;
    });

    if (duplicateNodes.length === 0){
      nodes.push(node);
      saveNodes(nodes);
      return node
    }
};



var getAll = () => {
    return fetchNodes();
};




var getNode = (id) => {
    var nodes = fetchNodes();
    var getNodes =  nodes.filter((node) => { 
    return node.id === id;
    });

    return getNodes[0]
};


var updateNode= (fn,ln,id,ph,em) => {
    var first=fn;
    var last=ln;
    var cid=id;
    var pho= ph;
    var eml=em;
    removeNode(cid);
    addNode(first,last,cid,pho,eml);

  };



var removeNode = (id) => {
    var nodes = fetchNodes(); 
    var filteredNodes =  nodes.filter((node) => { 
    return node.id !== id;
    
    });

    saveNodes(filteredNodes); 
    return nodes.length !== filteredNodes.length
};



var logNode = (node) => { 
    console.log('--');
    console.log(`Customer FirstName: ${node.fn}`);
    console.log(`Last Name: ${node.ln}`);
    console.log(`Customer Id: ${node.id}`);
    console.log(`Phone: ${node.ph}`);
    console.log(`Email: ${node.em}`);
        
};



module.exports = {
  addNode, getAll, removeNode, getNode,logNode,updateNode
};

