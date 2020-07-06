import React from "react";
import PropTypes from "prop-types";
import ReportLoading from "../components/report/ReportLoading";
import ReportLoaded from "../components/report/ReportLoaded";

const ReportPage = reportData =>
  reportData ? <ReportLoaded /> : <ReportLoading />;

ReportPage.defaultProp = {
  reportData: PropTypes.object,
};

export default ReportPage;
