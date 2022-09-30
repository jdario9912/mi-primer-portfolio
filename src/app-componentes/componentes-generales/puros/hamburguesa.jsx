const Hamburguesa = ({funcionClick}) => {  
  return (
    <div 
      className='flex flex-col w-10 h-10 gap-2 p-1 border rounded cursor-pointer md:invisible' 
      onClick={ funcionClick }
    >
      <div className=' mx-auto h-1 w-4/5 bg-slate-200'></div>
      <div className=' mx-auto h-1 w-4/5 bg-slate-200'></div>
      <div className=' mx-auto h-1 w-4/5 bg-slate-200'></div>
    </div>
  );
}

export default Hamburguesa;
