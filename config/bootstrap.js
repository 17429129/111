/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  var person = {"City": "Hawaii", "Price":"$6400", "Class":"Economy","Deal":"10/29/2017","Quota":"100","daterange":"10/01/2017-10/31/2017","Image":"http://www.neeu.com/uploads/images/2014/4/25/1398403999104.jpg"};

    Person.create(person).exec( function(err, model) {});

 person = {"City": "Walnut Creek", "Price":"$7500", "Class":"Business","Deal":"10/29/2017","Quota":"150","daterange":"10/01/2017-10/31/2017","Image":"http://towngoodiesch.wdfiles.com/local--files/town:us-ca-walnut-creek/walnut-creek.jpg"};

    Person.create(person).exec( function(err, model) {});

    person = {"City": "Peul", "Price":"$8600", "Class":"Economy","Deal":"10/29/2017","Quota":"160","daterange":"10/01/2017-10/31/2017","Image":"https://pbs.twimg.com/media/BZ1aOo8CMAA0V_s.jpg"};

  Person.create(person).exec( function(err, model) {});

  person = {"City": "Rocky Mountain", "Price":"$5300", "Class":"Economy","Deal":"10/29/2017","Quota":"110","daterange":"10/01/2017-10/31/2017","Image":"http://static.dcfever.com/media/sharing/06/08/15/l627521155610309.jpg"};

  Person.create(person).exec( function(err, model) {});
  cb();
};
