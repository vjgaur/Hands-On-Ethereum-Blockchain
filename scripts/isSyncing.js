/**
 * web3.eth.isSyncing
 * This convenience function calls the callback everytime a sync 
 * starts, updates and stops.
 * 
 * Script for demonstrating the isSync functionality
 * 
 * To Test:
 * 1) Launch geth
 * 2) Attach to geth
 * 3) Copy paste the code below in attached console
 * 
 * Repeat
 * 4) Kill geth & start
 * 5) In attached console you would see change in SYNCHING messages
 */

web3.eth.isSyncing(function(error, sync){
    if(!error) {
        // sync = boolean OR object
        if(sync === true) {
           // true receieved
           console.log("SYNCHING: true")
        } else if(sync) {
           // object received
           console.log("SYNCHING: ", sync.currentBlock);
        } else {
            // false received
            console("SYNCHING: false")
        }
    } else {
        console.log("SYNCHING: ERROR");
        console.log(error);
    }
});