

export const insert = (tbl, fields, values) =>{
    const query = "insert into ${tbl} (${fields}) values (${values});";
    console.log(query);
    //it looks fine to me
    db.transaction(trx => {
        let trxQuery = trx.executeSql(
             query
            ,[values]
            ,(transact,resultset) => console.log('we made it',resultset)
            ,(transact,err) => console.log('We have encounter an Error', err)
       );
    })
}`


const personObj = JSON.parse(personDetails);
        Object.keys(personObj).map(i => 
            insert('users','name, address, hash', [personObj[i].name, personObj[i].address, personObj[i].hash])
        )