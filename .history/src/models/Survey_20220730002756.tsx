export default interface ISurveyData
{
    name: string,
    dateCreated: string,
    dateActive: string,
    dateExpire: string,
    responses:
    {
        type: string,
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