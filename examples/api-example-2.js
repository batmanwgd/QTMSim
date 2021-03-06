"use strict";
/**
 * Created by sdiemert on 2017-03-29.
 */

const qtmjs = require("../qtmjs");

const T = "000#";

const Q = qtmjs.buildQTMFromFile('examples/qtm-parity.csv', 4);

Q.execute(qtmjs.buildTape(T),0,10, function(Q){
    console.log(Q.getSuperposition().toString());
});

console.log("------------");
console.log(Q.measure().toString());