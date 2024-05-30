
import { Helmet } from "react-helmet";
import { useFieldArray, useForm  } from 'react-hook-form';
import { MdAssignmentAdd } from "react-icons/md";
import useAuth from "../Hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
const AddAResume = () => {
  const {user} = useAuth();
  const { register, handleSubmit,control, reset } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'skills'
  });
  const onSubmit = (data) => {
  console.log(data);
  const resumeInfo = {userEmail: user?.email , profile: user?.photoURL , ...data}
  axios.post(`${import.meta.env.VITE_API_URL}/resume/${user?.email}`, resumeInfo)
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your resume has been added successfully!",
            icon: "success",
          });
        }
        reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data || error.message,
        });
      });
  };
  return (
    <section>
      <Helmet>
        <title>CareerLinkup || Add A Resume</title>
      </Helmet>
      <div className="py-4 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center gap-5 rounded-md mb-5">
        <h1 className="text-center text-white text-2xl">Add A Resume</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-4 rounded shadow-xl">
      <div className="grid md:grid-cols-2 gap-4">
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          id="name"
          className="input input-bordered w-full"
          {...register('name', { required: true })}
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="position">
          <span className="label-text">Position</span>
        </label>
        <input
          type="text"
          id="position"
          className="input input-bordered w-full"
          {...register('position', { required: true })}
        />
      </div>
      </div>
      <h2 className="my-5 text-xl font-bold">Contact Info</h2>
      <div className="grid md:grid-cols-2 gap-4">
      <div className="form-control">
        <label className="label" htmlFor="Linkedin">
          <span className="label-text">Linkedin</span>
        </label>
        <input
          type="text"
          id="Linkedin"
          className="input input-bordered w-full"
          {...register('linkedin', { required: true })}
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="facebook">
          <span className="label-text">Facebook</span>
        </label>
        <input
          type="text"
          id="facebook"
          className="input input-bordered w-full"
          {...register('facebook', { required: true })}
        />
      </div>
      </div>
     
      <div className="grid md:grid-cols-2 gap-4">
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          id="email"
          className="input input-bordered w-full"
          {...register('email', { required: true })}
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="phone">
          <span className="label-text">Phone</span>
        </label>
        <input
          type="number"
          id="phone"
          className="input input-bordered w-full"
          {...register('phone', { required: true })}
        />
      </div>
      </div>

      <h2 className="my-5 text-xl font-bold">Education Info</h2>
      <div className="grid md:grid-cols-2 gap-4">
      <div className="form-control">
        <label className="label" htmlFor="passingYear">
          <span className="label-text">Passing Year</span>
        </label>
        <input
          type="date"
          id="passingYear"
          className="input input-bordered w-full"
          {...register('passingYear', { required: true })}
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="institutionName">
          <span className="label-text">Institution Name</span>
        </label>
        <input
          type="text"
          id="institutionName"
          className="input input-bordered w-full"
          {...register('institutionName', { required: true })}
        />
      </div>
      </div>
      <h2 className="my-5 text-xl font-bold">Professional Experience</h2>
      <div className="grid md:grid-cols-2 gap-4">
      <div className="form-control">
        <label className="label" htmlFor="experienceTitle">
          <span className="label-text">Experience Title</span>
        </label>
        <input
          type="text"
          id="experienceTitle"
          className="input input-bordered w-full"
          {...register('experienceTitle', { required: true })}
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="experienceDescription">
          <span className="label-text">Description</span>
        </label>
        <textarea
          id="experienceDescription"
          className="textarea textarea-bordered w-full h-7"
          {...register('experienceDescription', { required: true })}
        ></textarea>
      </div>
      </div>
      <h2 className="my-5 text-xl font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
      <div className="form-control">
        <label className="label" htmlFor="projectsTitle">
          <span className="label-text">Projects Title</span>
        </label>
        <input
          type="text"
          id="projectsTitle"
          className="input input-bordered w-full"
          {...register('projectsTitle', { required: true })}
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="projectsDescription">
          <span className="label-text">Description</span>
        </label>
        <textarea
          id="projectsDescription"
          className="textarea textarea-bordered w-full h-7"
          {...register('projectsDescription', { required: true })}
        ></textarea>
      </div>
      </div>
      <div className="form-control">
        <label className="label" htmlFor="about">
          <span className="label-text">About</span>
        </label>
        <textarea
          id="about"
          className="textarea textarea-bordered w-full"
          {...register('about', { required: true })}
        ></textarea>
      </div>
      <div className="form-control">
      <h2 className="my-5 flex items-center gap-5 text-xl font-bold">Skills <span> <button type="button" onClick={() => append({ name: '' })}>
      <MdAssignmentAdd className="text-2xl" />
        </button></span></h2>
        {fields.map((field, index) => (
          <div key={field.id} className="flex mb-2">
            <input
              type="text"
              className="input input-bordered w-1/3"
              {...register(`skills.${index}.name`, { required: true })}
            />
            <button type="button" className="btn bg-blue-500 text-white rounded-lg ml-2 " onClick={() => remove(index)}>
              Remove
            </button>
            
          </div>
        ))}
       <button type="button" className="btn bg-blue-500 text-white rounded-lg w-40" onClick={() => append({ name: '' })}>
        Add Skill
      <MdAssignmentAdd className="text-2xl" />
        </button>
      </div>
      <button type="submit" className="btn w-40 bg-blue-500 text-white block rounded-lg mt-4 mx-auto">
        Add A Resume
      </button>
    </form>
    </section>
  );
};

export default AddAResume;
