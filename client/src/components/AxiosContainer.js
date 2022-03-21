import useAxios from 'axios-hooks'

// const Users = (props)=>{
    const AxiosContainer = ({title,loading, error,children})=>{
    if(loading)return <p>Loading SPINNER</p>
    if(error)return <p>Error</p>
    return (
        <div>
           <h1>{title}</h1>
            {children}
        </div>
    )
}

export default AxiosContainer