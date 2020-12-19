import React, { useEffect, useState, useCallback } from "react";
import {
  PopUp,
  HeaderBar,
  Card,
  CardLabel,
  SectionalDropdown,
  TextArea,
  CardLabelDesc,
  UploadFile,
  ButtonSelector,
  Loader,
} from "@egovernments/digit-ui-react-components";
import { useTranslation } from "react-i18next";
import useEmployeeFilter from "../hooks/useEmployeeFilter";

const Modal = (props) => {
  const roles = props.employeeRoles.filter((role) => role.action === props.selectedAction);
  const { complaintDetails } = props;
  console.log("modalllll", roles, complaintDetails);
  const { isLoading: employeeDataLoading, error, isError, data: useEmployeeData } = useEmployeeFilter(
    "pb.amritsar",
    roles[0].roles,
    complaintDetails
  );
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [comments, setComments] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!employeeDataLoading) console.log("-------------------------->>>>>>>>>>>>>>", useEmployeeData, error);
  });

  const employeeData =
    useEmployeeData && !employeeDataLoading
      ? useEmployeeData.map((departmentData) => {
          return { heading: departmentData.department, options: departmentData.employees };
        })
      : [];

  useEffect(async () => {
    if (file) {
      const response = await Digit.UploadServices.Filestorage(file);
      setUploadedFile(response.data.files[0].fileStoreId);
    }
  }, file);

  function onSelectEmployee(employee) {
    setSelectedEmployee(employee);
  }

  function addComment(e) {
    setComments(e.target.value);
  }

  function selectfile(e) {
    setFile(e.target.files[0]);
  }

  if (employeeDataLoading) {
    return (
      <PopUp>
        <div className="popup-module">
          <Loader />
        </div>
      </PopUp>
    );
  }

  // if (error) {
  //   return (
  //     <PopUp>
  //       <div className="popup-module">Error Fetching Employee Data</div>
  //     </PopUp>
  //   );
  // }

  return (
    <PopUp>
      <div className="popup-module">
        <HeaderBar main={props.headerBarMain} end={props.headerBarEnd} />
        <div className="popup-module-main">
          <Card>
            {props.selectedAction === "REJECT" || props.selectedAction === "RESOLVE" ? null : (
              <React.Fragment>
                <CardLabel>{t("CS_COMMON_EMPLOYEE_NAME")}</CardLabel>
                {employeeData && (
                  <SectionalDropdown selected={selectedEmployee} menuData={employeeData} displayKey="name" select={onSelectEmployee} />
                )}
              </React.Fragment>
            )}
            <CardLabel>{t("CS_COMMON_EMPLOYEE_COMMENTS")}</CardLabel>
            <TextArea onChange={addComment} />
            <CardLabel>{t("CS_ACTION_SUPPORTING_DOCUMENTS")}</CardLabel>
            <CardLabelDesc>{t(`TL_UPLOAD_RESTRICTIONS`)}</CardLabelDesc>
            <UploadFile
              accept=".jpg"
              onUpload={selectfile}
              message={uploadedFile ? `1 ${t(`CS_ACTION_FILEUPLOADED`)}` : t(`CS_ACTION_NO_FILEUPLOADED`)}
            />
          </Card>
          <div className="popup-module-action-bar">
            <ButtonSelector theme="border" label={t("CS_COMMON_CANCEL")} onSubmit={() => props.onCancel()} />
            <ButtonSelector
              label={t("CS_COMMON_ASSIGN")}
              onSubmit={() => {
                console.log(selectedEmployee, comments, uploadedFile);
                props.onAssign(selectedEmployee, comments, uploadedFile);
              }}
            />
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default Modal;
