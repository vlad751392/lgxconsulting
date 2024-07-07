import { FC } from "react";
// import {  useForm } from "react-hook-form";

// import cn from "classnames";
// import axios from "axios";
import telegram from '../../assets/svg/tg-button-icon.svg';

export const JoinUs: FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm();
  // const [modalIsOpen, setIsOpen] = useState(false);
  // const [reqError, setReqError] = useState(false);
  // const strapiURL = import.meta.env.VITE_STRAPI_URL 

  // function openModal() {
  //   setIsOpen(true);
  // }

  // const customStyles = {
  //   content: {
  //     top: '10%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //     background: '#000',
  //     border: '2px solid #5D4FFF'
  //   },
  // };

  // function closeModal() {
  //   setIsOpen(false);
  // }



//   const onSubmit = (data :any) => {
    
//     console.log(data);
    

// // Данные для отправки
// const bearerToken = import.meta.env.VITE_STRAPI_TOKEN;

// const data1 = {
//   "data": {
//     "Email": data.Email
//   }  
// };

// // Запрос с заголовком Bearer токена
// axios.post( `${strapiURL}/api/orbiton-users-emails`, data1, {
//   headers: {
//     'Authorization': `Bearer ${bearerToken}`,
//     'Content-Type': 'application/json'
//     // Другие заголовки при необходимости
//   }
// })
//   .then(response => {
//     console.log('Успешный ответ:', response.data);
//     setIsOpen(true);
//     setTimeout(() => {
//       setIsOpen(false); // Через 3 секунды устанавливаем isOpen в false
//   }, 3000); 
//   })
//   .catch(error => {
//     console.error('Ошибка запроса:', error);
//     setReqError(true);
//     setTimeout(() => {
//       setReqError(false); // Через 3 секунды устанавливаем isOpen в false
//   }, 3000); 
//   });

//   reset();

//   }
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleButtonClick = () => {
//     setFormSubmitted(true); 
//     setTimeout(() => {
//       setFormSubmitted(false);
//     }, 500);
//   };

  return (
    
    <section className="mx-auto w-full sm:w-fit join-us flex items-center flex-col gap-6 mb-5 sm:mb-0">

    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="e-mail"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className={cn("w-[236px]", {
            "invalid-input": errors.Email && formSubmitted,
          })}
        />

        <button
          type="submit"
          onClick={handleButtonClick}
          className="text-white font-semibold px-8 py-2.5 rounded-lg font-lato"
        >
          Join Now
        </button>
      </form>

    </section>
    
  );
};
