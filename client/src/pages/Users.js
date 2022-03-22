import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import StringifyJSON from '../components/StringifyJSON';

const Users = ()=>{
    const [{ data:users, loading, error }, refetch] = useAxios('/api/users');
      
    return (
        <AxiosContainer title={'User'} loading={loading} error={error}>
            <StringifyJSON data={users}/>
        </AxiosContainer>
    )
}

export default Users