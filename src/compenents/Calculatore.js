import react , { useState } from 'react';



function Calculatore (){

    const [statment,setStatment] = useState('');

    const clear=()=>{

        setStatment('');
       }

    const tapecar=(e)=>{
        let oldval=statment;
        let newval=oldval+e.target.value;
        setStatment(newval);
    }

    const result=()=>{
        try {
        let exp=statment;
          setStatment(eval(exp));
          
         }
        catch(error){
          setStatment('Bad expression')
        }
      }

    return (
        <>
        <div style = {{width:400,height:600}} className="container bg-white border border-2 shadow  mt-5" >
               <input type="text" name="" id="" value={statment}
                className=' border border-0 text-muted fw-bold fs-4 p-5' style={{width:350,height:100}} /> 
                <div className="container-fluid ">
                    <div className="row mt-2">
                        <input  onClick={clear} type="button" value="C" style={{width:'60px',height:'60px'}} className='btn text-center text-info fw-bold  fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="/" style={{width:'60px',height:'60px'}} className='btn text-center text-info fw-bold fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="*" style={{width:'60px',height:'60px'}} className='btn text-center text-info fw-bold fs-5 m-3 '/>
                        <input type="button" value="DEL" style={{width:'60px',height:'60px'}} className='btn text-center text-info fw-bold fs-5 m-3 '/>
                    </div>
                    <div className="row">
                        <input onClick={(e)=>tapecar(e)} type="button" value="7" style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold  fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="8" style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="9" style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold fs-5 m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="-" style={{width:'60px',height:'60px'}} className='btn text-center text-info fw-bold fs-5 m-3 '/>
                    </div>
                    <div className="row">
                        <input onClick={(e)=>tapecar(e)} type="button" value="4" style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold  fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="5" style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="6" style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold fs-5 m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="+" style={{width:'60px',height:'60px'}} className='btn text-center text-info fw-bold fs-5 m-3 '/>
                    </div>
                    <div className="d-flex ">
                    <div>
                    <div className="row ">
                        <input onClick={(e)=>tapecar(e)} type="button" value="1" style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold  fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="2" style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="3" style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold fs-5 m-3 '/>
                        
                    </div>
                    <div className="row ">
                        <input onClick={(e)=>tapecar(e)} type="button" value="%" style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold  fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="0" style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold fs-5  m-3 '/>
                        <input onClick={(e)=>tapecar(e)} type="button" value="." style={{width:'60px',height:'60px'}} className='btn text-center text-muted fw-bold fs-5 m-3 '/>
                    </div>
                    </div>
                    <div className=''>
                    <input onClick={result} type="button" value="=" style={{width:'60px',height:'150px', position:'relative', right:-30}} className='btn text-center text-white bg-info fw-bold fs-5  '/>
                    </div>
                    </div>
                </div>
        </div>
        </>
    )



}

export default Calculatore;