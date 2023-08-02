import { Select } from "antd";
import useTranslation from "@/hooks/useTranslation";
import React, { useState } from "react";

const Summary = (props: any) => {
  return (
    <div className="flex flex-col mb-[24px] w-full">
      <label className="text-black mb-[24px] text-[16px] font-bold">
        Summary
      </label>
      <div className="flex flex-row justify-between">
        <label>Listing price</label>
        <span className="text-black text-[16px] font-[500]">0,005 ETH</span>
      </div>
      <div className="flex flex-row justify-between">
        <label>Creator earnings</label>
        <span className="text-black text-[16px] font-[500]">0%</span>
      </div>
      <div className="flex flex-row justify-between">
        <label>NFT Art Marketplace ZEZI fee</label>
        <span className="text-black text-[16px] font-[500]">2.5%</span>
      </div>
      <div className="w-full line-break-summary h-[1px]"></div>
      <div className="flex flex-row justify-between items-center">
        <label>Total potential earnings</label>
        <div className="flex flex-col items-end">
          <span className="text-black text-[16px] font-bold">0,0049 ETH</span>
          <span className="text-black text-[16px] font-[500]">0,005 ETH</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
