"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaRegUser, FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineSubject } from "react-icons/md";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMeForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5">
      <label className="block mb-2 text-sm font-medium text-[var(--color-gray-light)] dark:text-white">
        Name
      </label>
      <div className="flex">
        <span className="form-input-icon">
          <FaRegUser className="w-4 h-4 text-[var(--color-cyan-dark)]" />
        </span>
        <input
          id="name"
          type="text"
          {...register("name", { required: true })}
          className="form-input"
        />
      </div>
      {errors.name && (
        <p className="text-sm font-medium text-red-600">Name is required</p>
      )}

      <label className="block mb-2 pt-5 text-sm font-medium text-[var(--color-gray-light)] dark:text-white">
        Email
      </label>
      <div className="flex">
        <span className="form-input-icon">
          <MdOutlineEmail className="w-4 h-4 text-[var(--color-cyan-dark)]" />
        </span>
        <input
          id="email"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="form-input"
        />
      </div>
      {errors.email && (
        <p className="text-sm font-medium text-red-600">Invalid Email</p>
      )}

      <label className="block mb-2 pt-5 text-sm font-medium text-[var(--color-gray-light)] dark:text-white">
        Subject
      </label>
      <div className="flex">
        <span className="form-input-icon">
          <MdOutlineSubject className="w-4 h-4 text-[var(--color-cyan-dark)]" />
        </span>
        <input
          id="subject"
          type="text"
          {...register("subject", { required: true })}
          className="form-input"
        />
      </div>
      {errors.subject && (
        <p className="text-sm font-medium text-red-600">Subject is required</p>
      )}

      <label className="block mb-2 pt-5 text-sm font-medium text-[var(--color-gray-light)] dark:text-white">
        Message
      </label>
      <div className="flex">
        <span className="form-input-icon">
          <FaRegCommentAlt className="w-4 h-4 text-[var(--color-cyan-dark)]" />
        </span>
        <textarea
          id="message"
          rows={4}
          {...register("message", { required: true })}
          className="form-input"
        />
      </div>
      {errors.message && (
        <p className="text-sm font-medium text-red-600">Message is required</p>
      )}

      <input
        type="submit"
        value="Send"
        className="flex mt-5 p-2 border border-white rounded-md cursor-pointer"
      />
    </form>
  );
};

export default ContactMeForm;
