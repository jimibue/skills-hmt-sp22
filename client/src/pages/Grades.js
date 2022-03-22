import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';

const Grades = ()=>{
    const [{ data, loading, error }, refetch] = useAxios('/api/grades/all_yo');
 
    return (
        <AxiosContainer title={'Grades'} loading={loading} error={error}>
            <StringifyJSON data={data}/>
        </AxiosContainer>
    )
}

export default Grades