CREATE TABLE IF NOT EXISTS Student (
  formRoll  VARCHAR(250) PRIMARY KEY,
  formName VARCHAR(250)  NULL,
  formClass VARCHAR(250)  NULL,
  formCourse VARCHAR(250)  NULL,
  formSemest VARCHAR(250)  NULL,
  formContact VARCHAR(250)  NULL,
  formAddress VARCHAR(250)  NULL,
  formFeesTotal VARCHAR(250)  NULL,
  formFeesPaid VARCHAR(250)  NULL,
  formFeesDue VARCHAR(250)  NULL
);

CREATE TABLE  IF NOT EXISTS Book (
  formbookID  VARCHAR(250) PRIMARY KEY,
  formAuthor VARCHAR(250)  NULL,
  formbookName VARCHAR(250)  NULL,
  formStudentId VARCHAR(250)  NULL,
  formIssuedate VARCHAR(250)  NULL
);

CREATE TABLE  IF NOT EXISTS Teacher (
  formTeacherID  VARCHAR(250) PRIMARY KEY,
  formTeacherName VARCHAR(250)  NULL,
  formTeacherContact VARCHAR(250)  NULL,
  formTotalSalary VARCHAR(250)  NULL,
  formSalaryDue VARCHAR(250)  NULL,
  formSalaryPaid VARCHAR(250)  NULL
);

