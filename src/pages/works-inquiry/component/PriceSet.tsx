import { Input } from "antd";
import useTranslation from "@/hooks/useTranslation";
import React, { useState } from "react";

const PriceSet = (props: any) => {
  return (
    <div className="flex flex-col mb-[24px] w-full">
      <label className="text-black text-[16px] font-bold">Set a price</label>
      <div className="w-full flex flex-col select-type-option border-select-type-option mt-[4px]">
        <label className="text-black text-[14px] font-bold">
          Starting price
        </label>
        <div className="relative mt-[4px]">
          <Input className="rounded-[12px]" value={"0.005"}></Input>
          <label className="absolute right-[12px] top-[4px] text-black text-[16px] font-bold">
            WETH
          </label>
        </div>
      </div>
    </div>
  );
};

export default PriceSet;
