import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';

const Skills = ()=>{
    const [{ data, loading, error }, refetch] = useAxios('/api/skills');
 
    return (
        <AxiosContainer title={'Skills'} loading={loading} error={error}>
            <StringifyJSON json={data}/>
        </AxiosContainer>
    )
}

export default Skills