console.log ('Request data')
const p = new Promise (function(resolve,reject){
    setTimeout(()=>{
        console.log('Preparing Data')
        const PersonInfo = {
            name: "Viktor" ,
            gender: "male"
        }
         resolve (PersonInfo);
    },2000)
})
    p.then(function(info){
        return new Promise (function(resolve,reject){
            setTimeout(()=>{
                haveJob = true;
                resolve(info);
            },2000)
        })
})
    .then(function (TotallyInfo){
        console.log ("Data received", TotallyInfo);
        TotallyInfo.age = 101;
        return TotallyInfo;
    })
    .then(ModifiedData => {
        console.log ("Modified", ModifiedData);
    })
    .catch(function(err){
        console.log ("Error", err);
    })

    .finally (()=>console.log('Finally'));

    const sleep = ms => 
    {return new Promise (resolve => {setTimeout(()=>
        resolve(), ms)
    })
}
sleep(5000).then (()=> console.log ('After 5 sec'));

Promise.all([sleep(10000).then(()=> console.log ("..qweqwe")),])


