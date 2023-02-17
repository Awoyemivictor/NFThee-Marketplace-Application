import React from "react";
import { useTranslation } from "react-i18next";

export const SectionHeading = ({ heading }) => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="section-title mb-1">{t(heading)}</h2>
      {/* <span>
        <img src="images/path1.png" className="img-fluid" />
      </span> */}
    </div>
  );
};


