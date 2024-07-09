import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import cn from 'classnames';

export const JoinForm: FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [reqError, setReqError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      await axios.post('http://localhost:3000/send-email', data);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
      }, 500);
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setReqError(true);
    }
  };

  const handleButtonClick = () => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 500);
  };

  return (
    <section id="joinForm" className="w-full lg:w-2/4 bg-gray-regular flex items-center flex-col gap-6 mb-5 sm:mb-0 rounded-3xl">
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col w-full py-10 px-7 sm:px-14 text-base">
      <p className="pb-2 font-bold">Name<sup className="text-[#990000]">*</sup></p>
        <div className="flex gap-3 py-2.5">
            
        <div className="flex flex-col w-2/4">
          
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
            className={cn("border outline-none focus-visible:border-blue-regular px-3 py-[6px]", { "border-[#cc0000]": errors.firstName})}
          />
          <label htmlFor="firstName" className="text-[13px] font-bold">First</label>
          {errors.firstName && <span className="text-[#990000] text-[12px]">This field is required</span>}
        </div>

        <div className="flex flex-col w-2/4">
          
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
            className={cn("border outline-none focus-visible:border-blue-regular px-3 py-[6px]", { "border-[#cc0000]": errors.lastName })}
          />
          <label htmlFor="lastName" className="text-[13px] font-bold">Last</label>
          {errors.lastName && <span className="text-[#990000] text-[12px]">This field is required</span>}
        </div>
        </div>
        <div className="flex flex-col py-2.5">
          <label className="pb-3 font-bold" htmlFor="email">Email<sup className="text-[#990000]">*</sup></label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className={cn("border outline-none focus-visible:border-blue-regular px-3 py-[6px]", { "border-[#cc0000]": errors.email })}
          />
          {errors.email && <span className="text-[#990000] text-[12px]">This field is required</span>}
        </div>

        <div className="flex flex-col py-2.5">
          <label className="pb-3 font-bold" htmlFor="phone">Phone<sup className="text-[#990000]">*</sup></label>
          <input
            type="tel"
            id="phone"
            {...register("phone", { required: true })}
            className={cn("border outline-none focus-visible:border-blue-regular px-3 py-[6px] ", { "border-[#cc0000]": errors.phone })}
          />
          {errors.phone && <span className="text-[#990000] text-[12px]">This field is required</span>}
        </div>

        <div className="flex flex-col py-2.5">
          <label className="pb-4 font-bold" htmlFor="companyWebsite">Company Website<sup className="text-[#990000]">*</sup></label>
          <input
            type="url"
            id="companyWebsite"
            {...register("companyWebsite", { required: true })}
            className={cn("border outline-none focus-visible:border-blue-regular px-3 py-[6px]", { "border-[#cc0000]": errors.companyWebsite })}
          />
          {errors.companyWebsite && <span className="text-[#990000] text-[12px]">This field is required</span>}
        </div>

        <div className="flex flex-col py-2.5">
          <label className="pb-4 font-bold">Monthly Shipping Volume<sup className="text-[#990000]">*</sup></label>
          <div className="flex gap-4 flex-wrap">
            <div className="text-base font-bold">
              <input className="mr-3" type="radio" id="lessThan100" value="< 100" {...register("monthlyShippingVolume", { required: true })} />
              <label htmlFor="lessThan100">Less than 100</label>
            </div>
            <div className="text-base font-bold">
              <input className="mr-3" type="radio" id="100to500" value="100 - 500" {...register("monthlyShippingVolume", { required: true })} />
              <label htmlFor="100to500">100 - 500</label>
            </div>
            <div className="text-base font-bold">
              <input className="mr-3" type="radio" id="500to1k" value="500 - 1k" {...register("monthlyShippingVolume", { required: true })} />
              <label htmlFor="500to1k">500 - 1k</label>
            </div>
            <div className="text-base font-bold">
              <input className="mr-3" type="radio" id="1kPlus" value="1k+" {...register("monthlyShippingVolume", { required: true })} />
              <label htmlFor="1kPlus">1k+</label>
            </div>
          </div>
          {errors.monthlyShippingVolume && <span className="text-[#990000] text-[12px]">This field is required</span>}
        </div>

        <div className="flex flex-col py-2.5">
          <label className="pb-4 font-bold">Average Shipping Weight</label>
          <div className="flex gap-4 flex-wrap">
            <div className="text-base font-bold">
              <input className="mr-3" type="radio" id="lessThan1lb" value="< 1 lbs." {...register("averageShippingWeight", { required: true })} />
              <label htmlFor="lessThan1lb">Less than 1 lbs.</label>
            </div>
            <div className="text-base font-bold">
              <input className="mr-3" type="radio" id="1to5lbs" value="1 - 5 lbs." {...register("averageShippingWeight", { required: true })} />
              <label htmlFor="1to5lbs">1 - 5 lbs.</label>
            </div>
            <div className="text-base font-bold">
              <input className="mr-3" type="radio" id="5to20lbs" value="5 - 20 lbs." {...register("averageShippingWeight", { required: true })} />
              <label htmlFor="5to20lbs">5 - 20 lbs.</label>
            </div>
            <div className="text-base font-bold">
              <input className="mr-3" type="radio" id="20pluslbs" value="20+ lbs." {...register("averageShippingWeight", { required: true })} />
              <label htmlFor="20pluslbs">20+ lbs.</label>
            </div>
          </div>
          {errors.averageShippingWeight && <span className="text-[#990000] text-[12px]">This field is required</span>}
        </div>

        <button
          type="submit"
          onClick={handleButtonClick}
          className="text-white font-semibold transition-all hover:shadow-button hover:-translate-y-1 w-[180px] mt-4 px-8 py-2.5 rounded-3xl font-lato bg-blue-regular"
        >
          Join Now
        </button>
      </form>
    </section>
  );
};
