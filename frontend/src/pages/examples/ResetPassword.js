
import React,{useState} from "react";
import Resetstepone from '../../components/Resetstepone.jsx';
import Resetsteptwo from '../../components/Resetsteptwo.jsx';

function ResetPassword () { 
  const [step, setstep] = useState(1);

    const [formData, setFormData] = useState({
       email:"",
       cpass:"",
       pass:"",
    });
    const nextStep = () => {
        setstep(step + 1);
    };
    const prevStep = () => {
        setstep(step - 1);
    };
    const handleInputData = (input) => e => {
      let { value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [input]: value
      }));
      
  }



  


    switch (step) {
      case 1:
          return (

              <Resetstepone nextStep={nextStep} handleFormData={handleInputData} values={formData} />


          );
      case 2:
          return (
              <Resetsteptwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />

          );
      default:
          return (
              <div className="">
              </div>
          );
  }

  

 
}

export default ResetPassword;
