export default interface ISurveyData
{
    name: string,
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

const questionsTitles = [question1, question2]
        const optionDetails = [options1, options2, options3, options4][options5, options6, options7, options8]
        const optionType = [optionType1, optionType2]
        const optionsArray = []
        const questionsArray = []

        for (let i = 0; i < questionsTitles.length; i++)
        {
            for (let j = 0; j < 4; j++)
            {
                optionsArray.push({
                    details: optionDetails[i][j]
                })
            }
            questionsArray.push({
                title: questionsTitles[i],
                optionType: optionType[i],
                options: optionsArray
            })
        }