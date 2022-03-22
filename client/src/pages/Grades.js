import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import Grade from '../components/Grade';
import GradeForm from '../components/GradeForm';
import List from '../components/List';
import useAxiosOnMount from '../hooks/useAxiosOnMount';

const Grades = ()=>{
    // const [{ data:grades, loading, error }, refetch] = useAxios('/api/grades/all_yo');
    const {data:grades, loading, error, setData } = useAxiosOnMount('/api/grades/all_yo');

    // what am I expecting param to be
    // {id:Number, score:, user:{id,name}, skill:{id,name}}
    const renderOneGrade = (gradeObj)=>{
        return <Grade {...gradeObj}/>
    }
 
    return (
        <div>
     
        <AxiosContainer title={'Grades'} loading={loading} error={error}>
            <List list={grades} renderItem={renderOneGrade} />
        </AxiosContainer>
        </div>
        
    )
}

export default Grades

