//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
        uri: 'mongodb://admin:admin123@ds111559.mlab.com:11559/sandbox', //place the URI of your mongo database here.
    },
    googleMaps: {
        key: 'AIzaSyCte6H2BCsUXGu4l37m67Ohohl33W4dzuw'
    },
    port: 8080
};