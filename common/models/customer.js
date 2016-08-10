module.exports = function(Customer) {

  // Customer.status = function(cb) {    
  //   var currentDate = new Date();    
  //   var currentHour = currentDate.getHours();    
  //   var OPEN_HOUR = 6;    
  //   var CLOSE_HOUR = 20;    
  //   console.log('Current hour is ' + currentHour);    
  //   var response;    
  //   if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {      
  //     response = 'We are open for business.';    
  //   } else {      
  //     response = 'Sorry, we are closed. Open daily from 6am to 8pm.';    
  //   }    
  //   cb(null, response);  
  // };
  //
  //   
  // Customer.remoteMethod('status', {      
  //   http: {
  //     path: '/status',
  //     verb: 'get'
  //   },
  //   returns: {
  //     arg: 'status',
  //     type: 'string'
  //   }    
  // });

  Customer.greet = function(cb) {      
    cb(null, 'Greetings Mike');    
  }

  Customer.remoteMethod('greet', {          
    http: {
      path: '/greet',
      verb: 'get'
    },
    returns: {
      arg: 'greeting',
      type: 'string'
    }
  });

  // Customer.afterRemote('find', function(ctx, modelInstance, next) {
  //   console.log('This is the context request', ctx.req);
  //   console.log('This is the model instance', modelInstance);
  //   next();
  // });
};
