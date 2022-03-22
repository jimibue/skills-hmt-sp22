import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';

const Skills = ()=>{
    // get back json data from server. AXios 'parse' to convert to JS Object
    const [{ data, loading, error }, refetch] = useAxios('/api/skills');
 
    return (
        <AxiosContainer title={'Skills'} loading={loading} error={error}>
            <StringifyJSON data={data}/>
        </AxiosContainer>
    )
}

export default Skills