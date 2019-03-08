let mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')
const server = '127.0.0.1:27017'
const database = 'bus_tracker_database'
const user = 'naveen'
const password = 'password'
mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)
// https: //stackoverflow.com/questions/9127174/why-does-mongoose-have-both-schemas-and-models
let user_schema = new mongoose.Schema({
    _id: {
        type: 'String'
    },
    id: {
        type: 'String'
    },
    isonroute: {
        type: 'Boolean'
    },
    direction: {
        type: 'Number'
    },
    location: {
        accuracy: {
            type: 'Number'
        },
        altitude: {
            type: 'Number'
        },
        bearing: {
            type: 'Number'
        },
        bearingAccuracyDegrees: {
            type: 'Number'
        },
        complete: {
            type: 'Boolean'
        },
        elapsedRealtimeNanos: {
            type: 'Number'
        },
        fromMockProvider: {
            type: 'Boolean'
        },
        latitude: {
            type: 'Number'
        },
        longitude: {
            type: 'Number'
        },
        provider: {
            type: 'String'
        },
        speed: {
            type: 'Number'
        },
        speedAccuracyMetersPerSecond: {
            type: 'Number'
        },
        time: {
            type: 'Number'
        },
        verticalAccuracyMeters: {
            type: 'Number'
        }
    }
})
user_schema.plugin(timestamp)
module.exports = mongoose.model('user', user_schema)