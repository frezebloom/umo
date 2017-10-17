import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePickerInput } from 'rc-datepicker';

import 'moment/locale/ru.js'
import 'rc-datepicker/lib/style.css';

class DocForm extends Component{
   constructor(props){
      super(props);


   }

//Открывание и закрывание формы
   newStateUpdateForm(){
      this.props.newStateAddForm(false);
   }



   render(){

      return(
         <div className="DocForm">
            <div className="headerWindow">
               Добавить новый документ
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="programmNumber" placeholder="№ программы" />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="fullName" placeholder="Ф.И.О." />
            </div>
            <div className="col-xs-6">
               <select defaultValue="" className="form-control" name="company" >
                   <option defaultValue="" hidden>Предприятие</option>
                   <option value="ЛАЭС-1">ЛАЭС-1</option>
                   <option value="ЛАЭС-2">ЛАЭС-2</option>
               </select>
            </div>
            <div>
            </div>
            <div className="col-xs-6">
               <select className="form-control" name="personnelCategory" >
                  <option defaultValue="" hidden>Категория персонала</option>
                   <option value="Оперативный">Оперативный</option>
                   <option value="Ремонтный">Ремонтный</option>
                   <option value="Административный">Административный</option>
                   <option value="Руководители">Руководители</option>
                   <option value="Специалисты">Специалисты</option>
                   <option value="Рабочие">Рабочие</option>
               </select>
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" id="subdivision" name="subdivision" placeholder="Подразделение" />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" id="position" name="position" placeholder="Должность" />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="theoreticalTraining" placeholder="Теоретическая подготовка" />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="practicalTraining" placeholder="Практическая подготовка" />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="internship" placeholder="Стажировка" />
            </div>
            <div className="col-xs-6">
              <DatePickerInput name="termOfTraining" className="my-custom-datepicker-component" placeholder="Срок подготовки обучения" />
            </div>
            <div className="col-xs-6">
               <DatePickerInput name="trainingInTheUTC" className="my-custom-datepicker-component" placeholder="Обучение в УТЦ" />
            </div>
            <div className="col-xs-6">
               <DatePickerInput name="trainingInTheUnit" className="my-custom-datepicker-component" placeholder="Обучение в подразделении" />
            </div>
            <div className="col-xs-6">
               <DatePickerInput name="registrationDateOfTheProgram" className="my-custom-datepicker-component" placeholder="Дата регистрации программы" />
            </div>
            <div className="col-xs-6">
               <DatePickerInput name="dateOfDelivery" className="my-custom-datepicker-component" placeholder="Дата сдачи программы" />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="fullNameProgram" placeholder="Ф.И.О. (Сдающий программу)" />
            </div>
            <div className="col-xs-6">
               <input className="form-control" type="text" name="link" placeholder="Ссылка" />
            </div>
            <div className="col-xs-6">
               <button type="button" className="btn btn-danger btn-lg btn-block" onClick={this.newStateAddForm}>Закрыть</button>
            </div>
            <div className="col-xs-6">
               <button type="button" className="btn btn-success btn-lg btn-block" onClick={this.handleSend}>Отправить</button>
            </div>
         </div>
      );
   }
}

export default connect(
   state => ({
      data: state
   }),
   dispatch => ({
      newStateUpdateForm: (state) => {
         dispatch({ type: 'SHOW_UPDATEFORM', payload: state });
      },
      newDocument: (state) => {
         dispatch({ type: 'NEW_DOCUMENT', payload: state });
      }
   })
)(DocForm);