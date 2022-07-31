import http from '../components/http-common';

class SurveyService
{
    public add(name: string, responses: Number, title: string, optionType: string, details: string)
    {
        return http.post('add', { name, responses, title, optionType, details });
    }

    public edit(name: string, responses: Number, title: string, optionType: string, details: string)
    {
        return http.post('edit', { name, responses, title, optionType, details });
    }

    getExistingSurvey()
    {
        fetch("https://comp229-m2022-project-group6.herokuapp.com/api/survey")
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
    }
    render()
    {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div><h1>Please wait some time ...</h1></div>
        return (
            <div className="App">
                {
                    items.map((item)=>(
                        <ol key = { item.id } >
                            Survey Name: { item.name },
                            Response: { item.response }
                        </ol>
                    ))
                }
            </div>
        );
    }
}

export default new SurveyService();