const accountId = 12345;
let accountEmail = "parthdevani@google.com"
var accountPassword = "password123"
accountCity = "Ahmedabad"
let accountState;


//accountId = 2    Not allowed

accountEmail = "pd@gmail.com"
accountPassword = "newPassword"
accountCity = "Surat"

console.log(accountId)

/*
Prefered not use var
beacuase of issue in block scope and fuctional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
