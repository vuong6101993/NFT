import { Radio, RadioChangeEvent } from "antd";
import useTranslation from "@/hooks/useTranslation";
import React, { useState } from "react";

const TypeOfSaleS = (props: any) => {
  const { checkType, setCheckType } = props;

  const onChange = (e: RadioChangeEvent) => {
    setCheckType(e.target.value);
  };

  return (
    <div className="flex flex-col mb-[24px] w-full">
      <label className="text-black	text-[16px] font-bold">
        Choose a type of sale
      </label>
      <span className="text-black	text-[14px] mb-[16px]">
        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB,
        GLTF. Max size: 100 MB
      </span>

      <Radio.Group onChange={onChange} value={checkType}>
        <div
          className={`w-full flex flex-col select-type-option ${
            checkType === 1
              ? "border-select-type-option-checked"
              : "border-select-type-option"
          }`}
        >
          <Radio value={1}>
            Sell to highest bidder
            <span className="block text-[14px] font-normal">
              The highest bid wins at the end.
            </span>
          </Radio>
        </div>
        <div
          className={`w-full flex flex-col select-type-option mt-[8px] ${
            checkType === 2
              ? "border-select-type-option-checked"
              : "border-select-type-option"
          }`}
        >
          <Radio value={2}>
            Sell with declining price{" "}
            <span className="block text-[14px] font-normal">
              The price falls until someone purchases the item.
            </span>
          </Radio>
        </div>
      </Radio.Group>
    </div>
  );
};

export default TypeOfSaleS;
