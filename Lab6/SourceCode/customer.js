const fs =  require('fs');
const yargs = require('yargs');
const custdata = require('./custdata.js');

const firstname = {
    describe: 'Customer FirstName',
    demand : true,
    alias : 'f'
}

const lastname = {
    describe: 'Customer LastName',
    demand : true,
    alias : 'l'
}

const custid = {
    describe: 'Customer Id',
    demand : true,
    alias : 'i'
}

const email = {
    describe: 'Customer Email',
    demand : false,
    alias : 'e'
}

const phone= {
    describe: 'Customer Phone',
    demand : true,
    alias : 'p'
}


const argv =  yargs

    .command('add','Add Customer',{
        fn: firstname,
        ln: lastname,
        id:custid,
        ph: phone,
        em: email
    })

    .command('list','List all Customers')
    
    .command('read','Read Customer',{
        id:custid
    })

    .command('remove','Remove Customer',{
        id:custid, 
    })
    .command('update','Update Customer',{
        fn: firstname,
        ln: lastname,
        id:custid,
        ph: phone,
        em: email
    })

    .help()
    .argv;





var command = yargs.argv._[0];


if (command === 'add'){
    var node = custdata.addNode(argv.fn,argv.ln,argv.id,argv.ph,argv.em);
    if (node){
      custdata.logNode(node);                               
    } else{
      console.log("Customer already Exists");
    }
}


else if (command === 'list') {
  var AllNodes = custdata.getAll();
  console.log(`Printing ${AllNodes.length} node(s).`);
  AllNodes.forEach((node)=>{                                
    custdata.logNode(node);
  });
}


else if (command === 'read') {
   var node = custdata.getNode(argv.id);
   if(node){
    custdata.logNode(node);                                 
          }
   else{
    console.log("Customer not Found");
   }
}


else if (command === 'remove') {
    var Removednode = custdata.removeNode(argv.id);
    var message = Removednode ? 'Customer Removed' : 'Customer not Found';
    console.log(message);
}

else if (command === 'update') {
    let Updatednode = custdata.updateNode(argv.fn,argv.ln,argv.id,argv.ph,argv.em);
    let message = Updatednode? 'Customer not Updated' : 'Customer was Updated';
    console.log(message);
}



else{
  console.log('Command not Recognized'); 
}
