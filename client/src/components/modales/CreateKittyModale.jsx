import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { postKitty } from "../../api/callsAPI";
import { inputValidations } from "../../utils/inputValidations.createKitty";

const CreateKittyModale = ({ closeModaleFunction, setDataIsUpdated }) => {
  const [submitError, setSubmitError] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitCreateKittyForm = async (data) => {
    let dataToSend = { ...data, goal: parseFloat(data.goal) };
    if (dataToSend.img === "") {
      delete dataToSend.img;
    }
    const res = await postKitty(dataToSend);
    if (res === null || res.data === null) {
      setSubmitError(true);
      setSubmitMessage("An error has occured. Please try later");
    } else {
      setSubmitError(false);
      setSubmitMessage("Your kitty has been successfully registered");
      reset();
    }
    console.log(res);
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
    <div className="modale createKitty_modale">
      <div className="modale_innerContainer">
        <header className="modale_header">
          <h3>Create your own kitty</h3>
          <RiCloseCircleLine onClick={closeModaleFunction} />
        </header>
        <div className="modale_content">
          <form
            className="modale_form"
            onSubmit={handleSubmit(submitCreateKittyForm)}
          >
            <div className="modaleForm_element">
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="ex : Help the SweetyHouse animal shelter"
                  autoComplete="off"
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
                  placeholder="Explain in a few words how the kitty will be useful"
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
                  placeholder="Describe precisely the stakes of this kitty. Explain each step to inform how the money will be spent"
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
                  placeholder="ex : SweetyHouse"
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
                  placeholder="ex : 1253 (in $)"
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
                <label htmlFor="image">
                  Image <br /> (optional)
                </label>
                <input
                  type="text"
                  id="image"
                  name="img"
                  placeholder="ex : https://my_personnal_img.jpg"
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
                Create kitty
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateKittyModale;
