import React from 'react'
import "./Reservation.css"
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("Name is a required!"),
    email: yup.string().required("Email is a required!").email("Email is not valid!"),
    people: yup.number().min(1, "1 person minimum!").required("Please specify number of people!"),
    date: yup.string().required("Select date and time!"),
})

const Reservation = ({closeReservation}) => {

const { handleSubmit, register, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
  })

  const formSubmit = (data) => {
      closeReservation(false)
  }

  return (
    <div className='reservation'>
      <div className='background'></div>
        <form onSubmit={handleSubmit(formSubmit)}>
          <fieldset>
            <img src="images/x-symbol.svg" alt="exit" onClick={() => {closeReservation(false)}}/>
            <h1>Reserve a Table</h1>
            <div className="field">
              <input type="text" placeholder="Name" {...register("name")} />
              <span className="error-message">{errors.name?.message}</span>
            </div>
            <div className="field">
              <input type="text" placeholder="Email" {...register("email")}/>
              <span className="error-message">{errors.email?.message}</span>
            </div>
            <div className="field">
              <div className="options">
                <select name="occasion" {...register("occasion")}>
                  <option value="select">Occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="engagement">Engagement</option>
                </select>
              </div>
            </div>
            <div className="field">
              <input type="number" placeholder="People" {...register("people")}/>
              <span className="error-message">{errors.people?.message}</span>
            </div>
            <div className="field">
              <input type="datetime-local" {...register("date")} />
              <span className="error-message">{errors.date?.message}</span>
            </div>
            <button className="reserve-btn" type="submit">Reserve</button>
          </fieldset>
        </form>
      </div>
  )
}

export default Reservation