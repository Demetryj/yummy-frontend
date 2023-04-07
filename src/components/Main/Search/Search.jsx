// import PropTypes from 'prop-types';
// import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
//import { useDispatch, useSelector } from 'react-redux';
//  Нужно записать, что ввели в строку поиска в Local Storage
import {Input, Button, SearchForm, SearchFormContainer} from "./Search.styled";


export const Search = () => {
    // const dispatch = useDispatch();

    // const handleInputChange = e => {
    //     setQuery(e.currentTarget.value.toLowerCase());
    //   };

    // const handleSubmit = event => {
    //         event.preventDefault();
    //         const form = event.target;
       
    //         dispatch(addQuery(form.elements.text.value));
    //         form.reset();
    //       };
        
          return (<SearchFormContainer>
            <SearchForm 
            // onSubmit={handleSubmit}
            >
              <Input type="text"
            name="query"
            // value={query}
            // onChange={handleInputChange}
            autocomplete="off"
            autoFocus
            placeholder="Beef" />
              <Button type="submit">Search</Button>
            </SearchForm>
          </SearchFormContainer>  
          );
}




// export const TaskForm = () => {
//   // Получаем ссылку на функцию отправки экшенов
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     const form = event.target;
//     // Вызываем генератор экшена и передаем текст задачи для поля payload
//     // Отправляем результат - экшен создания задачи
//     dispatch(addTask(form.elements.text.value));
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="text" placeholder="Enter task text..." />
//       <button type="submit">Add task</button>
//     </form>
//   );
// // }