import React from 'react'
import { useState, useEffect } from 'react'

const RequestApi = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading]= useState(false)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchData = async() => {
            setError(null);
            setIsLoading(true);
       
            try {
            const url = "https://jsonplaceholders.typicode.com/users"
            
            const response = await fetch(url);

            if(!response.ok) {throw new Error("Error en la petición")}

            const data = await response.json();
            setUsers(data);
            
            } catch (error) {
                setError("HUBO UN ERROR!")
            
            }
            finally {setIsLoading(false);}
        
        };
        fetchData();
        
    }, [])
  return (
    <div style={{backgroundColor:'#AF7AC5',
    padding: '10px 10px', borderRadius: '10px'}}>
        <h1
        style={{
            color:'#FCF3CF '
        }}>Usuarios pedidos por FETCH</h1>

        {isLoading && <h2 style={{color:'#1A5276 '}}>Cargando...</h2>}

        {error && <h2 style={{color:'red'}}>{error}</h2>}

        {users.map((user) => {
            return (
            <div key={user.id}>
                <p
                style={{color:'#F9E79F'}}>{user.name} - {user.email}</p>
            </div>
            );
        })}
      
            
    </div>
  )
}

export default RequestApi