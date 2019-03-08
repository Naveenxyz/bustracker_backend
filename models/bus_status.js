let mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')
const server = '127.0.0.1:27017'
const database = 'bus_tracker_database'
const user = 'naveen'
const password = 'password'
mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)
let bus_info_schema = new mongoose.Schema({
        _id: {
            type: 'String'
        },
        bus1: {
            is_live: {
                type: 'Boolean'
            },
            time: {
                type: 'Number'
            },
            location: {
                latitude: {
                    type: 'Number'
                },
                longitude: {
                    type: 'Number'
                }
            }
        },
        bus2: {
            is_live: {
                type: 'Boolean'
            },
            time: {
                type: 'Number'
            },
            location: {
                latitude: {
                    type: 'Number'
                },
                longitude: {
                    type: 'Number'
                }
            }
        }
    }

)
bus_info_schema.plugin(timestamp)
module.exports = mongoose.model('bus', bus_info_schema)