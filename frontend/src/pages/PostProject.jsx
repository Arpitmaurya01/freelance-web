import { useState } from "react";
import StepOne from "./PostProject/StepOne.jsx";
import StepTwo from "./PostProject/StepTwo.jsx";
import Final from "./PostProject/Final.jsx";
import React from "react";
import "../scss/home/Postproject.scss";

function PostProject() {
    //state for steps

    const [step, setstep] = useState(1);

    //state for form data
    const [formData, setFormData] = useState({
        projectTitle: "",
        desc: "",
        category: "",
        reqskills: [],
        bidstart: "",
        bidend: "",
        currencytype: "",
        customizedbudget: "",
        minbudget: "",
        maxbudget: "",
        availablity: "",
        language: "",
        gender: "",
        country: "",
        nationality: "",
        bidvalue: "",
        proposal: "",
        attachment: [],
        termsandcondition: "false",
        finaltermsandcondition: "false",
    })



    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);

    };

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = (input, nm) => e => {
        // input value from the form
        let value;

        value = nm ? nm : e.target.value;



        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));

    }

    const handlebid = (name, value) => {
        let dt = new Date(value).toLocaleDateString();
        console.log(value, dt);
        setFormData(prevState => ({
            ...prevState,
            [name]: value

        }));
    }

    const handleskill = (selectedList) => {


        setFormData(prevState => ({
            ...prevState,
            ['reqskills']: [...selectedList]

        }));

    }

    const handleattachment = (selectedList) => {

        console.log(selectedList, "attachment");

        setFormData(prevState => ({
            ...prevState,
            ['attachment']: [...selectedList]

        }));


    }


    console.log(formData);

    // javascript switch case to show different form in each step
    switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
            return (

                <StepOne nextStep={nextStep} handleFormData={handleInputData} onbidchange={handlebid} onSkillchange={handleskill} onFilechange={handleattachment} values={formData} />


            );
        // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 2:
            return (
                <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />

            );
        case 3:
            return (
                <Final prevStep={prevStep} handleFormData={handleInputData} values={formData} />

            );
        // Only formData is passed as prop to show the final value at form submit

        // default case to show nothing
        default:
            return (
                <div className="">
                </div>
            );
    }
}

export default PostProject;
