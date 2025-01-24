import React, { useState, useEffect, useRef } from "react";
import CareersImg from "../assets/Careers/careers_main.jpg";
import { ImSpinner2 } from "react-icons/im";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const Careers = () => {
  const [didSend, setMessage] = useState(false);
  const [isSending, setSending] = useState(false);

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSending(true);

    const formData = new FormData(e.target);

    emailjs
      .sendForm(
        "service_g6t032p", // Replace with your EmailJS service ID
        "template_wi3vcli", // Replace with your EmailJS template ID
        form.current,
        {
          publicKey: "QKfq72spFqIdjqQMu",
        } // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true); // Display success message
          console.log("Form submission state:", didSend); // Debugging

        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="w-full flex flex-col bg-slate-50">
      <img src={CareersImg} alt="Careers" className="main-bg-img" />
      <div className="main-content">
        <div className="main-title-section">
          <p className="main-title-top">OUR</p>
          <p className="main-title-bottom">CAREERS</p>
        </div>

        <div className="main-desc-section">
          <p>
            Dell Painting is an equal opportunity employer and everyone is
            welcome. Every position is open for entry level to senior level, and
            there is always space to grow. Our working environment is a friendly
            and a strong team player company where we all work together to
            achieve Dell Painting's goals. Anyone interested in any of our
            available positions are welcome to fill out the form below or submit
            your resume to
            <span className="font-bold"> admin@dellpainting.com</span>.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl w-full h-full mx-auto">
        <div className="w-full flex flex-col p-4 md:px-8 md:pb-16 gap-8 md:gap-16">
          {/* Our Available Positions */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 md:divide-x gap-8">
            {/* description section */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 md:pl-8">
              {/* Form */}
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col w-full md:gap-4"
              >
                {/* Position Section */}
                <div className="mb-8">
                  <label className="form-label-title" htmlFor="position">
                    Position <span className="text-gray-400">(Posición)</span>
                  </label>
                  <select className="form-field w-full" id="position">
                    <option>Painter</option>
                  </select>
                </div>

                {/* Applicant Information Section */}
                <div className="mb-8">
                  <div className="text-xl font-bold">
                    Applicant Information{" "}
                    <span className="text-gray-400">
                      (Información del Solicitante)
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-4">
                    <div>
                      <label className="form-label-title" htmlFor="firstName">
                        First Name{" "}
                        <span className="text-gray-400">(Nombre)</span>
                      </label>
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="John"
                        name="firstName"
                        id="firstName"
                        required={true}
                      />
                    </div>
                    <div>
                      <label className="form-label-title" htmlFor="lastName">
                        Last Name{" "}
                        <span className="text-gray-400">(Apellido)</span>
                      </label>
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="Doe"
                        name="lastName"
                        id="lastName"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-4">
                    <div>
                      <label className="form-label-title" htmlFor="email">
                        Email{" "}
                        <span className="text-gray-400">
                          (Correo Electrónico)
                        </span>
                      </label>
                      <input
                        className="form-field w-full"
                        type="email"
                        placeholder="*****@example.com"
                        name="email"
                        id="email"
                        required={true}
                      />
                    </div>
                    <div>
                      <label className="form-label-title" htmlFor="ssn">
                        SSN#{" "}
                        <span className="text-gray-400">
                          (Número de Seguro Social)
                        </span>
                      </label>
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="XXX-XX-XXXX"
                        name="ssn"
                        id="ssn"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-4">
                    <div>
                      <label className="form-label-title" htmlFor="address">
                        Address{" "}
                        <span className="text-gray-400">(Dirección)</span>
                      </label>
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="123 Main St"
                        name="address"
                        id="address"
                        required={true}
                      />
                    </div>
                    <div>
                      <label className="form-label-title" htmlFor="city">
                        City <span className="text-gray-400">(Ciudad)</span>
                      </label>
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="Newark"
                        name="city"
                        id="city"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-8 mt-4">
                    <div>
                      <label className="form-label-title" htmlFor="state">
                        State <span className="text-gray-400">(Estado)</span>
                      </label>
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="NJ"
                        name="state"
                        id="state"
                        required={true}
                      />
                    </div>
                    <div>
                      <label className="form-label-title" htmlFor="zip">
                        Zip Code{" "}
                        <span className="text-gray-400">(Código Postal)</span>
                      </label>
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="07102"
                        name="zip"
                        id="zip"
                        required={true}
                      />
                    </div>
                    <div>
                      <label className="form-label-title" htmlFor="phone">
                        Phone <span className="text-gray-400">(Teléfono)</span>
                      </label>
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="(201) 555-5555"
                        name="phone"
                        id="phone"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="dob">
                      Date of Birth{" "}
                      <span className="text-gray-400">
                        (Fecha de Nacimiento)
                      </span>
                    </label>
                    <input
                      className="form-field w-full"
                      type="date"
                      name="dob"
                      id="dob"
                      required={true}
                    />
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="referral">
                      How did you find out about the position?{" "}
                      <span className="text-gray-400">
                        (¿Cómo se enteró del puesto?)
                      </span>
                    </label>
                    <input
                      className="form-field w-full"
                      type="text"
                      placeholder="e.g., Job Board, Referral"
                      name="referral"
                      id="referral"
                      required={true}
                    />
                  </div>
                </div>

                {/* Personal Information Section */}
                <div className="mb-8">
                  <div className="text-xl font-bold">
                    Personal Information{" "}
                    <span className="text-gray-400">
                      (Información Personal)
                    </span>
                  </div>

                  {/* US Citizenship */}
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="usCitizen">
                      Are you a US citizen or approved to work in the United
                      States?{" "}
                      <span className="text-gray-400">
                        (¿Es ciudadano de EE.UU. o tiene autorización para
                        trabajar en los Estados Unidos?)
                      </span>
                    </label>
                    <select
                      className="form-field w-full"
                      id="usCitizen"
                      required
                    >
                      <option value="" disabled selected>
                        Select an option
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  {/* Driver's License */}
                  <div className="mt-4">
                    <label
                      className="form-label-title"
                      htmlFor="driversLicense"
                    >
                      Do you have a license to drive in NJ? If not, then what
                      state?{" "}
                      <span className="text-gray-400">
                        (¿Tiene licencia para conducir en NJ? Si no, ¿en qué
                        estado?)
                      </span>
                    </label>
                    <input
                      className="form-field w-full"
                      type="text"
                      placeholder="e.g., NJ or another state"
                      name="driversLicense"
                      id="driversLicense"
                      required={true}
                    />
                  </div>

                  {/* Machinery Operation */}
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="machinery">
                      Do you know how to operate machinery? If yes, then select
                      the ones you operate:{" "}
                      <span className="text-gray-400">
                        (¿Sabe operar maquinaria? Si es así, seleccione las que
                        opera:)
                      </span>
                    </label>
                    <div className="form-field grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="machinery"
                          value="scissorLift"
                          className="form-checkbox mr-2"
                        />
                        Scissor Lift{" "}
                        <span className="text-gray-400 ml-1">
                          (Plataforma de tijera)
                        </span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="machinery"
                          value="boomLift"
                          className="form-checkbox mr-2"
                        />
                        Boom Lift{" "}
                        <span className="text-gray-400 ml-1">
                          (Plataforma articulada)
                        </span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="machinery"
                          value="spray"
                          className="form-checkbox mr-2"
                        />
                        Spray{" "}
                        <span className="text-gray-400 ml-1">(Rociador)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="machinery"
                          value="roller"
                          className="form-checkbox mr-2"
                        />
                        Roller{" "}
                        <span className="text-gray-400 ml-1">(Rodillo)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="machinery"
                          value="caulking"
                          className="form-checkbox mr-2"
                        />
                        Caulking{" "}
                        <span className="text-gray-400 ml-1">(Calafateo)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="machinery"
                          value="putty"
                          className="form-checkbox mr-2"
                        />
                        Putty{" "}
                        <span className="text-gray-400 ml-1">(Masilla)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="machinery"
                          value="sprayMachine"
                          className="form-checkbox mr-2"
                        />
                        Spray Machine{" "}
                        <span className="text-gray-400 ml-1">
                          (Máquina de rociado)
                        </span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="machinery"
                          value="other"
                          className="form-checkbox mr-2"
                        />
                        Other <span className="text-gray-400 ml-1">(Otro)</span>
                      </label>
                    </div>
                    {/* Input field for "Other" */}
                    <div className="mt-4">
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="Please specify if other"
                        name="machineryOther"
                        id="machineryOther"
                      />
                    </div>
                  </div>
                </div>

                {/* Education, Training, Skills Section */}
                <div className="mb-8">
                  <div className="text-xl font-bold">
                    Education, Training, Skills{" "}
                    <span className="text-gray-400">
                      (Educación, Capacitación, Habilidades)
                    </span>
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="education">
                      Education: High School, University? Graduation Date and
                      Degree{" "}
                      <span className="text-gray-400">
                        (Educación: Secundaria, Universidad? Fecha de graduación
                        y Título)
                      </span>
                    </label>
                    <input
                      className="form-field w-full"
                      type="text"
                      placeholder="Provide details of education"
                      name="education"
                      id="education"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="training">
                      Training: How many years of experience do you have in
                      painting or construction?{" "}
                      <span className="text-gray-400">
                        (Capacitación: ¿Cuántos años tiene en pintura o en la
                        industria de la Construcción?)
                      </span>
                    </label>
                    <input
                      className="form-field w-full"
                      type="number"
                      placeholder="Enter years of experience"
                      name="training"
                      id="training"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="trade">
                      What trade do you specialize in?{" "}
                      <span className="text-gray-400">
                        (¿Qué oficio tiene?)
                      </span>
                    </label>
                    <input
                      className="form-field w-full"
                      type="text"
                      placeholder="Enter your trade specialization"
                      name="trade"
                      id="trade"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title">
                      Do you have an OSHA Certification?{" "}
                      <span className="text-gray-400">
                        (¿Tiene Certificado de OSHA?)
                      </span>
                    </label>
                    <div className="form-field flex gap-4 mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="osha"
                          value="osha7"
                          className="form-checkbox mr-2"
                        />
                        OSHA 7
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="osha"
                          value="osha10"
                          className="form-checkbox mr-2"
                        />
                        OSHA 10
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="osha"
                          value="osha30"
                          className="form-checkbox mr-2"
                        />
                        OSHA 30
                      </label>
                    </div>
                  </div>
                </div>

                {/* Previous Work Section */}
                <div className="mb-8">
                  <div className="text-xl font-bold">
                    Previous Work{" "}
                    <span className="text-gray-400">(Previos Trabajos)</span>
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="employer">
                      Employer Name{" "}
                      <span className="text-gray-400">
                        (Nombre del Empleador)
                      </span>
                    </label>
                    <input
                      className="form-field w-full"
                      type="text"
                      placeholder="Enter employer name"
                      name="employer"
                      id="employer"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="address">
                      Address <span className="text-gray-400">(Dirección)</span>
                    </label>
                    <input
                      className="form-field w-full"
                      type="text"
                      placeholder="Enter address"
                      name="address"
                      id="address"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="phone">
                      Phone <span className="text-gray-400">(Teléfono)</span>
                    </label>
                    <input
                      className="form-field w-full"
                      type="text"
                      placeholder="Enter phone number"
                      name="phone"
                      id="phone"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="reason">
                      Reason for leaving the job{" "}
                      <span className="text-gray-400">
                        (Razón por que dejó el trabajo)
                      </span>
                    </label>
                    <input
                      className="form-field w-full"
                      type="text"
                      placeholder="Enter reason"
                      name="reason"
                      id="reason"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="reference">
                      Reference (Please provide one){" "}
                      <span className="text-gray-400">
                        (Referencia: Por favor escriba una)
                      </span>
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="Enter reference name"
                        name="referenceName"
                        id="referenceName"
                        required
                      />
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="Enter reference phone number"
                        name="referencePhone"
                        id="referencePhone"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="form-label-title" htmlFor="certification">
                      I certify that the information in this application is
                      true, correct, and complete to the best of my knowledge.{" "}
                      <span className="text-gray-400">
                        (Yo certifico que la información en esta aplicación es
                        verdadera, correcta y completa de mi conocimiento.)
                      </span>
                    </label>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <input
                        className="form-field w-full"
                        type="text"
                        placeholder="Signature"
                        name="signature"
                        id="signature"
                        required
                      />
                      <input
                        className="form-field w-full"
                        type="date"
                        name="date"
                        id="date"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div key={didSend ? "success" : "form"}>
  {!didSend ? (
    <button className="flat-btn mt-4" type="submit">
      {isSending ? (
        <span>
          Sending... <ImSpinner2 className="animate-spin h-5 w-5 ml-3" />
        </span>
      ) : (
        "SUBMIT"
      )}
    </button>
  ) : (
    <p className="text-green-500 text-center mt-4">
      Form submitted successfully! Thank you for applying.
    </p>
  )}
</div>
              </form>
            </div>
            {/* title section */}
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start md:pl-8 order-first md:order-last">
              <div className="main-title-top">APPLY</div>
              <div className="main-title-bottom">HERE TODAY</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
