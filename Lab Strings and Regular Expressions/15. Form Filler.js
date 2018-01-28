function formFiller (username,email,phoneNumber,text) {
    text.forEach(line=>{
        line.replace = /<![a-zA-Z]+!>/g ,username;
        line.replace = /<@[a-zA-Z]+@>/g ,email;
        line.replace = /<\+[a-zA-Z\-0-9]+\+>/g ,phoneNumber;

        console.log(line);
    })

}