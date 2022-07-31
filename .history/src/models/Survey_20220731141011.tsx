export default interface ISurveyData
{
    _id?: any | null,
    name: string,
    dateCreated: string,
    dateActive: string,
    dateExpire: string,
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