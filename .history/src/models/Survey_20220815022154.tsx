export default interface ISurveyData
{
    _id?: any | null;
    username: string,
    name: string,
    dateCreated: string,
    activationDate: Date,
    expirationDate: Date,
    status: string,
    responses: Number,

    question1: string,
    optionType1: string,
    optiondetails1_1: string,
    optiondetails1_2: string, 
    optiondetails1_3: string, 
    optiondetails1_4: string,

    question2: string,
    optionType2: string,
    optiondetails2_1: string,
    optiondetails2_2: string, 
    optiondetails2_3: string, 
    optiondetails2_4: string 

}