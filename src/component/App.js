import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Header from "./Header.js";
import DocForm from "./DocForm.js";
import Table from "./Table.js";
import UpdateForm from "./UpdateForm.js";
import AddValidation from "./AddValidation.js";
import TrashModalWindow from "./TrashModalWindow.js";
import TrashMessage from "./TrashMessage.js";
import UpdateValidation from "./UpdateValidation.js";
import SearchForm from "./SearchForm.js";
import SearchTable from "./SearchTable.js";

class App extends Component {
  componentDidMount() {
  //   axios
  //     .post("/", {})
  //     .then(
  //       function(response) {
  //         this.props.allDocuments(response.data);
  //       }.bind(this)
  //     )
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

    var allDocuments = [
      {
        id: 22,
        programmNumber: "18365",
        fullName: "ярема Михаил Николаевич",
        company: "ЛАЭС-1",
        personnelCategory: "Оперативный",
        subdivision: "реакторный цех",
        position: "3",
        theoreticalTraining: "4",
        practicalTraining: "5",
        internship: "6",
        termOfTraining: "53",
        trainingInTheUTC: "2017-12-17 10:41:01",
        trainingInTheUnit: "2017-12-15 10:41:01",
        registrationDateOfTheProgram: "2017-12-13 10:41:01",
        dateOfDelivery: "2017-12-10 10:41:01",
        fullNameProgram: "5",
        link: "4",
        status: 1
      },
      {
        id: 23,
        programmNumber: "18366",
        fullName: "Барисполь Валентин Иванович",
        company: "ЛАЭС-2",
        personnelCategory: "Рабочие",
        subdivision: "3",
        position: "3",
        theoreticalTraining: "4",
        practicalTraining: "5",
        internship: "2",
        termOfTraining: "54",
        trainingInTheUTC: "2018-07-19 10:41:09",
        trainingInTheUnit: "2015-02-28 10:41:09",
        registrationDateOfTheProgram: "2012-04-15 10:41:09",
        dateOfDelivery: "2017-05-20 10:41:09",
        fullNameProgram: "2",
        link: "2",
        status: 0
      }
    ];
    this.props.allDocuments(allDocuments);
  }

  render() {
    var updateForm,
      addValidation,
      trashModalWindow,
      trashMessage,
      updateValidation,
      table,
      docForm,
      searchForm,
      searchTable;

    this.props.data.showUpdateForm ? (updateForm = <UpdateForm />) : false;
    this.props.data.showAddValidationForm
      ? (addValidation = <AddValidation />)
      : false;
    this.props.data.showTrashModalWindow
      ? (trashModalWindow = <TrashModalWindow />)
      : false;
    this.props.data.showTrashMessage
      ? (trashMessage = <TrashMessage />)
      : false;
    this.props.data.showUpdateValidation
      ? (updateValidation = <UpdateValidation />)
      : false;
    this.props.data.showTable ? (table = <Table />) : false;
    this.props.data.showAddForm ? (docForm = <DocForm />) : false;
    this.props.data.showSearchForm ? (searchForm = <SearchForm />) : false;
    this.props.data.showSearchTable ? (searchTable = <SearchTable />) : false;

    return (
      <div>
        <Header />
        {table}
        {updateForm}
        {addValidation}
        {trashModalWindow}
        {trashMessage}
        {updateValidation}
        {searchForm}
        {docForm}
        {searchTable}
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({
    allDocuments: state => {
      dispatch({ type: "ALL_DOCUMENTS", payload: state });
    }
  })
)(App);
