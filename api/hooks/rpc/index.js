/**
 * rpc hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */
const grpc = require('grpc')
const notesProto = grpc.load('./proto/config.proto')
const server = new grpc.Server()
module.exports = function defineRpcHook(sails) {

  return {

    /**
     * Runs when this Sails app loads/lifts.
     */
    initialize: async function (cb) {

      sails.on('hook:orm:loaded', function () {
        // console.log(Config);
        var config = Config;

        sails.log.info('Initializing custom hook (`rpc`)');

        server.addService(notesProto.ConfigService.service, {
          list: async (_, callback) => {

            var userRecord = await Config.find({});

            console.log(userRecord);

            callback(null, userRecord);
          },
          insert: async (call, callback) => {
            let note = call.request;
            console.log(note);
            var userRecord = await Config.create(note);
            console.log(userRecord);
            callback(null, userRecord);
          },
          update: async (call, callback) => {
            let note = call.request;
            let id = call.request.id;
            console.log(note);
            var userRecord = await Config.update({"id": id})
              .set(note)
              .fetch();
            console.log(userRecord);
            callback(null, userRecord[0][0]);
          },
          delete: async (call, callback) => {
            console.log(call.request.id);
            var userRecord = await Config.destroy({"id": call.request.id});
            console.log(userRecord);
            callback(null, userRecord);
          },
          find: async (call, callback) => {
            // let note = call.request;

            console.log(call.request.id);
            var userRecord = await Config.findOne({"id": call.request.id});
            console.log(userRecord);
            callback(null, userRecord);
          }
        });


        server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
        console.log('Server running at http://127.0.0.1:50051')
        server.start()

        // Finish initializing custom hook
        // Then call cb()
        return cb();

      });
    },


    routes: {
      before: {
        'GET /*': function (req, res, next) {
          console.log(Config);
          return next();
        }
      },
      after: {
        'GET /*': function (req, res, next) {
          return next();
        }
      }
    },

    registerActions: function (cb) {
      console.log("*****************************");
      console.log(Config);
      return cb();

    }

  };

};
