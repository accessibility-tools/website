import React from "react";
import Stack from "../layout-components/Stack";
import DetailsCategory from "./DetailsCategory";
import { mockReportData } from "../../data/reportData";

const ReportDetails = () => (
  <Stack space="medium">
    <div>
      <h2>Detailed issues</h2>
      <p>What exactly can be improved?</p>
    </div>
    {Object.keys(mockReportData).map(category => (
      <DetailsCategory
        key={category}
        category={category}
        issues={mockReportData[category]}
      />
    ))}
  </Stack>
);

export default ReportDetails;
