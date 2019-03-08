let mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')
const server = '127.0.0.1:27017'
const database = 'bus_tracker_database'
const user = 'naveen'
const password = 'password'
mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let user_schema_final = mongoose.Schema({
    direction: {
        type: 'Number'
    },
    id: {
        type: 'String'
    },
    isOnRoute: {
        type: 'Boolean'
    },
    location: {
        accuracy: {
            type: 'Number'
        },
        altitude: {
            type: 'Number'
        },
        latitude: {
            type: 'Number'
        },
        longitude: {
            type: 'Number'
        },
        speed: {
            type: 'Number'
        },
        time: {
            type: 'Number'
        }
    }
})
user_schema_final.plugin(timestamp)
module.exports = mongoose.model('user_final', user_schema_final)