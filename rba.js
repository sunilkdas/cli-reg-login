const readline= require('readline');
const User= require('./User.js');


const ri=  readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askForClose(){
    ri.question('Want to Close? Y ? N ', (answer)=>{
        if(answer === 'Y'){
            register();
        }
        else{
            ri.close();
        }
    })
    }

function askForRegistration(){
ri.question('Want to register? Y ? N ', (answer)=>{
    if(answer === 'Y'){
        register();
    }
    else{
        ri.close();
    }
})
}
function register(){
    var user= new User();
    ri.question('Full Name(Only Alphabets) : ', (fullName)=>{
        if(fullName !== ''){
            ri.question('User ID : ', (userid)=>{
                if(userid !== ''){
                    ri.question('Password : ', (pwd)=>{
                        if(pwd !== ''){
                            user.fullName=fullName;
                            user.userid=userid;
                            user.password=pwd;
                            console.log(`Register Successfully!!`);
                            login(user);
                        }
                        else{
                           // register();
                            askForClose();
                        }
                    }) 
                }
                else{
                    register();
                }
            }) 
        }
        else{
            register();
        }
    }) 
}
function login(user){
    ri.question('Want to Login : ', (ans)=>{
        if(ans === 'Y'){
            ri.question('Username : ', (username)=>{
                if(username !== ''){
                    ri.question('Password : ', (pwd)=>{
                        if(username==user.userid && user.password===pwd){
                            console.log(`Login Successfully!!`);
                            
                        }
                        else{
                            console.log(`Login Error!!`);
                            login(user)
                        }
                    }) 
                    
                }
                else{
                    register();
                }
            }) 
            
        }
        else{
            askForClose();
        }
    }) 
}
askForRegistration();

