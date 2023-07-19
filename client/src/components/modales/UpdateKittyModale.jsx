import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { updateKitty } from "../../api/callsAPI";
import { inputValidations } from "../../utils/inputValidations.updateKitty";

const UpdateKittyModale = ({
  setDataIsUpdated,
  closeModaleFunction,
  kittyData,
}) => {
  const [submitError, setSubmitError] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitUpdateKittyForm = async (data) => {
    let dataToSend = { ...data, goal: parseFloat(data.goal) };

    const res = await updateKitty(dataToSend, kittyData._id);
    if (res === null || res.data === null) {
      setSubmitError(true);
      setSubmitMessage("An error has occured. Please try later");
    } else {
      setSubmitError(false);
      setSubmitMessage("Your kitty has been successfully updated");
      reset();
      closeModaleFunction(true);
    }

    if (setDataIsUpdated) {
      setDataIsUpdated(true);
    }
  };

  const resetKittyForm = (e) => {
    e.preventDefault();
    setSubmitError(false);
    setSubmitMessage("");
    reset();
  };

  return (
    <div className="modale updateKitty_modale">
      <div className="modale_innerContainer">
        <header className="modale_header">
          <h3>Update your kitty</h3>
          <RiCloseCircleLine onClick={closeModaleFunction} />
        </header>
        <div className="modale_content">
          <form
            className="modale_form"
            onSubmit={handleSubmit(submitUpdateKittyForm)}
          >
            <div className="modaleForm_element">
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  autoComplete="off"
                  defaultValue={kittyData.title}
                  {...register("title", inputValidations("title"))}
                />
              </div>

              <p className="errors-messages">
                <ErrorMessage errors={errors} name="title" />
              </p>
            </div>

            <div className="modaleForm_element">
              <div>
                <label htmlFor="slogan">Slogan</label>
                <textarea
                  id="slogan"
                  name="slogan"
                  autoComplete="off"
                  defaultValue={kittyData.slogan}
                  {...register("slogan", inputValidations("slogan"))}
                ></textarea>
              </div>

              <p className="errors-messages">
                <ErrorMessage errors={errors} name="slogan" />
              </p>
            </div>

            <div className="modaleForm_element">
              <div>
                <label htmlFor="details">Details</label>
                <textarea
                  id="details"
                  name="details"
                  autoComplete="off"
                  defaultValue={kittyData.details}
                  {...register("details", inputValidations("details"))}
                ></textarea>
              </div>

              <p className="errors-messages">
                <ErrorMessage errors={errors} name="details" />
              </p>
            </div>

            <div className="modaleForm_element">
              <div>
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  defaultValue={kittyData.author}
                  autoComplete="off"
                  {...register("author", inputValidations("author"))}
                />
              </div>

              <p className="errors-messages">
                <ErrorMessage errors={errors} name="author" />
              </p>
            </div>

            <div className="modaleForm_element">
              <div>
                <label htmlFor="goal">Goal</label>
                <input
                  type="number"
                  id="goal"
                  name="goal"
                  defaultValue={kittyData.goal}
                  autoComplete="off"
                  min="0"
                  step="1"
                  {...register("goal", inputValidations("goal"))}
                />
              </div>

              <p className="errors-messages">
                <ErrorMessage errors={errors} name="goal" />
              </p>
            </div>

            <div className="modaleForm_element">
              <div>
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  id="image"
                  name="img"
                  defaultValue={kittyData.img}
                  autoComplete="off"
                  {...register("img", inputValidations("img"))}
                />
              </div>

              <p className="errors-messages">
                <ErrorMessage errors={errors} name="img" />
              </p>
            </div>

            <div
              className={
                submitError ? "submit-message--error" : "submit-message"
              }
            >
              {submitMessage}
            </div>

            <div className="modale_buttons">
              <button className="reset_btn" onClick={resetKittyForm}>
                Reset
              </button>
              <button className="submit_btn" type="submit">
                Update kitty
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateKittyModale;
