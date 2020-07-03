import React from "react";
import PropTypes from "prop-types";
import Stack from "../layout-components/Stack";
import ReportDetailsCard from "./ReportDetailsCard";

const ReportDetails = () => (
  <Stack space="medium">
    <div>
      <h2>Detailed issues</h2>
      <p>What exactly can be improved?</p>
    </div>
    <ReportDetailsCard />
    <ReportDetailsCard />
    <ReportDetailsCard />
  </Stack>
);

ReportDetails.propTypes = {
  reportData: PropTypes.object,
};

export default ReportDetails;
