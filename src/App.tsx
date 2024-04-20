
import './App.css'
import { useRef, useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const inputRef = useRef<any>(null);
  const [file, setFile] = useState('')

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    }
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
  
    console.log(formData.get("file"));
  }


    

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <>
    <Navbar/>
    <section className='relative'>
      <div className='min-h-[719px] min-w-[1140px] relative m-auto box-border'>
        <img src='pexels-photo-56733.jpeg' className="block box-border overflow-hidden align-middle mt-[60px] ml-auto h-[620px] w-[570px] object-cover bg-center bg-no-repeat bg-cover"/>
        <div className='relative box-border isolate flex min-h-[620px] h-auto mt-[-620px] mr-auto ml-0 mb-[60px] w-[570px]'>
            <div className='p-7 flex flex-col flex-1 max-w-full box-border isolate justify-center'>
              <h1 className='relative flex-shrink-0 break-words text-6xl font-bold mr-[20px] isolate box-border font-sans'>Bird Sound Identifier</h1>
              <p className='mt-7 mr-5'>Listen closely, because even the birds are chirping about our machine learning magic !!!</p>
              <div className='w-[111px] h-[3px] origin-center ml-48 mt-7 mr-auto border-x-0 border-b-0 relative border-gray-300 border-4 border-solid flex-shrink-0 isolate box-border'></div>
              <div  className='mt-10 mr-auto ml-20 flex gap-16'>
              <input
                placeholder="fileInput"
                className="hidden"
                ref={inputRef}
                type="file"
                // multiple={true}
                onChange={handleChange}
                accept="audio/*"
              />
              <button
                className="bg-sky-600 text-white px-8 py-2 rounded-md hover:bg-sky-700 transform duration-300 "
                onClick={openFileExplorer}
                type="button"
              >
                Browse File
              </button>
              <button
                className="bg-sky-600 text-white px-8 py-2 rounded-md hover:bg-sky-700 transform duration-300 "
                onClick={openFileExplorer}
                type="button"
              >
                Predict
              </button>
              </div>
            </div>
        </div>

      </div>
      </section>
      <section className=' flex  gap-4 justify-center text-white bg-stone-700 p-2 mt-0 relative text-center'>
        <a>@Copyright ChirpSense</a>
        <a className='hover:underline underline-offset-2'>About</a>
        {/* <a className='hover:underline underline-offset-2'>Privacy Policy</a> */}
        <a className='hover:underline underline-offset-2'>Read More</a>
        
      </section>
    </>
    
  )
}

export default App;
