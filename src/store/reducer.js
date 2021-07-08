const INITIAL_STATE={
    obj:[
        {  
         Question:"A light sensitive device that converts drawing, printed text or other images into digital form is",
        option1:"Keyboard",
        option2:"Plotter",
        option3:"Scanner",
        option4:"OMR",
        answer:"opt3",
        
       }
        ,
        { 
        Question:"Which protocol provides e-mail facility among different hosts?",
        option1:"FTP",
        option2:"SMTP",
        option3:"TELNET",
        option4:"SNMP",
        answer:"opt2"
      }
      ,
      { 
          Question:"In order to tell Excel that we are entering a formula in cell, we must begin with an operator such as is it",
          option1:"$",
          option2:"@",
          option3:"+",
          option4:"=",
          answer:"opt4"
      }
      ,
      { 
          Question:"In how many generations a computer can be classified?",
          option1:"3",
          option2:"4",
          option3:"5",
          option4:"6",
          answer:"opt3"
      }
    ]
}
const reducer = (state=INITIAL_STATE)=>{ 
    return state}
export default reducer