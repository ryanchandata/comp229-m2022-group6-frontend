export default interface ISurveyData
{
    name: string,
    dateCreated: Date["toISOString"],
    dateActive: Date["toISOString"],
    dateExpire: Date["toISOString"],
    responses:
    {
        type: Number,
        default: 0
    },
    questions: [{
        title: string,
        optionType: string,
        options: [{
            details: string,
            count:{
                type: Number,
                default: 0
            }
        }]
    }]
}