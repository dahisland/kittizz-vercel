import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { donateToKitty } from "../../api/callsAPI";

const DonateKittyModale = ({
  kittyData,
  closeModaleFunction,
  setDataIsUpdated,
}) => {
  const [submitError, setSubmitError] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitDonation = async (data) => {
    const res = await donateToKitty(kittyData._id, parseFloat(data.donation));
    console.log(res);
    if (res.status === 200) {
      setSubmitError(false);
      setSubmitMessage("Thank you for your donation !");
      if (setDataIsUpdated) {
        setDataIsUpdated(true);
      }
      reset();
    } else {
      setSubmitError(true);
      setSubmitMessage("An error has occured. Please try later");
    }
  };

  const inputValidation = {
    required: {
      value: true,
      message: "This field is required",
    },
    pattern: {
      value: /^[1-9]{1}[0-9]{0,}/,
      message: "Must be a integer number up to 0",
    },
  };

  return (
    <div className="modale donation_modale">
      <div className="modale_innerContainer">
        <div className="modale_content">
          <h3>Donation amount</h3>
          <form className="modale_form" onSubmit={handleSubmit(submitDonation)}>
            <div className="modaleForm_element">
              <input
                type="number"
                id="donation"
                name="donation"
                placeholder="ex : 1253 (integer in $)"
                autoComplete="off"
                min="0"
                step="1"
                {...register("donation", inputValidation)}
              />
              <p className="errors-messages">
                <ErrorMessage errors={errors} name="donation" />
              </p>
            </div>

            <div
              className={
                submitError ? "submit-message--error" : "submit-message"
              }
            >
              {submitMessage}
            </div>

            <button type="submit" className="submitDonation_btn">
              SEND
            </button>
          </form>
          <button className="cancel_btn" onClick={closeModaleFunction}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateKittyModale;
