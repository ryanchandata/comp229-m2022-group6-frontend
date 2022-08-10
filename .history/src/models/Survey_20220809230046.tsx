export default interface ISurveyData
{
    _id?: any | null,
    user: String, // user's id
  
    name: String,
    dateCreated: String,
    activationDate: Date,
    expirationDate: Date,
    responses: Number,

    question1: String,
    optionType1: String,
    optiondetails1_1: String,
    optiondetails1_2: String, 
    optiondetails1_3: String, 
    optiondetails1_4: String,
    
    question2: String,
    optionType2: String,
    optiondetails2_1: String,
    optiondetails2_2: String, 
    optiondetails2_3: String, 
    optiondetails2_4: String 

}