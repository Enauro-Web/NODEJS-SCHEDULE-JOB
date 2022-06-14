const schedule = require('node-schedule');
const {db} = require('./firebase');

const myJob = schedule.scheduleJob('myJob', '*/30 * * * * *', async () => {
    const date = new Date();
    console.log('I ran .....', date);

    const querySnapshot = await db.collection('contacts').get();
    
    const contacts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    console.log(contacts);

});

//* https://crontab.guru/
//* node schedule allow adding a 6th field for seconds
//  */30 * * * * * --> every 30 seconds
//  * */5 * * * *   --> every 5 minutes
//  * * * * * * --> every second

// schedule.cancelJob('myJob');
// myJob.cancel();