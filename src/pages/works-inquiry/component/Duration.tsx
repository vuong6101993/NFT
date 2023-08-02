import { Select } from "antd";
import useTranslation from "@/hooks/useTranslation";
import React, { useState } from "react";

const Duration = (props: any) => {
  return (
    <div className="flex flex-col mb-[24px] w-full">
      <label className="text-black text-[16px] font-bold mb-6">Duration</label>

      <Select
        className="mt-[4px]"
        defaultValue="1 month"
        // onChange={handleChange}
        options={[
          { value: "1 month", label: "1 month" },
          { value: "2 month", label: "2 month" },
          { value: "3 month", label: "3 month" },
          { value: "4 month", label: "4 month" },
        ]}
      />
    </div>
  );
};

export default Duration;
