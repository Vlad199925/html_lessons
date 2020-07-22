console.log ('Request data')
const p = new Promise (function(resolve,reject){
    setTimeout(()=>{
        console.log ('Preparing Data')
        const process = function (status) {
            status = "working";
        }
        resolve (process);
    },2000)
})
    p.then(function(info){
        return new Promise (function(resolve,reject){
            setTimeout(()=>{
                info.modified = true;
               resolve(info);
            },2000)
        })
})
    .then(function (TotallyInfo){
        console.log ("Data received", TotallyInfo);
    })
    .finally (()=>console.log('Finally'));
    .catch (err => console.error('Error: ', err));
