const Error = ({children}) => {
    return (
      (<div className='text-red-600 text-center uppercase font-bold mb-10 rounded-xl'>
          <p>{children}</p>
      </div>)
    )
  }
  
  export default Error