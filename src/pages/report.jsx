import React from "react";
import ReportLoading from "../components/report/ReportLoading";
import ReportLoaded from "../components/report/ReportLoaded";
import { mockReportData } from "../data/reportData";

const ReportPage = () =>
  mockReportData ? <ReportLoaded /> : <ReportLoading />;

export default ReportPage;
