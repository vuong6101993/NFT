import { Input, Switch } from "antd";
import useTranslation from "@/hooks/useTranslation";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const MoreOptions = (props: any) => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="flex flex-col mb-[24px] w-full relative">
      <DownOutlined className="absolute right-[0] top-[7px]" />
      <label className="text-black text-[16px] font-bold">More options</label>
      <div className="w-full flex flex-col select-type-option border-select-type-option mt-[4px]">
        <label className="text-black text-[14px] font-bold">
          <Switch defaultChecked onChange={onChange} size="small" />
          Include reserve price
        </label>
        <div className="relative mt-[4px]">
          <Input className="rounded-[12px]" value={"1"}></Input>
          <label className="absolute right-[12px] top-[4px] text-black text-[16px] font-bold">
            WETH
          </label>
        </div>
      </div>
    </div>
  );
};

export default MoreOptions;
