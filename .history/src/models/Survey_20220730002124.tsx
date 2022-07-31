export default interface ISurveyData
{
    name: string,
    dateCreated: Date,
    dateActive: Date,
    dateExpire: Date,
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